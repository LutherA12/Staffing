import "./InfoForm.Styles.scss";
import { Form } from "../exports";
import { Link } from "react-router-dom";

export default function InfoForm() {
  return (
    <div className="main-app-container">
      <Form />
      <Link to="/FAQs" className="faqs-link-container">
        FAQ's
      </Link>
    </div>
  );
}
