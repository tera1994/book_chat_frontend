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
      <div className="main">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Enter Chat Room</h1>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Name"
            required
          />

          <button>Enter</button>
        </form>
      </div>
      <style jsx>{`
        .main {
          position: relative;
          height: 100vw;
          background-color: #eee;

          text-align: center;
        }
        .form {
          position: absolute;
          margin-top: 100px;
          width: 50%;
          text-align: center;
          background-color: #fff;
          border-radius: 1rem;
          border: 0.05rem solid rgb(223, 223, 223);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          top: 0%;
          left: 25%;
        }

        input {
          margin-top: 10px;
          margin-bottom: 10px;
        }

        button {
          background: #0067c0;
          color: #fff;
          height: 32px;
          width: 80px;
          border-radius: 12px;
          margin-bottom: 32px;
        }
        h1 {
          color: #444;
        }
      `}</style>
    </>
  );
};

export default BookChatRoom;
