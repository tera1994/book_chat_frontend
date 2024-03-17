import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BookChatRoomList = () => {
  const [bookChatRoomList, setBookChatRoomList] = useState();

  useEffect(() => {
    const getAllItems = async () => {
      const response = await fetch("http://localhost:5000/book-chat-room-list");
      const jsonResponse = await response.json();
      setBookChatRoomList(jsonResponse);
    };
    getAllItems();
  }, []);

  return (
    <>
      <div className="main container">
        {bookChatRoomList &&
          bookChatRoomList.bookChatRoomList.map((item) => (
            <Link
              className="grid-item"
              to={`/book-chat-room/${item._id}`}
              key={item._id}
            >
              <h1>Chat Room</h1>
              <h2>Book Title : {item.title}</h2>
              <h2>Auther : {item.author}</h2>
            </Link>
          ))}
      </div>
      <style jsx>{`
        .main {
          position: relative;
          width: 100%;
          height: 100vh;
          background-color: #eee;
        }
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          gap: 20px;
        }

        .grid-item {
          margin-top: 50px;
          margin-bottom: 10px;
          margin-left: 10px;
          margin-right: 10px;
          background-color: #fff;
          text-align: center;
          display: block;
          border-radius: 1rem;
          border: 0.05rem solid rgb(223, 223, 223);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        a {
          text-decoration: none;
          color: #444;
        }
      `}</style>
    </>
  );
};

export default BookChatRoomList;
