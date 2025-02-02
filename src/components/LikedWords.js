import React from 'react';

const LikedWords = ({ likedWords, onUnlike }) => {
    if (likedWords.length === 0) {
        return <p>No liked words yet!</p>;
    }

    return (
        <div style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
            <h2>Liked Words</h2>
            {likedWords.map((word, index) => (
                <div key={index} style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <h3>{word.word}</h3>
                    <p><strong>Pronunciation:</strong> {word.pronunciation}</p>
                    <p><strong>Meaning:</strong> {word.meaning}</p>
                    <button onClick={() => onUnlike(word)}>Unlike</button>
                </div>
            ))}
        </div>
    );
};

export default LikedWords;
