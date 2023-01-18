const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Terms and uses</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div className="SocialIcons">
          <ul>
            <li class="soc-icon"><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a></li>
            <li class="soc-icon"><a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a></li>
            <li class="soc-icon"><a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a></li>
          </ul>
          </div>
          <br />
          <div className="footer-copyright">
            <p>&copy; 2023 All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;