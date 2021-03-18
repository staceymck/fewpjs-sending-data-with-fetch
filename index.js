function submitData(name, email) {
  let userData = {
    name: name,
    email: email
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };
  
  return fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(function(obj) {
      const p = document.createElement('p');
      p.innerHTML = obj.id;
      document.body.appendChild(p);
    })
    .catch(function(error){
      const errorBlock = document.createElement('p');
      errorBlock.innerHTML = error.message;
      document.body.appendChild(errorBlock)
    });
}

