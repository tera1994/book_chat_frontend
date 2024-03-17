import { Link } from "react-router-dom";
import css from "styled-jsx/css";
const Header = () => {
  const { className: classNameLogoATag, styles: LogoATagStyles } = css.resolve`
    a {
      font-size: 36px;
      font-weight: bold;
      color: #fff;
      text-decoration: none;
    }
  `;

  const { className: classNameNavATag, styles: NavATagStyles } = css.resolve`
    a {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
      text-decoration: none;
    }

    a:hover {
      color: #aaa;
    }
  `;
  return (
    <>
      <header className="header">
        <Link to="/" className={classNameLogoATag}>
          Book Chat
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/" className={classNameNavATag}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/create-book-chat-room" className={classNameNavATag}>
                Create Chat Room
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <style jsx>
        {`
          .header {
            background-color: #0067c0;
            color: #fff;
            padding: 0.5rem 0.5rem;
            display: flex;
            justify-content: space-between;
          }

          .nav-links {
            display: flex;
          }

          .nav-links li {
            margin-left: 1.5rem;
            list-style: none;
          }
        `}
      </style>
      {LogoATagStyles}
      {NavATagStyles}
    </>
  );
};

export default Header;
