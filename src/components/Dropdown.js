import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector({ handleCountryResponse, selectCountry }) {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
    selectCountry(value.label);
  };

  console.log(value.label);
  return (
    <div>
      <Select
        options={options}
        value={value}
        className="bg-pink"
        openMenuOnClick={handleCountryResponse}
        onChange={changeHandler}
      />
      <button type="submit">Submit</button>
    </div>
  );
}

export default CountrySelector;
