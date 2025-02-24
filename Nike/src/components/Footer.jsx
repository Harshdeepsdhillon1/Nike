import React, { useState, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import "../css/footer.css";

const Footer = () => {
  // State to track screen width
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Effect to update state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <footer className="footer-container">
      {/* First Row - Dropdowns for Mobile */}
      <div className="footer-top">
        {[
          { title: "Resources", items: ["Find a Store", "Nike Journal", "Become a Member", "Feedback", "Promo Codes"] },
          { title: "Help", items: ["Get Help", "Order Status", "Shipping and Delivery", "Returns", "Payment Options", "Contact Us", "Reviews"] },
          { title: "Company", items: ["About Nike", "News", "Careers", "Investors", "Sustainability", "Purpose", "Report a Concern"] },
        ].map((section, index) => (
          <div key={index} className="footer-column">
            <div className="footer-header" onClick={() => toggleDropdown(index)}>
              <h4>{section.title}</h4>
              {/* Show ChevronDown only if screen width is less than 1024px */}
              {isMobile && <ChevronDown className={`arrow-icon ${openDropdown === index ? "open" : ""}`} />}
            </div>
            <ul className={`footer-dropdown ${openDropdown === index ? "show" : ""}`}>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-column footer-country">
          <Globe className="globe-icon" />
          <p>Canada</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="footer-bottom">
        <p>© 2025 Nike, Inc. All rights reserved</p>
        <div className="footer-links">
          <p>Guides</p>
          <p>Terms of Use</p>
          <p>Terms of Sale</p>
          <p>Company Details</p>
          <p>Privacy & Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
