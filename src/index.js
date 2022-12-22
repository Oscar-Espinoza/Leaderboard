import './styles/main.scss';
import { populateScoresList, refresh } from './util.js';
import { postScore } from './scores.js';

const gameId = 'zDajvCCZWwCARahxB4k3';
let scoresArr = [];
populateScoresList(gameId).then((res) => {
  scoresArr = res;
});

document.getElementById('refresh-btn').addEventListener('click', () => {
  refresh(scoresArr);
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