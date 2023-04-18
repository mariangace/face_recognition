
const clarifaiUrl = "https://api.clarifai.com/v2/models/";

///////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = process.env.REACT_APP_PAT;
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = process.env.REACT_APP_USER_ID;
const APP_ID = process.env.REACT_APP_APP_ID;
// Change these to whatever model and image URL you want to use
const MODEL_ID = process.env.REACT_APP_MODEL_ID;
const MODEL_VERSION_ID = process.env.REACT_APP_MODEL_VERSION_ID;

const requestOptions = {
  method: "POST",
  headers: {
    Accept: "application/json",
    Authorization: "Key " + PAT,
  }
};

export async function detectFace(input:string){

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: input,
          },
        },
      },
    ],
  });

  const response = await fetch(`${clarifaiUrl}/${MODEL_ID}/versions/${ MODEL_VERSION_ID}/outputs`, 
  {...requestOptions, body:raw})

  const res = await response.json();

  if (!res.outputs) {
    throw res;
  }
  return res;
}
