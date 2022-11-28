const ws = new WebSocket(window.location.href.replace(/http/i, 'ws'));
const messageForm = document.forms.sendForm;
const messageContainer = document.querySelector('[data-message]')

console.log(ws);
ws.onopen = () => { // колл бек onopen срабтает, когда сервер присоединит клиента
  console.log('connected');
  if (messageForm) messageForm.sendButton.disabled = false;
};

ws.onclose = () => { // колл бек onclose срабтает, когда сервер отсоединит клиента
  console.log('disconnected');
};

ws.onmessage = (event) => { // колл бек onmessage срабтает, когда придет сообщение от сервера
  console.log('Message from server:', event.data);
  const template = (nick, mes) => {
    return `<li>
        <strong>${nick}</strong>
        ${mes}
    </li>`
  }
  const {nickname, message} = JSON.parse(event.data);
  messageContainer?.insertAdjacentHTML('beforeend', template(nickname, message))
};

messageForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const { nickname, message } = event.target;
  const msgObj = {
    nickname: nickname.value,
    message: message.value,
  };
  messageForm.nickname.disabled = true;
  messageForm.message.value = '';

  ws.send(JSON.stringify(msgObj)); // отправка websocket сообщения
});
