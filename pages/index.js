import React, { useState } from 'react';
import useSWR from 'swr';
import Image from 'next/image';

import { StyledLink } from '../styles/styledComponentProvider';
import CharacterCard from '../components/CharacterCard';
import LoadIndicator from '../components/LoadIndicator';
import marvelLogo from '../public/marvelLogo.jpeg';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR('/api/', fetcher);
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
