import './Footer.css'

// IMport footer logo
// Import user icon

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img src="" alt="" /> add footer logo */}
                <p>I am developer from NEPAL</p>
            </div>
            <div className="footer-top-right">
                {/* Commented the email input and subscribe section */}
                {/* 
                <div className="footer-email-input">
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div> 
                */}
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className='footer-bootom-left'>© 2023 Aayush Shahi. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
