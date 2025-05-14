import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-6 text-sm">
      <div className="space-x-2">
        <Link to="#contact" className="hover:text-primary">
          Contact Us
        </Link>
        |
        <Link to="/terms-and-condition" className="hover:text-primary">
          Terms of Service
        </Link>
        |
        <Link to="/privacy-policy" className="hover:text-primary">
          Privacy Policy
        </Link>
        |
        <Link to="/shipping-policy" className="hover:text-primary">
          Shipping & Delivery
        </Link>
        |
        <Link to="/return-policy" className="hover:text-primary">
          Cancellation & Refund
        </Link>
      </div>
      <p className="text-gray-400 mt-3">
        © 2024 Magic Scale Resturant Consultant (Vishal Kushwaha) . All rights reserved.
      </p>
    </footer>
  );
};


export default Footer;
