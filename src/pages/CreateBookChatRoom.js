import { useState } from "react";
const CreateBookChatRoom = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/book-chat-room", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          author: author,
        }),
      });
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
          <div>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              placeholder="本タイトル"
              required
            />
          </div>
          <div>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              name="author"
              placeholder="作者"
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
      `}</style>
    </>
  );
};

export default CreateBookChatRoom;
