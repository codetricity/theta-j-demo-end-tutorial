export {setImageButtonControl}

const setImageButtonControl = async (urlEndpoint) => {
  const body = {
    name: "camera.setOptions",
    parameters: {
      options: {
        captureMode: "image",
      },
    },
  };

  const response = await fetch(`${urlEndpoint}commands/execute`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    }
  );

    const data =  await response.json();
  return JSON.stringify(data, null, 4);

};
