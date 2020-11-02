import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import {categoryFetch} from '../api/CategoryFetch';
import CategoryTemplate from '../component/template/CategoryTemplate';

const CategoryView = ({navigation}) => {
  const [categoryList, setCategoryList] = useState([
    {
      _id: '5f0f33c6f9cffe4cb0bef5ee',
      type: '중고거래',
      categories: [
        {
          _id: '5f0f33c6f9cffe4cb0bef5ef',
          name: '인기매물',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef5f0',
          name: '디지털/가전',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef5f1',
          name: '가구/인테리어',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef5f2',
          name: '유아동/유아도서',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef5f3',
          name: '생활/가공식품',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef5f4',
          name: '스포츠/레저',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef5f5',
          name: '여성잡화',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef5f6',
          name: '여성의류',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef5f7',
          name: '남성패션/잡화',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef5f8',
          name: '게임/취미',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef5f9',
          name: '뷰티/미용',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef5fa',
          name: '반려동물용품',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef5fb',
          name: '도서/티켓/음반',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef5fc',
          name: '기타 중고물품',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef5fd',
          name: '삽니다',
        },
      ],
      __v: 0,
    },
    {
      _id: '5f0f33c6f9cffe4cb0bef5fe',
      type: '동네홍보',
      categories: [
        {
          _id: '5f0f33c6f9cffe4cb0bef5ff',
          name: '중고차/오토바이',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef600',
          name: '동네 구인구직',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef601',
          name: '부동산',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef602',
          name: '농수산물',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef603',
          name: '지역업체 소개',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef604',
          name: '과외/클래스 모집',
        },
        {
          _id: '5f0f33c6f9cffe4cb0bef605',
          name: '전시/공연/행사',
        },
      ],
      __v: 0,
    },
  ]);

  // useEffect(() => {
  //   setCategoryList(categoryFetch);
  //   console.log(categoryList);
  // }, []);
  return <CategoryTemplate navigation={navigation} />;
};

export default CategoryView;
