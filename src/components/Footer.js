const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          © 2024 Hoshun Terazumi All Rights Reserved.
        </div>
      </footer>
      <style jsx>
        {`
          .footer {
            background-color: #444;
            color: #fff;
            position: absolute;
            bottom: 0;

            width: 100%;
            text-align: right;
          }
          .container {
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

export default Footer;
