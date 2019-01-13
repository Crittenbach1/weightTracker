import fetch from 'isomorphic-fetch';

export function saveData(rec) {
  debugger
  return function(dispatch){
    return fetch(`/api/v1/charts`, {
      credentials: "include",
      method: "POST",
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
      },
      body: JSON.stringify(rec)
    })
    .then(res => {
      return res.json()
    }).then(data => {
         dispatch({type: 'SAVE_DATA', payload: data})
    })
  }
}
