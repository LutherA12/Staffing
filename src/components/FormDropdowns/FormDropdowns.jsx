import { jobInfo } from "../../utils/data";
import "./FormDropdowns.Styles.scss";

export default function FormDropdowns({
  dropdown1,
  dropdown2,
  dropdown3,
  setDropdown1,
  setDropdown2,
  setDropdown3,
}) {
  return (
    <div className="main-dropdown-container">
      <h4 className="dropdown-list-title">Choose your top 3 job preferences</h4>
      <select
        className="jobs"
        name="jobs"
        value={dropdown1}
        onChange={(event) => setDropdown1(event.target.value)}
      >
        {jobInfo.map((info, key) => {
          return (
            <option key={key} value={info.value}>
              {info.description}
            </option>
          );
        })}
      </select>
      <select
        className="jobs"
        name="jobs"
        value={dropdown2}
        onChange={(event) => setDropdown2(event.target.value)}
      >
        {jobInfo.map((info, key) => {
          return (
            <option key={key} value={info.value}>
              {info.description}
            </option>
          );
        })}
      </select>
      <select
        className="jobs"
        name="jobs"
        value={dropdown3}
        onChange={(event) => setDropdown3(event.target.value)}
      >
        {jobInfo.map((info, key) => {
          return (
            <option key={key} value={info.value}>
              {info.description}
            </option>
          );
        })}
      </select>
    </div>
  );
}
