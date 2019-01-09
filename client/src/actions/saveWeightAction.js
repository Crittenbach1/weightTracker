import fetch from 'isomorphic-fetch';

export function saveWeight(rec) {
  debugger
  return function(dispatch){
    return fetch(`/api/v1/weights`, {
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
    }).then(weight => {
         debugger
           if (weight[0] == undefined) {
             weight = [weight];
           }
           dispatch({type: 'SAVE_WEIGHT', payload: weight})
    })
  }
}
