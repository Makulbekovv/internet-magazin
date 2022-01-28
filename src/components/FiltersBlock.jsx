import { Filter } from "@mui/icons-material";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../contexts/ClientProvider";

const FiltersBlock = () => {
  const search = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const { getProducts } = useContext(ClientContext);
  const [searchValue, setSearchValue] = useState(search.get("q") || "");
  const [colorValue, setColorValue] = useState(search.get("color") || "");
  const [priceValue, setPriceValue] = useState(search.get("price_lte" || ""));

  const filterProducts = (key, value) => {
    search.set(key, value);
    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setSearchValue(search.get("q") || "");
    setColorValue(search.get("color") || "");
    setPriceValue(search.get("price_lte" || ""));
    getProducts();
  };

  const resetFilter = () => {
    navigate("/");
    setSearchValue("");
    setColorValue("");
    setPriceValue("");
    getProducts();
  };
  return (
    <>
      <div className="search">
        {/* <TextField
          value={searchValue}
          onChange={(e) => filterProducts("q", e.target.value)}
          variant="outlined"
          label="Живой поиск"
        /> */}
        <fieldset>
          <input
            style={{
              width: "100%",
              height: "50px",
              borderRadius: "50px",
              border: "2px solid grey",
              textAlign: "center",
              color: "black",
            }}
            value={searchValue}
            onChange={(e) => filterProducts("q", e.target.value)}
            variant="outlined"
            placeholder="Живой поиск"
          />
        </fieldset>
      </div>
      <div
        className="filters-block"
        style={{
          justifyContent: "space-evenly",
          width: "70%",
          marginTop: "3%",
          marginLeft: "-5%",
        }}
      >
        <div style={{ width: "20%", backgroundColor: "#dfdfdf" }}>
          <FormControl fullWidth>
            <InputLabel id="color-select">Цвет</InputLabel>
            <Select
              value={colorValue}
              onChange={(e) => filterProducts("color", e.target.value)}
              labelId="color-select"
              label="Выберите цвет"
              color="warning"
            >
              <MenuItem value="black">Черный</MenuItem>
              <MenuItem value="white">Белый</MenuItem>
              <MenuItem value="gray">Серый</MenuItem>
              <MenuItem value="space-gray">Темно-серый</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <Slider
            onChange={(e) => filterProducts("price_lte", e.target.value)}
            valueLabelDisplay="auto"
            max={200000}
            step={100}
            color="warning"
          />
        </div>
        <div>
          <Button
            onClick={resetFilter}
            variant="contained"
            color="warning"
            style={{ color: "white" }}
          >
            Сбросить
          </Button>
        </div>
      </div>
    </>
  );
};

export default FiltersBlock;