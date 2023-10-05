import EmailIcon from '../Icons/EmailIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import PhoneIcon from '../Icons/PhoneIcon';
import PinterestIcon from '../Icons/PinterestIcon';
import VKIcon from '../Icons/VKIcon';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__column">
          <h3 className="footer__title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            dignissimos?{' '}
          </h3>
          <p className="footer__copyright">
            2023 &copy; MY-CO Arcitecture Bureau
          </p>
        </div>
        <div className="footer__column">
          <div className="footer__contacts">
            <p className="footer__to-us">Свяжитесь с нами</p>
            <div className="footer__contact">
              <EmailIcon />
              <span className="footer__contact-text">mail@mail.com</span>
            </div>
            <div className="footer__contact">
              <PhoneIcon />
              <span className="footer__contact-text">+7 495 1234567</span>
            </div>
          </div>
          <div className="footer__social-media">
            <a className="footer__link" href="http://instagram.com">
              <InstagramIcon />
            </a>
            <a className="footer__link" href="http://vk.com">
              <VKIcon />
            </a>
            <a className="footer__link" href="http://pinterest.com">
              <PinterestIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
