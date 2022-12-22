/* eslint-disable no-unused-vars, */

const createGame = async (name) => {
  const id = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
    }),
  })
    .then((res) => res.json())
    .then((data) => data.result)
    .catch((error) => error);
  return id;
};

export const postScore = async (user, score, gameId) => fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user,
    score,
  }),
})
  .then((res) => res.json())
  .then((data) => data.result)
  .catch((error) => error);

export const populateScoresApi = async (gameId) => {
  const scores = [];
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/')
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 200; i += 1) {
        const score = data.result[i];
        if (typeof score.user === 'string' && typeof score.score === 'number') {
          postScore(score.user, score.score, gameId);
        }
      }
    });
};

export const getScores = async (gameId) => fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`)
  .then((res) => res.json())
  .then((data) => data.result);