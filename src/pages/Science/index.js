import React, {useEffect, useState} from 'react';

import {
  Container,
  Content,
} from './styles';

import api from '../../config/api';
import ListNews from '../../components/ListNews';

function ScienceScreen() {
  const [dataScience, setDataScience] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function getScience() {
    if (loading) return;

    setLoading(true);
    try {
      const res = await api.get('/svc/topstories/v2/science.json');

      setDataScience(res.data.results);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  async function refreshList() {
    setRefreshing(true);

    await getScience();

    setRefreshing(false);
  }

  useEffect(() => {
    getScience();
  }, []);

  return (
    <Container>
      <Content>
        <ListNews
          dataNews={dataScience}
          loading={loading}
          refreshList={refreshList}
          loadingRefreshing={refreshing}
        />
      </Content>
    </Container>
  );
}

export default ScienceScreen;
