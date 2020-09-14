import thunk from 'redux-thunk';

const login = (email, password) => async dispatch => {
  const res = await fetch('/api/session', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  debugger

  if (res.ok) {
    console.log(await res.json());
    // const { player } = await res.json();
    // console.log(player);
  }
}

export default login;
