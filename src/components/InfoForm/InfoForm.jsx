import "./InfoForm.Styles.scss";
import { useState, Fragment } from "react";
import { formData } from "../../utils/data";
import { app } from "../../utils/firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default function InfoForm() {
  const db = getFirestore(app);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [age, setAge] = useState("");

  const { maxNameLength, maxAgeLength } = formData;

  const uploadDataHandler = async (fName, lName, age) => {
    try {
      const docRef = await addDoc(collection(db, "Potential Associates"), {
        firstName: fName,
        lastName: lName,
        age: age,
      });
      console.log(`Document written with ID: ${docRef.id}`);
    } catch (error) {
      console.log(`Error adding document ${error}`);
    }
  };

  const submitDataHandler = async (event) => {
    event.preventDefault();
    uploadDataHandler(fName, lName, age);

    console.log(fName, lName, age);
    setFName("");
    setLName("");
    setAge("");
  };

  const formInputs = [
    <input
      className="first-name input-fields"
      type="text"
      placeholder="First Name"
      value={fName}
      onChange={(event) => setFName(event.target.value)}
      maxLength={maxNameLength}
      autoFocus
    />,
    <input
      className="last-name input-fields"
      type="text"
      placeholder="Last Name"
      value={lName}
      onChange={(event) => setLName(event.target.value)}
      maxLength={maxNameLength}
    />,
    <input
      className="age input-fields"
      type="text"
      placeholder="Age"
      value={age}
      onChange={(event) => setAge(event.target.value)}
      maxLength={maxAgeLength}
    />,
    <button className="form-submit-button" type="submit">
      Submit
    </button>,
  ];

  return (
    <div className="main-app-container">
      <div className="main-form-container">
        <form className="form" onSubmit={submitDataHandler}>
          {formInputs.map((form, key) => {
            return <Fragment key={key}>{form}</Fragment>;
          })}
        </form>
      </div>
    </div>
  );
}
