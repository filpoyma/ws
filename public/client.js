// @ts-nocheck
const ws = new WebSocket(window.location.href.replace(/^http/, 'ws'));
const sendForm = document.forms.sendForm;
const messages = document.querySelector('[data-message]');

//Для одного ************
ws.onopen = (event) => { //дожидаемся установки соединения методом onopen. вызывается коллбэк,
   //когда соединение с ws будет установленно - можем отправлять
  console.log('connected to ws server', event.target.url);

  const message = window.prompt('Enter your msg...')
  ws.send(message); // отправляет текст на сервер

};

ws.onmessage = (event) => { //если придет ответ от сервера. event - броузерный
  console.log('WS Respond from Server:', event.data);
};


// Для многих  ************************
// ws.onopen = () => {
//   sendForm.sendButton.disabled = false;
// };
//
// sendForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const { message, nickname } = event.target;
//   const dataObj = {
//     nickname: nickname.value,
//     message: message.value,
//   };
//   ws.send(JSON.stringify(dataObj)); // отправили сообщение на сервер
//   nickname.disabled = true;
//   message.value = '';
// });
//
//
// const template = (nick, mes) => (`
// <li>
//   <strong>${nick}</strong>
//   ${mes}
// </li>`);
//
// // слушатель. слушает сообщения с сервера.
// ws.onmessage = (event) => {
//   const { nickname, message } = JSON.parse(event.data);
//   messages.insertAdjacentHTML('beforeend', template(nickname, message));
// };

ws.onclose = () => {
 console.log('ws socket closed...')
}
