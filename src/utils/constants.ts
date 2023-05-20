export const API_HOST =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_HOST_PRO
    : process.env.REACT_APP_API_HOST_DEV;
