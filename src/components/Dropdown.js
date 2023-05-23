import React, { useState, useMemo } from "react";
import Select, { components } from "react-select";
import countryList from "react-select-country-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const CustomDropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <FontAwesomeIcon icon={faChevronUp} />
    </components.DropdownIndicator>
  );
};

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
        components={{ DropdownIndicator: CustomDropdownIndicator }}
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
        menuPlacement="top"
      />
    </div>
  );
}

export default CountrySelector;
