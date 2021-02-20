import React from 'react';
import {render} from '@testing-library/react-native';

import TechnologyScreen from '../../src/pages/Technology';

jest.mock('react-native-gesture-handler', () => {});
jest.mock('@react-navigation/native', () => {
  return {
    useScrollToTop: jest.fn(),
  };
});

describe('Technology page', () => {
  it('testd', () => {
    const {debug} = render(<TechnologyScreen />);

    debug()
  });
});
