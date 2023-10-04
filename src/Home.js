import React from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";

export const Home = () => {
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "rgba(135, 129, 129, 0.264)",
      border: "none",
      color: "#000",
      outline: "none",
      padding: "8px",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: "rgba(135, 129, 129, 0.264)",
        color: "#000",
        fontSize: "larger",
        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? "#e4ca73"
              : "rgba(135, 129, 129, 0.264)"
            : undefined,
        },
      };
    },
    placeholder: (styles) => ({
      ...styles,
      color: "#fff",
      fontSize: "larger",
    }),
    singleValue: (styles, { data }) => ({
      ...styles,
      color: "#fff",
      fontSize: "larger",
    }),
    input: (styles) => ({ ...styles, color: "#fff" }),
  };
  const { t } = useTranslation();
  return (
    <div className="home">
      <div className="cover">
        <div className="title">
          <img src="assets/images/home-header.png" alt="" />
        </div>
      </div>

      <div className="card">
        <div className="search-form">
          <Select
            className="basic-single select-home"
            isClearable={true}
            classNamePrefix="select"
            placeholder="Select Mark"
            name="color"
            maxMenuHeight={"100px"}
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
              { value: "6", label: "6" },
              { value: "7", label: "7" },
            ]}
            styles={colourStyles}
          />

          <Select
            className="basic-single select-home"
            isClearable={true}
            classNamePrefix="select"
            placeholder="Select Mark"
            name="color"
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
              { value: "6", label: "6" },
              { value: "7", label: "7" },
            ]}
            maxMenuHeight={"100px"}
            styles={colourStyles}
          />

          <Select
            className="basic-single select-home"
            isClearable={true}
            classNamePrefix="select"
            placeholder="Select Mark"
            name="color"
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
              { value: "6", label: "6" },
              { value: "7", label: "7" },
            ]}
            maxMenuHeight={"100px"}
            styles={colourStyles}
          />

          <button className="home-advanced-button">{t("Search Now")} </button>
        </div>
      </div>

      <hr className="home-hr" />

      <p>
        Copyrights 2024 <em>Primo Carthage</em> Developed by <em>RO</em>
      </p>
    </div>
  );
};
