function sendMessage(message) {
    const xhr = new XMLHttpRequest();
    const url = "https://api.telegram.org/botXXXXXXXXX/sendMessage"; // замените на ваш URL
    const chatId = "123456789"; // замените на ваш chat_id

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

    const data = JSON.stringify({
        chat_id: chatId,
        text: message,
        silent: true
    });

    xhr.send(data);
}; async function get_page(url) {return fetch(url).then(data => {return data.text()}).catch(error => console.error('Error fetching data:', error));}
