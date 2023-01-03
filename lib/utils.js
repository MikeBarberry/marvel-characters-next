const apiUri = process.env.NODE_ENV === 'production' ? '/main/api' : '/api';

const marvelLogo =
  'https://marvel-characters-next.s3.us-west-2.amazonaws.com/marvelLogo.jpeg';

module.exports = { apiUri, marvelLogo };
