import {fetch} from 'node-fetch';
const URL = 'http//34.64.183.110:3000';

//TODO: 파라미터 넘길거 생각해둘 것
export const getFeedList = async () => {
  const API = URL + '/post';
  return await fetch(API, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => console.err());
};
