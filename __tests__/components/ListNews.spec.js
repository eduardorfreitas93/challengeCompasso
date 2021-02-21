import React from 'react';
import {render, act} from '@testing-library/react-native';

import ListNews from '../../src/components/ListNews';

jest.mock('../../src/components/ModalNews', () => 'ModalNews');
jest.mock('@react-navigation/native', () => {
  return {
    useScrollToTop: jest.fn(),
  };
});

const mockSetState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initial) => [initial, mockSetState],
}));

describe('ListNews component', () => {
  const arrMock = [
    {
      index: 0,
      id: 1,
      name: 'dsdsd',
      multimedia: [
        {
          format: 'superJumbo',
          width: 10,
          height: 10,
          url: 'http://test.com',
        },
      ],
    },
    {
      index: 1,
      id: 2,
      name: 'dsdsd2',
      multimedia: [
        {
          format: 'superJumbo',
          width: 10,
          height: 10,
          url: 'http://test.com',
        },
      ],
    },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should check if component list is empty', () => {
    const {getByTestId} = render(<ListNews
      dataNews={[]}
      loading={false}
    />);

    expect(getByTestId('flat-list').props.data.length).toBe(0);
  });

  it('should check if component list is not empty', () => {
    const {getByTestId} = render(<ListNews
      dataNews={arrMock}
      loading={false}
    />);

    expect(getByTestId('flat-list').props.data.length).toBe(arrMock.length);
  });

  it('should check if component Loading is showing', () => {
    const {getByTestId} = render(<ListNews
      dataNews={[]}
      loading
    />);

    expect(getByTestId('loading-list')).not.toBeNull();
  });

  it('should check if component Loading is not showing', () => {
    const {queryByTestId} = render(<ListNews
      dataNews={ [] }
      loading={ false }
    />);

    expect(queryByTestId('loading-list')).toBeNull();
  });

  it('should call function when list item is visible', () => {
    const {getByTestId} = render(<ListNews
      dataNews={arrMock}
      loading={false}
    />);

    act(() => {
      getByTestId('flat-list').props.onViewableItemsChanged({changed: arrMock});
    });
    expect(mockSetState).toHaveBeenCalledTimes(1);
    expect(mockSetState).toHaveBeenCalledWith([0, 1]);
  });
});
