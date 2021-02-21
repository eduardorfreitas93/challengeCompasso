import {useCallback} from 'react';

function useFilterMultimedia() {
  return useCallback((item) => {
    if (!item) return null;

    return item.multimedia.filter((item) => item.format === 'superJumbo')[0];
  }, []);
}

export default useFilterMultimedia;
