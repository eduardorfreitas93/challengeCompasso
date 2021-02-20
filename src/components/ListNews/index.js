import React, {useRef, useState, useCallback} from 'react';
import {useScrollToTop} from '@react-navigation/native';
import {FlatList} from 'react-native';

import LazyImage from '../../components/LazyImage';
import ModalNews from '../../components/ModalNews';

import {Post, Title, Loading} from './styles';

function ListNews({dataNews, loading, refreshList = () => {}, refreshing = false}) {
  const refFlatList = useRef(null);
  const modalRef = useRef(null);

  const [viewable, setViewable] = useState([]);

  useScrollToTop(refFlatList);

  const handleViewableChanged = useCallback(({changed}) => {
    setViewable(changed.map(({index}) => index));
  }, []);

  const handleImage = useCallback((item) => {
    return item.multimedia.filter((item) => item.format === 'superJumbo')[0];
  }, []);

  function openModal(item) {
    modalRef.current.open(item);
  }

  function renderListItemTechnology(item, index) {
    const {width, height, url: uri} = handleImage(item);

    return (
      <Post activeOpacity={0.8} onPress={() => openModal(item)}>
        <LazyImage
          aspectRatio={width / height}
          shouldLoad={viewable.includes(index)}
          smallSource={{uri}}
          source={{uri}}
        />

        <Title>{item.title}</Title>
      </Post>
    );
  }

  return (
    <>
      <FlatList
        ref={refFlatList}
        key="list"
        data={dataNews}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 10,
        }}
        onRefresh={refreshList}
        refreshing={refreshing}
        keyExtractor={(_, index) => String(index)}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={loading && <Loading />}
        renderItem={({item, index}) => renderListItemTechnology(item, index)}
      />

      <ModalNews ref={modalRef} />
    </>
  );
}

export default ListNews;
