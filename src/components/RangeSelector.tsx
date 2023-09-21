import React, { useState } from "react";
import "../styles/RangeSelector.css";

export default function RangeSelector() {
  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeSelector = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.target.value));
  };

  return (
    <div className="main-range-selector">
      <div className="label-range-selector">
        <h3>Character Length</h3>
        <span>{rangeValue}</span>
      </div>
      <div className="range-selector">
        <input
          type="range"
          min="0"
          max="20"
          value={rangeValue}
          onChange={(e) => handleRangeSelector(e)}
        />
      </div>
    </div>
  );
}
