import "./Form.Styles.scss";
import { app } from "../../utils/firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { FormDropdowns, FormInputs } from "../exports";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const db = getFirestore(app);
  const navigate = useNavigate();

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [ssNum, setSSNum] = useState("");
  const [dropdown1, setDropdown1] = useState("");
  const [dropdown2, setDropdown2] = useState("");
  const [dropdown3, setDropdown3] = useState("");

  const uploadDataHandler = async (
    fName,
    lName,
    age,
    phoneNum,
    email,
    ssNum,
    dropdown1,
    dropdown2,
    dropdown3
  ) => {
    try {
      const docRef = await addDoc(collection(db, "Potential Associates"), {
        firstName: fName,
        lastName: lName,
        age: age,
        phoneNumber: phoneNum,
        email: email,
        social: ssNum,
        favJob1: dropdown1,
        favJob2: dropdown2,
        favJob3: dropdown3,
      });
      console.log(`Document written with ID: ${docRef.id}`);
    } catch (error) {
      console.log(`Error adding document ${error}`);
    }
  };

  const submitDataHandler = async (event) => {
    event.preventDefault();
    uploadDataHandler(
      fName,
      lName,
      age,
      phoneNum,
      email,
      ssNum,
      dropdown1,
      dropdown2,
      dropdown3
    );

    setFName("");
    setLName("");
    setAge("");
    setPhoneNum("");
    setEmail("");
    setSSNum("");
    setDropdown1("");
    setDropdown2("");
    setDropdown3("");

    navigate("/ThankYou");
  };

  return (
    <form className="main-form-container" onSubmit={submitDataHandler}>
      <FormInputs
        fName={fName}
        lName={lName}
        age={age}
        phoneNum={phoneNum}
        email={email}
        ssNum={ssNum}
        setFName={setFName}
        setLName={setLName}
        setAge={setAge}
        setPhoneNum={setPhoneNum}
        setEmail={setEmail}
        setSSNum={setSSNum}
      />
      <FormDropdowns
        dropdown1={dropdown1}
        dropdown2={dropdown2}
        dropdown3={dropdown3}
        setDropdown1={setDropdown1}
        setDropdown2={setDropdown2}
        setDropdown3={setDropdown3}
      />
      <button className="form-submit-button" type="submit">
        {" "}
        Submit
      </button>
    </form>
  );
}
