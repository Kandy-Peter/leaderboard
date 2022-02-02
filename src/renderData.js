const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ Mj0tcMVVFGk965t6FiUp/scores/';

const player = document.getElementById('input-player');
const score = document.getElementById('score');
const userList = document.querySelector('.clm-score');

const postData = async () => {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(
      {
        user: player.value,
        score: score.value,
      },
    ),
    mode: 'cors',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const result = await res.json();
  return result;
};

const getData = async () => {
  const res = await fetch(url);
  const data = await res.json();
  userList.innerHTML = '';
  data.result.forEach((player, index) => {
    userList.innerHTML += `
          <li id="${index + 1}">
            <p>${player.user}: <span>${player.score}</span></p>
          </li>
      `;
  });
};

export { getData, postData };