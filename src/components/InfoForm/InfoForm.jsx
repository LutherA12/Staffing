import "./InfoForm.Styles.scss";
import { Form } from "../exports";
import { Link } from "react-router-dom";

export default function InfoForm() {
  return (
    <div className="main-app-container">
      <div className="main-form-container">
        <form className="form">
          <Form />
        </form>
      </div>
      <h3 className="disclaimer-note">
        Please note: Once you click the submit button you will receive an ID to
        keep track of your information. Have pencil & paper ready.
      </h3>
      <Link to="/FAQs" className="faqs-link-container">
        FAQ's
      </Link>
    </div>
  );
}
