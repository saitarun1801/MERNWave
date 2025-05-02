// src/components/FilterSidebar.js
import React from "react";
import "./FilterSidebar.css";

function FilterSidebar() {
  const filters = [
    "Ideal For",
    "Occasion",
    "Work",
    "Fabric",
    "Segment",
    "Suitable For",
    "Raw Materials",
    "Pattern",
  ];

  return (
    <aside className="filter-sidebar">
      <label className="checkbox">
        <input type="checkbox" />
        Customizable
      </label>

      {filters.map((filter) => (
        <div className="filter-group" key={filter}>
          <label>{filter}</label>
          <select>
            <option>All</option>
            {/* Future options dynamically */}
          </select>
        </div>
      ))}
    </aside>
  );
}

export default FilterSidebar;
