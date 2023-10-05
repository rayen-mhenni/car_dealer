import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import _ from "lodash";
import { useNavigate } from "react-router";

export const Home = () => {
  const nav = useNavigate();

  const { t } = useTranslation();

  const [isload, setisload] = useState(true);
  const [filter, setfilter] = useState(false);

  const [data, setData] = useState([]);
  const [page, setpage] = useState(1);
  const [filterdata, setFilterData] = useState([]);
  const [refetech, setrefetech] = useState(false);

  const [mark, setmark] = useState([{}]);
  const [model, setmodel] = useState([{}]);
  const [year, setyear] = useState([{}]);

  const [markfilter, setmarkfilter] = useState(null);
  const [modelFilter, setmodelFilter] = useState(null);
  const [yearFilter, setyearFilter] = useState(null);
  const [transmissionFilter, settransmissionFilter] = useState(null);
  const [sortFilter, setSortFilter] = useState(null);

  const [transmission, settransmission] = useState([
    {
      label: "Automatique",
      value: "automatique",
    },
    {
      label: "Manuelle",
      value: "manuelle",
    },
  ]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/car").then((response) => {
      if (response.data.car) {
        setData(response.data.car);

        let Make = Object.keys(_.groupBy(response.data.car, "Make"));
        let Model = Object.keys(_.groupBy(response.data.car, "Model"));
        let Year = Object.keys(_.groupBy(response.data.car, "Year"));

        const marksOp = [];
        const modelOp = [];
        const YearOp = [];

        Make.forEach((el, i) => {
          marksOp.push({
            key: i,
            value: el,
            label: el,
          });
        });

        Model.forEach((el, i) => {
          modelOp.push({
            key: i,
            value: el,
            label: el,
          });
        });

        Year.forEach((el, i) => {
          YearOp.push({
            key: i,
            value: el,
            label: el,
          });
        });

        setmark(marksOp);
        setmodel(modelOp);
        setyear(YearOp);

        setisload(false);
      } else {
        setisload(false);
      }
    });
  }, [refetech]);

  const handrefetech = () => {
    setrefetech(!refetech);
  };

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
        textAlign:'center',
        backgroundColor: !isDisabled
          ? isSelected
            ? "#e4ca73"
            : "rgba(135, 129, 129, 0.264)"
          : undefined,
        color: "#000",
        fontSize: "larger",
        ":active": {
          ...styles[":active"],
          backgroundColor: "#e4ca73"
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
            placeholder={t("Select Mark")}
            name="color"
            maxMenuHeight={"100px"}
            options={mark}
            onChange={(e) => {
              setmarkfilter(e?.value);
            }}
            styles={colourStyles}
          />

          <Select
            className="basic-single select-home"
            isClearable={true}
            classNamePrefix="select"
            placeholder={t("Select model")}
            name="color"
            options={model}
            maxMenuHeight={"100px"}
            onChange={(e) => {
              setmodelFilter(e?.value);
            }}
            styles={colourStyles}
          />

          <Select
            className="basic-single select-home"
            isClearable={true}
            classNamePrefix="select"
            placeholder={t("Select year")}
            name="color"
            options={year}
            maxMenuHeight={"100px"}
            onChange={(e) => {
              setyearFilter(e?.value);
            }}
            styles={colourStyles}
          />

          <button
            className="home-advanced-button"
            onClick={() => {
              nav(
                `/listing?markfilter=${markfilter ?? ""}&modelFilter=${modelFilter ?? ""
                }&yearFilter=${yearFilter ?? ""}`
              );
            }}
          >
            {t("Search Now")}{" "}
          </button>
        </div>
      </div>

      <hr className="home-hr" />

      <p>
        Copyrights 2024 <em>Primo Carthage</em> Developed by <em>RO</em>
      </p>
    </div>
  );
};
