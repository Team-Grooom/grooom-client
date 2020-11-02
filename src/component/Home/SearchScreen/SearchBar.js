import React from 'react';
import {SearchBar} from 'react-native-elements';

const SearchBarComponent = ({searchValue, setSearchValue}) => {
  const updateSearch = search => {
    setSearchValue(search);
  };

  return (
    <SearchBar
      placeholder="검색어를 입력하세요"
      onChangeText={updateSearch}
      value={searchValue}
      lightTheme={true}
    />
  );
};

export default SearchBarComponent;
