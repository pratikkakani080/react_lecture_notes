import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>ShopEase is your one-stop destination for all your shopping needs. We provide quality products at competitive prices.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>📧 support@shopease.com</li>
                        <li>📞 +1 (555) 123-4567</li>
                        <li>📍 123 Shopping Street, Retail City</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 ShopEase. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer; 