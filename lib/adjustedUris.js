const apiUri = process.env.NODE_ENV === 'production' ? '/main/api' : '/api';

const imageUri =
  process.env.NODE_ENV === 'production' ? '/main/_next/assets/' : '';

module.exports = { apiUri, imageUri };
