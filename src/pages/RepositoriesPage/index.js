import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { useParams } from 'react-router-dom';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Loading, Container, Sidebar, Main, ButtonBack } from './styles';

import { getUser, getRepos, getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {
  const { login } = useParams();

  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repoResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);

      setUser(userResponse.data);
      setRepositories(repoResponse.data);
      setLanguages(getLangsFrom(repoResponse.data));

      setLoading(false);
    };

    loadData();
  }, []);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return <Loading>Carregando</Loading>;
  }

  return (
    <Container>
      <Sidebar>
        <ButtonBack to="/">
          <AiOutlineArrowLeft size={20} />
        </ButtonBack>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
