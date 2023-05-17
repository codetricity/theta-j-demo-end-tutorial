export {takePictureButtonControl};

const takePictureButtonControl = async (urlEndpoint) => {
  const body = {'name': 'camera.takePicture'}
  const response = await fetch(`${urlEndpoint}commands/execute`, 
      {method: 'POST', 
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
  });
  const data = await response.json();
  
  return JSON.stringify(data, null, 4);

  };