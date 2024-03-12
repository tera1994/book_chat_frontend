import { Route, Routes, BrowserRouter } from "react-router-dom"
import './App.css';
import BookChatRoomList from "./pages/bookChatRoomList";
import BookChatRoom from "./pages/bookChatRoom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/book-chat-room-list" element={<BookChatRoomList />} />
        <Route path="/book-chat-room/:id" element={<BookChatRoom />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
