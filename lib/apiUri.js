const apiUri = process.env.NODE_ENV === 'production' ? '/main/api' : '/api';

module.exports = apiUri;
