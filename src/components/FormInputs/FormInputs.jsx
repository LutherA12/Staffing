import "./FormInputs.Styles.scss";
import { formData, checkboxInfo } from "../../utils/data";
import { app } from "../../utils/firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";
//import { FormCheckboxes } from "../exports";
import { useState, Fragment } from "react";

export default function FormInputs() {
  const db = getFirestore(app);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [ssNum, setSSNum] = useState("");
  const [checkbox, setCheckbox] = useState("");

  const {
    maxNameLength,
    maxEmailLength,
    maxAgeLength,
    minAgeLength,
    minCharLength,
    ssCharLength,
    phoneNumCharLength,
  } = formData;

  const CheckBoxes = () => {
    return (
      <div className="main-checkbox-container">
        <p className="checkbox-prompt">
          Select whichever jobs interest you the most!
        </p>
        {checkboxInfo.map((boxes, key) => {
          return (
            <div key={key}>
              <input
                type="checkbox"
                name={boxes.name}
                className="checkboxs"
                value={checkbox}
                onChange={(event) => setCheckbox(event.target.value)}
              />
              <label htmlFor={boxes.forLabel} className="checkbox-labels">
                {boxes.label}
              </label>
            </div>
          );
        })}
      </div>
    );
  };

  const uploadDataHandler = async (
    fName,
    lName,
    age,
    phoneNum,
    email,
    ssNum,
    checkbox
  ) => {
    try {
      const docRef = await addDoc(collection(db, "Potential Associates"), {
        firstName: fName,
        lastName: lName,
        age: age,
        phoneNumber: phoneNum,
        email: email,
        social: ssNum,
        jobCheckboxes: checkbox,
      });
      console.log(`Document written with ID: ${docRef.id}`);
    } catch (error) {
      console.log(`Error adding document ${error}`);
    }
  };

  const submitDataHandler = async (event) => {
    event.preventDefault();
    uploadDataHandler(fName, lName, age, phoneNum, email, ssNum, checkbox);

    setFName("");
    setLName("");
    setAge("");
    setPhoneNum("");
    setEmail("");
    setSSNum("");
    setCheckbox("");
  };

  const inputs = [
    <input
      className="first-name input-fields"
      type="text"
      placeholder="First Name"
      value={fName}
      onChange={(event) => setFName(event.target.value)}
      maxLength={maxNameLength}
      minLength={minCharLength}
      autoFocus
    />,
    <input
      className="last-name input-fields"
      type="text"
      placeholder="Last Name"
      value={lName}
      onChange={(event) => setLName(event.target.value)}
      maxLength={maxNameLength}
      minLength={minCharLength}
    />,
    <input
      className="age input-fields"
      type="text"
      placeholder="Age"
      value={age}
      onChange={(event) => setAge(event.target.value)}
      maxLength={maxAgeLength}
      minLength={minAgeLength}
    />,
    <input
      className="phone-num input-fields"
      type="text"
      placeholder="Phone Number (no hyphens)"
      value={phoneNum}
      onChange={(event) => setPhoneNum(event.target.value)}
      maxLength={phoneNumCharLength}
      minLength={phoneNumCharLength}
    />,
    <input
      className="email input-fields"
      type="email"
      placeholder="Email Address"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      maxLength={maxEmailLength}
    />,
    <input
      className="ss-num input-fields"
      type="text"
      placeholder="SS Number (no hyphens)"
      value={ssNum}
      onChange={(event) => setSSNum(event.target.value)}
      maxLength={ssCharLength}
      minLength={ssCharLength}
    />,
    <div className="main-checkbox-container">
      <p className="checkbox-prompt">
        Select whichever jobs interest you the most!
      </p>
      {checkboxInfo.map((boxes, key) => {
        return (
          <div key={key}>
            <input
              type="checkbox"
              name={boxes.name}
              className="checkboxs"
              value={checkbox}
              onChange={(event) => setCheckbox(event.target.value)}
            />
            <label htmlFor={boxes.forLabel} className="checkbox-labels">
              {boxes.label}
            </label>
          </div>
        );
      })}
    </div>,
    <button
      className="form-submit-button"
      type="button"
      onClick={submitDataHandler}
    >
      Submit
    </button>,
  ];

  return (
    <div className="main-inputs-container">
      {inputs.map((inputs, key) => {
        return <Fragment key={key}>{inputs}</Fragment>;
      })}
    </div>
  );
}
