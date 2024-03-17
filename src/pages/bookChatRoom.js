import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { io } from "socket.io-client";

let socket;
const BookChatRoom = () => {
  const params = useParams();
  const [name, setName] = useState("");
  const [socketId, setSocketId] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");
  const [loginFlag, setLoginFlag] = useState(false);

  useEffect(() => {
    console.log("aaaaaaaaaaaaa");
    socket = io("http://localhost:5000");
    socket.on("connectid", (msg) => {
      setSocketId(msg.socketId);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessageList([...messageList, msg]);
    });
  }, [messageList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("login", {
      socketId: `${socketId}`,
      room: `${params.id}`,
      name: `${name}`,
    });
    setLoginFlag(true);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    socket.emit("message", {
      socketId: `${socketId}`,
      name: `${name}`,
      message: `${message}`,
    });
  };
  if (loginFlag) {
    return (
      <>
        {messageList.map((message, index) => {
          return (
            <p key={index}>
              {" "}
              {message.socketId} {message.name} {message.message}
            </p>
          );
        })}
        <form onSubmit={handleSubmit2}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            name="message"
            placeholder="メッセージ"
            required
          />
          <button>送信</button>
        </form>
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="名前"
          required
        />
        <button>ログイン</button>
      </form>
    </>
  );
};

export default BookChatRoom;
