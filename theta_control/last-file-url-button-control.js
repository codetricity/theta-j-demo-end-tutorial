export {lastFileUrlButtonControl};

const lastFileUrlButtonControl = async (urlEndpoint) => {


const body = {
    'name': 'camera.listFiles',
    'parameters': {
        "fileType": "image",
        "entryCount": 10,
        "maxThumbSize": 0
    }
}

const response = await fetch(`${urlEndpoint}commands/execute`, 
    {method: 'POST', 
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
});
const data = await response.json();
const fileUrl = data['results']['entries'][0]['fileUrl']


return JSON.stringify(fileUrl);
}