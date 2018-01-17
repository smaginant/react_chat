import React from 'react'

import { ChatPage } from 'components'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import { injectGlobal } from 'styled-components'
import { recieveMessage } from '../actions'

import { setCallback as messageRecieved } from '../cable'
const store = configureStore()

export default class App extends React.Component {

  componentWillMount() {
    messageRecieved((message) => {
      return store.dispatch(recieveMessage(message));
    })
  }

  render() {
    return (
      <Provider store={store}>
        <ChatPage />
      </Provider>
    )
  }
}

injectGlobal `
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Pacifico');

body {
  margin: 0;
}

p {
  margin: 0;
  display: inline-block;
}

.App {
  background-color: #1EE494;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chatroom {
  width: 360px;
  height: 600px;
  background-color: rgba(0,0,0, .7);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 8px 0 rgba(0,0,0, 0.3);
}

.chatroom h3 {
  font-family: 'Pacifico', cursive;
  background-color: rgba(30, 228, 148, 0.7);
  color: #FFF;
  margin: 0;
  height: 40px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chatroom .chats {
  box-sizing: border-box;
  padding: 0 20px;
  margin: 10px 0 0;
  height: 510px;
  overflow-y: scroll;
}

.chatroom .chats .chat {
  background: rgba(255, 255, 255, 0.8);
  position: relative;
  padding: 5px 13px;
  font-size: 14px;
  border-radius: 10px;
  list-style: none;
  float: left;
  clear: both;
  margin: 10px 0;
  max-width: 200px;
}

.chatroom .chats .chat img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  left: 0px;
}

.chatroom .chats .chat.right {
  float: right;
  clear: both;
}

.chatroom .chats .chat a {
  text-decoration: none;
  color:#3498DB;
}

.chatroom .input {
  height: 40px;
  width: 100%;
  background: rgba(30, 228, 148, 0.7);
  display: flex;
  flex-direction: row;
  align-items: center;
}

.chatroom .input input[type="text"] {
  background: rgba(255, 255, 255, 0.5);
  outline: 0;
  border: 2px solid #1EE494;
  padding: 0 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-left: 10px;
  height: 30px;
  width: 270px;
  box-sizing: border-box;
  font-size: 14px;
}

.chatroom .input input[type="submit"] {
  background: transparent;
  border: 1px solid #1EE494;
  height: 30px;
  width: 70px;
  font-size: 14px;
  box-sizing: border-box;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.chatroom .input input[type="submit"]:hover {
  background: #1EE494;
  color: #FFF;
}
`
