import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import LikedWords from './components/LikedWords';

function App() {
  const [likedWords, setLikedWords] = useState(() => {
    const storedLikes = localStorage.getItem('likedWords');
    return storedLikes ? JSON.parse(storedLikes) : [];
  });

  // Function to like a word
  const handleLike = (word) => {
    const updatedLikes = [...likedWords, word];
    setLikedWords(updatedLikes);
    localStorage.setItem('likedWords', JSON.stringify(updatedLikes));
  };

  // Function to unlike a word
  const handleUnlike = (wordToRemove) => {
    const updatedLikes = likedWords.filter(word => word.word !== wordToRemove.word);
    setLikedWords(updatedLikes);
    localStorage.setItem('likedWords', JSON.stringify(updatedLikes));
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Main likedWords={likedWords} onLike={handleLike} onUnlike={handleUnlike} />
      <LikedWords likedWords={likedWords} onUnlike={handleUnlike} />
    </div>
  );
}

export default App;
