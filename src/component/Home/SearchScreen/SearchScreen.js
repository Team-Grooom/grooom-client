import React, {useState} from 'react';
import {View} from 'react-native';
import SearchTopTabNavigator from '../TopTab/SearchTopTabNavigator';
import SearchBar from './SearchBar';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <SearchTopTabNavigator />
    </>
  );
};

export default SearchScreen;
