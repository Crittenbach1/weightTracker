import fetch from 'isomorphic-fetch';

export function savePerson(rec) {
  debugger
  return function(dispatch){
    return fetch(`/api/v1/persons`, {
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
    }).then(person => {
       if (person.id == null) {
         dispatch({type: 'SAVE_PERSON', payload: "name taken"})
       } else {
         dispatch({type: 'SAVE_PERSON', payload: person})
       }
   })
  }
}
