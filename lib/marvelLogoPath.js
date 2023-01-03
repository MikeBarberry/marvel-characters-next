const marvelLogoPath =
  process.env.NODE_ENV === 'production'
    ? '/main/.next/static/media/marvelLogo.bd2d21ac.jpeg'
    : '../public/marvelLogo.jpeg';

module.exports = marvelLogoPath;
