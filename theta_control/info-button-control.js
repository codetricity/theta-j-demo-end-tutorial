export {infoButtonControl};

const infoButtonControl = async (urlEndpoint) => {
    console.log("info");
    const response = await fetch(`${urlEndpoint}info`, {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });
    const data = await response.json();
    return JSON.stringify(data, null, 4);
  };