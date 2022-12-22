/* eslint-disable no-unused-expressions, import/prefer-default-export */
import { getScores } from './scores.js';

export const populateScoresList = async (gameId) => {
  const scores = await getScores(gameId);
  const startPoint = Math.floor(Math.random() * 50);
  const scoresList = document.getElementById('scores-list');
  for (let i = startPoint; i < startPoint + 10; i += 1) {
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

export const fillScoresArr = async (arr, gameId) => {
  arr = await populateScoresList(gameId);
};

export const refresh = (scoresArr) => {
  const newScores = [];
  const startPoint = Math.floor(Math.random() * 49);
  const scoresList = document.getElementById('scores-list');

  for (let i = startPoint; i < startPoint + 10; i += 1) {
    newScores.push(scoresArr[i]);
  }

  [...scoresList.children].forEach((scoreEl, index) => {
    const score = newScores[index];
    scoreEl.innerText = `${score.user}: ${score.score}`;
  });
};