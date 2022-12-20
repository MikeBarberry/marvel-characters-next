import React, { useState } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import CharacterCard from '../components/CharacterCard';
import LoadIndicator from '../components/LoadIndicator';
import marvelLogo from '../public/marvelLogo.jpeg';

const StyledLink = styled(Link)`
  background-color: #404040;
  color: white;
  font-size: 25px;
  font-weight: bold;
  font-family: Arial;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  position: absolute;
  top: 100px;
  right: 85px;
  &:hover {
    opacity: 0.5;
  }
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR('/api/', fetcher);
  const [isHidden, setIsHidden] = useState(true);

  function toggleHidden() {
    setIsHidden((prevState) => !prevState);
  }

  if (error) return <div>An error occurred fetching the data</div>;
  if (isLoading) return <LoadIndicator />;

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
