import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import BookChatRoomList from "./pages/BookChatRoomList";
import BookChatRoom from "./pages/BookChatRoom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateBookChatRoom from "./pages/CreateBookChatRoom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<BookChatRoomList />} />
        <Route path="/book-chat-room/:id" element={<BookChatRoom />} />
        <Route path="/create-book-chat-room" element={<CreateBookChatRoom />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
