import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { AdminContext } from "../contexts/AdminProvider";
import "../styles/AddPage.css";

const AddPage = (props) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    price: "",
    description: "",
    image: "",
    color: "",
  });

  const { addProduct } = React.useContext(AdminContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newProduct);
    // ! Проверка на пустоту
    for (const key in newProduct) {
      if (!newProduct[key]) {
        alert("Заполните поля");
        return;
      }
    }
    addProduct(newProduct);
    // !Очищаем инпуты
    setNewProduct({
      name: "",
      brand: "",
      price: "",
      description: "",
      image: "",
      color: "",
    });
  };
  return (
    <div className="body">
      <div class="container">
        <form onSubmit={handleSubmit} id="contact">
          <h3>Add Page</h3>
          {/* <h4>Contact us for custom quote</h4> */}
          <fieldset>
            <input
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              value={newProduct.name}
              placeholder="Введите название"
              type="text"
              // tabindex="1"
              required
              // autofocus
            />
          </fieldset>
          <fieldset>
            <input
              onChange={(e) =>
                setNewProduct({ ...newProduct, brand: e.target.value })
              }
              value={newProduct.brand}
              placeholder="Введите бренд"
              type="text"
              // tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              style={{ width: "100%", height: "40px" }}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: +e.target.value })
              }
              value={newProduct.price}
              placeholder="Введите цену"
              type="number"
              // tabindex="3"
              required
            />
          </fieldset>
          <fieldset>
            <input
              style={{ width: "100%", height: "40px", backgroundSize: "cover" }}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              value={newProduct.image}
              placeholder="Картинка"
            />
          </fieldset>
          <fieldset>
            <textarea
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              value={newProduct.description}
              placeholder="Введите описание"
              // tabindex="5"
              required
            ></textarea>
          </fieldset>
          <FormControl fullWidth>
            <InputLabel id="color-select">Цвет</InputLabel>
            <Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, color: e.target.value })
              }
              value={newProduct.color}
              labelId="color-select"
              label="Выберите цвет"
            >
              <MenuItem value="black">Черный</MenuItem>
              <MenuItem value="white">Белый</MenuItem>
              <MenuItem value="gray">Серый</MenuItem>
              <MenuItem value="space-gray">Темно-серый</MenuItem>
              <MenuItem value="gold">Золотистый</MenuItem>
            </Select>
          </FormControl>
          <fieldset>
            <button
              style={{ backgroundColor: "grey" }}
              type="submit"
              id="contact-submit"
              // data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddPage;
