import "./FAQs.Styles.scss";
import { faqsInfo } from "../../utils/data";
import { Link } from "react-router-dom";

export default function FAQs() {
  return (
    <div className="main-faqs-container">
      <h4 className="faqs-heading">FAQ's</h4>
      {faqsInfo.map((info, key) => {
        return (
          <div key={key} className="faqs-container">
            <h3 className="faqs-questions faqs">{info.question}</h3>
            <p className="faqs-answers faqs">{info.answer}</p>
          </div>
        );
      })}
      <Link to="/" className="home-link">
        Home
      </Link>
    </div>
  );
}
