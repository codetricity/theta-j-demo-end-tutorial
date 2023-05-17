export {stateButtonControl};

const stateButtonControl = async (urlEndpoint) => {
    const response = await fetch(`${urlEndpoint}state`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });

    const data = await response.json();
    return JSON.stringify(data, null, 4);

  };
