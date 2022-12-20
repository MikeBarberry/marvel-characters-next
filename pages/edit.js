import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import marvelLogo from '../public/marvelLogo.jpeg';

export default function Edit() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [originalThumbnail, setOriginalThumbnail] = useState('');
  const [newThumbnail, setNewThumbnail] = useState('');

  const router = useRouter();

  useEffect(() => {
    const characterInfo = JSON.parse(localStorage.getItem('characterInfo'));
    const { _id, name, description, thumbnail } = characterInfo;
    setId(_id);
    setName(name);
    setDescription(description);
    setOriginalThumbnail(thumbnail);
    setNewThumbnail(thumbnail);
  }, []);

  async function handleSubmit() {
    const updatedCharacterInfo = {
      id,
      name,
      description,
      newThumbnail,
    };
    try {
      await fetch('/api/edit', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCharacterInfo),
      });
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDelete() {
    const characterId = { characterId: id };
    try {
      await fetch('/api/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(characterId),
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
      <div
        className='edit-container'
        style={{ backgroundImage: `url(${originalThumbnail})` }}>
        <br />
        <label>
          Name:
          <input
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
            onChange={(e) => setNewThumbnail(e.target.value)}
            value={newThumbnail}
            required
          />
        </label>
        <button
          style={{ marginRight: '20px' }}
          className='edit-button'
          onClick={handleSubmit}>
          Submit
        </button>
        <button
          className='edit-button'
          onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
