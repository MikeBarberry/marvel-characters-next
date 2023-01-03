/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import useSWR from 'swr';

import { apiUri, imageUri } from '../lib/adjustedUris';
import { StyledLink } from '../styles/styledComponentProvider';
import CharacterCard from '../components/CharacterCard';
import LoadIndicator from '../components/LoadIndicator';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(`${apiUri}/`, fetcher);
  const [isHidden, setIsHidden] = useState(true);

  function toggleHidden() {
    setIsHidden((prevState) => !prevState);
  }

  if (error) return <div>An error occurred fetching the data</div>;
  if (isLoading) {
    return (
      <div className='Header Main-header'>
        <LoadIndicator />
      </div>
    );
  }

  return (
    <div className='Header Main-header'>
      <img src={`${imageUri}marvelLogo.jpeg`} alt='Marvel Logo' />
      <StyledLink href='/add'>Add</StyledLink>
      <div className='hero-list'>
        {data &&
          data.characters.map((character) => (
            <CharacterCard
              key={character.name}
              character={character}
              toggleHidden={toggleHidden}
              isHidden={isHidden}
            />
          ))}
      </div>
    </div>
  );
}
