import "./FormCheckboxes.Styles.scss";
import { checkboxInfo } from "../../utils/data";
import { useState } from "react";

export default function FormCheckboxes() {
  const [input, setInput] = useState("");

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
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <label for={boxes.forLabel} className="checkbox-labels">
              {boxes.label}
            </label>
          </div>
        );
      })}
    </div>
  );
}
