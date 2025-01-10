import "./FormInputs.Styles.scss";
import { formValidationData } from "../../utils/data";

export default function FormInputs({
  fName,
  setFName,
  lName,
  setLName,
  age,
  setAge,
  phoneNum,
  setPhoneNum,
  email,
  setEmail,
  ssNum,
  setSSNum,
}) {
  const {
    maxNameLength,
    maxEmailLength,
    maxAgeLength,
    minAgeLength,
    minCharLength,
    ssCharLength,
    phoneNumCharLength,
  } = formValidationData;

  return (
    <div className="main-inputs-container">
      <input
        className="first-name input-fields"
        type="text"
        placeholder="First Name"
        value={fName}
        onChange={(event) => setFName(event.target.value)}
        maxLength={maxNameLength}
        minLength={minCharLength}
        autoFocus
        //required
      />
      <input
        className="last-name input-fields"
        type="text"
        placeholder="Last Name"
        value={lName}
        onChange={(event) => setLName(event.target.value)}
        maxLength={maxNameLength}
        minLength={minCharLength}
        //required
      />
      <input
        className="age input-fields"
        type="text"
        placeholder="Age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        maxLength={maxAgeLength}
        minLength={minAgeLength}
      />
      <input
        className="phone-num input-fields"
        type="text"
        placeholder="Phone Number (no hyphens)"
        value={phoneNum}
        onChange={(event) => setPhoneNum(event.target.value)}
        maxLength={phoneNumCharLength}
        minLength={phoneNumCharLength}
        //required
      />
      <input
        className="email input-fields"
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        maxLength={maxEmailLength}
      />
      <input
        className="ss-num input-fields"
        type="text"
        placeholder="SS Number (no hyphens)"
        value={ssNum}
        onChange={(event) => setSSNum(event.target.value)}
        maxLength={ssCharLength}
        minLength={ssCharLength}
        //required
      />
    </div>
  );
}
