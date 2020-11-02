import {fetch} from 'node-fetch';
const URL = 'http://34.64.183.110:3000';

export const getCategoryList = async () => {
  const API = URL + '/categories';
  try {
    const getCategoryListResult = await fetch(API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    const res = await getCategoryListResult.json();
    return res;
  } catch (err) {
    console.log(err);
    return;
  }
};
