const apiUrl = 'http://localhost:4000';
const headers = { "Content-Type": "application/json" };

export async function signin(payload: {email:string, password:string}){
    const response = await fetch(`${apiUrl}/signin`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    })

    const res = await response.json();

    if (res.status === 400) {
      throw res.code;
    }
    return res;
}

export async function register(payload: {name:string,email:string, password:string}){
  const response = await fetch(`${apiUrl}/register`, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  })

  const res = await response.json();

  if (res.status === 400) {
    throw res;
  }
  return res;
}