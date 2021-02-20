import React, {useRef, useCallback, forwardRef, useImperativeHandle, useEffect, useState} from 'react';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import moment from 'moment';

import {Title, Description, DateText} from './styles';
import Image from '../Image';

function ModalNews(props, ref) {
  const modalizeRef = useRef(null);

  const [item, setItem] = useState(null);

  const handleImage = useCallback((item) => {
    if (!item) return null;
    return item.multimedia.filter((item) => item.format === 'superJumbo')[0];
  }, [item]);

  const multimedia = handleImage(item);

  useImperativeHandle(ref, () => ({
    open: (item) => {
      setItem(item);
    },
  }));

  function onClosed() {
    setItem(null);
  }

  useEffect(() => {
    if (!item) return;
    modalizeRef.current?.open();
  }, [item]);

  return (
    <Portal>
      <Modalize
        onClosed={onClosed}
        ref={modalizeRef}
      >
        <Image
          aspectRatio={multimedia?.width / multimedia?.height}
          source={{uri: multimedia?.url}}
        />

        <Title>{item?.title}</Title>
        <DateText>{moment(item?.published_date).fromNow()}</DateText>
        <Description>{item?.abstract}</Description>
      </Modalize>
    </Portal>
  );
}

ModalNews = forwardRef(ModalNews);

export default ModalNews;
