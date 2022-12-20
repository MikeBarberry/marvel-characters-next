import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import marvelLogo from '../public/marvelLogo.jpeg';

export default function Add() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const router = useRouter();

  async function handleSubmit() {
    const characterInfo = {
      name,
      description,
      thumbnail,
    };
    try {
      await fetch('/api/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(characterInfo),
      });
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='Header Main-header'>
      <Image
        src={marvelLogo}
        alt='Marvel Logo'
      />
      <div className='add-container'>
        <label>
          Name:
          <input
            maxLength='16'
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type='text'
            maxLength='120'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </label>
        <label>
          Thumbnail:
          <input
            type='text'
            placeholder='Enter URL to character image'
            onChange={(e) => setThumbnail(e.target.value)}
            value={thumbnail}
            required
          />
        </label>
        <input
          type='submit'
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
