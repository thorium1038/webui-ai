const responseBox = document.querySelector('#response');
const promptBox = document.querySelector('#prompt');
const sendButton = document.querySelector('#send');

sendButton.addEventListener('click', async (e) => {
    console.log('Pressed1');
    const res = await axios.post('https://shale.live/v1/chat/completions', {
        "model": "microsoft/Phi-3-mini-128k-instruct",
        "messages": [{ "role": "user", "content": promptBox || 'Hi' }]
    }, {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer trapile.ai'
    });

    console.log(res);
    const data = res.data;
    const message = data.choices[0].message.content ?? 'error';
    responseBox.textContent = message;
})