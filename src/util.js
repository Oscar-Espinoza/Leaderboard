/* eslint-disable no-unused-expressions, import/prefer-default-export */
import { getScores } from './scores.js';

export const populateScoresList = async (gameId) => {
  const scores = await getScores(gameId);
  const scoresList = document.querySelectorAll('.score');
  const scoresTableBody = document.getElementById('table-body');
  if (scoresList.length !== 0) {
    [...scoresList].forEach((score) => {
      scoresTableBody.removeChild(score);
    });
  }
  for (let i = 0; i < scores.length; i += 1) {
    const score = scores[i];
    const newScore = document.createElement('tr');
    newScore.innerHTML = `<td>${score.user}</td>
    <td>${score.score}</td>`;
    newScore.classList.add('score');
    i % 2 === 0 ? newScore.classList.add('pair') : newScore.classList.add('odd');
    scoresTableBody.appendChild(newScore);
  }
  return scores;
};