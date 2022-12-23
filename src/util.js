/* eslint-disable no-unused-expressions, import/prefer-default-export */
import { getScores } from './scores.js';

export const populateScoresList = async (gameId) => {
  const scores = await getScores(gameId);
  const scoresList = document.getElementById('scores-list');
  if (scoresList.children.length !== 0) {
    [...scoresList.children].forEach((score) => {
      scoresList.removeChild(score);
    });
  }
  for (let i = 0; i < scores.length; i += 1) {
    const score = scores[i];
    const newScore = document.createElement('li');
    newScore.id = score.id;
    newScore.innerText = `${score.user}: ${score.score}`;
    newScore.classList.add('score');
    i % 2 === 0 ? newScore.classList.add('pair') : newScore.classList.add('odd');
    scoresList.appendChild(newScore);
  }
  return scores;
};