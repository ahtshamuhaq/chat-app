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
    <div className="bg-[#595E88] w-full p-4 rounded-full mt-4 mb-3">
      <Select
        options={options}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused ? "#595E88" : "#595E88",
            borderWidth: state.isFocused ? "0px" : "0px",
            color: state.isFocused ? "#595E88" : "#595E88",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused ? "#595E88" : "#ffffff",
            color: state.isFocused ? "#000000" : "#000000",
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
