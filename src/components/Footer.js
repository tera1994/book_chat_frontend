const Footer = () => {
  return (
    <>
      <footer className="footer">
        © 2024 Hoshun Terazumi All Rights Reserved.
      </footer>
      <style jsx>
        {`
          .footer {
            background-color: #444;
            color: #fff;
            position: fixed;
            bottom: 0;

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
