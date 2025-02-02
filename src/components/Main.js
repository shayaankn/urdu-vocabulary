import React, { useEffect, useState } from 'react';

const Main = ({ likedWords, onLike, onUnlike }) => {
    const [wordOfTheDay, setWordOfTheDay] = useState(null);

    useEffect(() => {
        fetch('/words.json')
            .then(response => response.json())
            .then(data => setWordOfTheDay(getWordOfTheDay(data)))
            .catch(error => console.error('Error loading words:', error));
    }, []);

    const getWordOfTheDay = (words) => {
        const today = new Date();
        const dateKey = today.getFullYear() * 1000 + today.getMonth() * 100 + today.getDate();
        const index = dateKey % words.length;
        return words[index];
    };

    const isLiked = wordOfTheDay && likedWords.some(word => word.word === wordOfTheDay.word);

    const handleLikeToggle = () => {
        if (isLiked) {
            onUnlike(wordOfTheDay);
        } else {
            onLike(wordOfTheDay);
        }
    };

    if (!wordOfTheDay) return <p>Loading...</p>;

    return (
        <div>
            <h2>Word of the Day</h2>
            <h3>{wordOfTheDay.word}</h3>
            <p><strong>Pronunciation:</strong> {wordOfTheDay.pronunciation}</p>
            <p><strong>Meaning:</strong> {wordOfTheDay.meaning}</p>
            <button onClick={handleLikeToggle}>
                {isLiked ? 'Unlike' : 'Like'}
            </button>
        </div>
    );
};

export default Main;
