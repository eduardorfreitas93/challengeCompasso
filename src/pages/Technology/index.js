import React, {useEffect, useState} from 'react';

import {Container, Content} from './styles';

import api from '../../config/api';
import ListNews from '../../components/ListNews';

function TechnologyScreen() {
  const [dataTechnology, setDataTechnology] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function getTechnology() {
    if (loading) return;

    setLoading(true);
    try {
      const res = await api.get('/svc/topstories/v2/technology.json');

      setDataTechnology(res.data.results);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  async function refreshList() {
    setRefreshing(true);

    await getTechnology();

    setRefreshing(false);
  }

  useEffect(() => {
    getTechnology();
  }, []);

  return (
    <Container>
      <Content>
        <ListNews
          dataNews={dataTechnology}
          loading={loading}
          refreshList={refreshList}
          loadingRefreshing={refreshing}
        />
      </Content>
    </Container>
  );
}

export default TechnologyScreen;
