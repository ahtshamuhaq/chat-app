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

  return (
    <div className="bg-tertiary w-full p-4 rounded-full mt-4 mb-3">
      <Select
        options={options}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused ? "tertiary" : "tertiary",
            borderWidth: state.isFocused ? "0px" : "0px",
            color: state.isFocused ? "tertiary" : "tertiary",
            borderColor: state.isFocused ? "#595E88" : "#595E88",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused ? "#595E88" : "#595E88",
            color: state.isFocused ? "#ffffff" : "#ffffff",
          }),
        }}
        value={value}
        openMenuOnClick={handleCountryResponse}
        onChange={changeHandler}
      />
    </div>
  );
}

export default CountrySelector;
