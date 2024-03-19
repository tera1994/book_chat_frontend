import { useState } from "react";
const CreateBookChatRoom = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://book-chat-backend.onrender.com/book-chat-room",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            author: author,
          }),
        }
      );
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("FAILURE : Create a book chat room.");
    }
  };
  return (
    <>
      <div className="main">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Create Chat Room</h1>
          <div>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              placeholder="Book Title"
              required
            />
          </div>
          <div>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              name="author"
              placeholder="Author"
              required
            />
          </div>
          <div>
            <button>Create</button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .main {
          position: relative;
          height: 100vh;
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
          width: 128px;
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

export default CreateBookChatRoom;
