import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const BookChatRoomList = () => {
    const [bookChatRoomList, setBookChatRoomList] = useState();

    useEffect(() => {

        const getAllItems = async () => {
            const response = await fetch("http://localhost:5000/book-chat-room-list")
            const jsonResponse = await response.json()
            setBookChatRoomList(jsonResponse)
        }
        getAllItems()
    }, [])

    return (
        <div>
            {bookChatRoomList && bookChatRoomList.bookChatRoomList.map(item =>
                <Link to={`/book-chat-room/${item._id}`} key={item._id} className="card">

                    <h3>{item.title}</h3>
                    <h3>{item.author}</h3>

                </Link>
            )}

        </div>
    )
}

export default BookChatRoomList;