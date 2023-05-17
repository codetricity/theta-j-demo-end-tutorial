export {listFilesButtonControl};

const listFilesButtonControl = async (urlEndpoint) => {
    const body = {
      name: "camera.listFiles",
      parameters: {
        fileType: "all",
        entryCount: 5,
        maxThumbSize: 0,
      },
    };
    const response = await fetch(`${urlEndpoint}commands/execute`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();

    return JSON.stringify(data, null, 4);
  };