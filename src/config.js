const BASE_URL = 'http://10.58.6.14:8000';

export const API = {
  SIGNIN: `${BASE_URL}/users/signin`,
  SIGNUP: `${BASE_URL}/users/signup`,
  SIGN_USER_NAME: `${BASE_URL}/users/username`,
  SIGN_EMAIL: `${BASE_URL}/users/email`,
  PRODUCTS: `${BASE_URL}/products`, // 소분류
  CATEGORIES: `${BASE_URL}/products/categories`, // 대분류
  CART: `${BASE_URL}/cart`,
  ORDERS: `${BASE_URL}/orders`,
};
