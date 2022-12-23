import './styles/main.scss';
import { populateScoresList } from './util.js';
import { postScore } from './scores.js';

const gameId = 'ZacHwHA6naFGwPa81E7n';
populateScoresList(gameId);

document.getElementById('refresh-btn').addEventListener('click', () => {
  populateScoresList(gameId);
});

document.getElementById('score-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  postScore(name, score, gameId).then(() => {
    document.getElementById('name').value = '';
    document.getElementById('score').value = '';
  });
});
