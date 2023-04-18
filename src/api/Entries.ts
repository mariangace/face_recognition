const apiUrl = 'http://localhost:4000';
const headers = { "Content-Type": "application/json" };

export async function registerEntry(payload: {id:string}){
    const response = await fetch(`${apiUrl}/image`, {
      method: "PUT",
      headers,
      body: JSON.stringify(payload),
    })

    const res = await response.json();

    if (res.status === 400) {
      throw res.code;
    }
    return res;
}
