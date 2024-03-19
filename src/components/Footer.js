const Footer = () => {
  return (
    <>
      <footer className="footer">
        © 2024 Hoshun Terazumi All Rights Reserved.
      </footer>
      <style jsx>
        {`
          .footer {
            margin-top: 0%;
            background-color: #444;
            color: #fff;
            width: 100%;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </>
  );
};

export default Footer;
