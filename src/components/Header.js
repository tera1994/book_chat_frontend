import { Link } from "react-router-dom";
import css from "styled-jsx/css";
const Header = () => {
  const { className, styles } = css.resolve`
    a {
      text-decoration: none;
    }
  `;
  return (
    <>
      <header className="header">
        <Link to="/" className={className}>
          <div className="logo">Book Chat</div>
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/" className={className}>
                <div className="link">Home</div>
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
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 5px 5px 5px 10px rgba(0, 0, 0, 0.2);
          }

          .logo {
            font-size: 36px;
            font-weight: bold;
            color: #fff;
          }

          .nav-links {
            display: flex;
          }

          .nav-links li {
            margin-left: 1.5rem;
            list-style: none;
          }

          .link {
            color: #fff;
            transition: color 0.3s ease;
          }
        `}
      </style>
      {styles}
    </>
  );
};

export default Header;
