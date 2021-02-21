import React from 'react';
import {render} from '@testing-library/react-native';

import Image from '../../src/components/Image';

describe('Image component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should check if image component exists', () => {
    const {getByTestId} = render(<Image
      source={{uri: 'http://ima.com'}}
      aspectRatio={1}
    />);

    expect(getByTestId('image-test')).toBeTruthy();
  });
});
