import {renderHook} from '@testing-library/react-hooks'
import FilterMultimedia from '../../src/utils/FilterMultimedia';

describe('FilterMultimedia', () => {
  it('should check if return null', () => {
    const {result} = renderHook(() => FilterMultimedia());

    expect(result.current()).toBeNull();
  });

  it('should check if return one object multimedia', () => {
    const item = {
      multimedia: [
        {
          url: 'http://test.com',
          format: 'superJumbo',
        },
      ],
    };

    const {result} = renderHook(() => FilterMultimedia());

    expect(result.current(item)).toBe(item.multimedia[0]);
  });
});
