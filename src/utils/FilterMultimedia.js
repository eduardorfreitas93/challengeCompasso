import {useCallback} from 'react';

function FilterMultimedia() {
  return useCallback((item) => {
    if (!item) return null;
console.log('aquiiiii');
    return item.multimedia.filter((item) => item.format === 'superJumbo')[0];
  }, []);
}

export default FilterMultimedia;
