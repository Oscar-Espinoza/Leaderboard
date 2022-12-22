/* eslint-disable no-unused-vars, */

const createGame = async (name) => {
  let id = '';
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
    }),
  })
    .then((res) => res.json())
    .then((data) => id = data.result)
    .catch((error) => error );
  console.log(id);
  return id;
};

export const postScore = async (user, score, gameId) => {
  return fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data.result))
    .catch((error) => console.log('ERROR'));
}

export const populateScoresApi = async (gameId) => {
  const scores = []
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/`)
    .then((res) => {
      return res.json();
    })
      .then((data) => {
        for (let i = 0; i < 200; i++) {
          const score = data.result[i]
          if (typeof(score.user) === 'string' && typeof(score.score) === 'number') {
            postScore(score.user, score.score, gameId)
          }
        };
      });

  console.log('Populated');
};

export const getScores = async (gameId) => {
  return await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`)
    .then((res) => {
      return res.json();
    }).then((data) => {
      return data.result
    })
};