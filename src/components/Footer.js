import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
  <div className="footer-top">
    <div className="subscribe">
      <h4>BE THE FIRST TO KNOW</h4>
      <p>Sign up for updates from mettä muse.</p>
      <div className="subscribe-input">
        <input type="email" placeholder="Enter your e-mail..." />
        <div>
          <button className='Button'>SUBSCRIBE</button>
        </div>
      </div>
    </div>

    <div className="contact">
      <h4>CONTACT US</h4>
      <p>+44 221 133 5360</p>
      <p>customercare@mettamuse.com</p>

      <h4>CURRENCY</h4>
      <p>🌎 USD</p>
      <small>Transactions will be completed in Euros...</small>
    </div>
  </div>

  <hr />

  <div className="footer-columns">
    <div className="column">
      <h4>mettä muse</h4>
      <ul>
        <li>About Us</li>
        <li>Stories</li>
        <li>Artisans</li>
        <li>Boutiques</li>
        <li>Contact Us</li>
        <li>EU Compliances Docs</li>
      </ul>
    </div>

    <div className="column">
      <h4>QUICK LINKS</h4>
      <ul>
        <li>Orders & Shipping</li>
        <li>Join/Login as a Seller</li>
        <li>Payment & Pricing</li>
        <li>Return & Refunds</li>
        <li>FAQs</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
    </div>

    <div className="column">
      <h4>FOLLOW US</h4>
      <ul>
        <li>📸 Instagram</li>
        <li>💼 LinkedIn</li>
      </ul>
    </div>

    <div className="column">
      <h4>mettä muse ACCEPTS</h4>
      <div className="payment-icons">
        <img src="gpay.png" alt="Google Pay" />
        <img src="mastercard.png" alt="MasterCard" />
        <img src="visa.png" alt="Visa" />
        <img src="amex.png" alt="Amex" />
        <img src="applepay.png" alt="Apple Pay" />
        <img src="paypal.png" alt="PayPal" />
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2023 mettä muse. All rights reserved.</p>
  </div>
</footer>

);

export default Footer;
