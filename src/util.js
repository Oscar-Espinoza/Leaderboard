export const populateScoresList = (scores) => {
  const scoresList = document.getElementById('scores-list');
  scores.forEach((score, index) => {
    const newScore = document.createElement('li');
    newScore.id = score.id;
    newScore.innerText = `${score.name}: ${score.score}`;
    newScore.classList.add('score');
    index%2 === 0 ? newScore.classList.add('pair') : newScore.classList.add('odd');
    scoresList.appendChild(newScore);
  });
};