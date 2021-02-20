import React from 'react';
import {Original} from './styles';

const Image = ({source, aspectRatio = 1}) => (
  <Original
    source={source}
    aspect={aspectRatio}
    resizeMode="contain"
  />
);

export default Image;
