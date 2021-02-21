import React from 'react';
import {Original} from './styles';

const Image = ({source, aspectRatio = 1}) => (
  <Original
    testID='image-test'
    source={source}
    aspect={aspectRatio}
    resizeMode="contain"
  />
);

export default Image;
