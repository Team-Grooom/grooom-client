import axios from 'axios';
const URL = 'http://34.64.183.110:3000';

export const getCategoryList = async () => {
  const API = URL + '/categories';
  try {
    const getCategoryListResult = await axios.get(API);
    return getCategoryListResult.data;
  } catch (err) {
    console.log(err);
    return;
  }
};
