import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CharacterCard({ character, isHidden, toggleHidden }) {
  const { _id, name, thumbnail, description } = character;
  const [editButtonClicked, setEditButtonClicked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem(
      'characterInfo',
      JSON.stringify({ _id, name, thumbnail, description })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editButtonClicked]);

  return (
    <div className='card' key={_id}>
      <h2>{name}</h2>
      <img
        src={thumbnail}
        alt={name}
        className='hero-image'
        onClick={toggleHidden}
      ></img>
      {isHidden ? null : <p className='description'>{description}</p>}
      <button
        className='button'
        onClick={() => {
          setEditButtonClicked(true);
          router.push('/edit');
        }}
      >
        Edit
      </button>
    </div>
  );
}
