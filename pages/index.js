import React, { useState } from 'react';
import Image from 'next/image';
import useSWR from 'swr';

import { apiUri, marvelLogo } from '../lib/utils';
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
      <Image
        src={marvelLogo}
        alt='Marvel Logo'
        width={680}
        height={180}
      />
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
