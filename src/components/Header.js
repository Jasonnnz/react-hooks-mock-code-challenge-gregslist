import React from "react";
import Search from "./Search";

function Header({onSubmit, checked, setChecked}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1><br></br>
      <label htmlFor="alphabetical">Sort by Location</label>
      <input value={checked} onChange={(e) => setChecked(e.target.checked)} type="checkbox" name="alphabetical"/>
      <Search onSubmit={onSubmit} />
    </header>
  );
}

export default Header;
