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
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AdminContext } from "../contexts/AdminProvider";

const EditPage = () => {
  const params = useParams();
  const { getProductToEdit, productToEdit, saveEditedProduct } =
    useContext(AdminContext);
  const [productEdit, setProductEdit] = useState(productToEdit);
  const navigate = useNavigate();
  useEffect(() => {
    setProductEdit(productToEdit);
  }, [productToEdit]);
  useEffect(() => {
    getProductToEdit(params.id);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // ! Проверка на пустоту
    for (const key in productEdit) {
      if (!productEdit[key]) {
        alert("Заполните поля");
        return;
      }
    }
    saveEditedProduct(productEdit);
    navigate("/admin-panel");
  };

  if (!productEdit) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="body">
      <div class="container">
        <form onSubmit={handleSubmit} id="contact">
          <h3>Edit Page</h3>
          <fieldset>
            <input
              onChange={(e) =>
                setProductEdit({ ...productEdit, name: e.target.value })
              }
              value={productEdit.name}
              placeholder="Введите название"
              type="text"
              required
            />
          </fieldset>
          <fieldset>
            <input
              onChange={(e) =>
                setProductEdit({ ...productEdit, brand: e.target.value })
              }
              value={productEdit.brand}
              placeholder="Введите бренд"
              type="text"
              required
            />
          </fieldset>
          <fieldset>
            <input
              style={{ width: "100%", height: "40px" }}
              onChange={(e) =>
                setProductEdit({ ...productEdit, price: e.target.value })
              }
              value={productEdit.price}
              placeholder="Введите цену"
              type="number"
              required
            />
          </fieldset>
          <fieldset>
            <input
              style={{ width: "100%", height: "40px" }}
              onChange={(e) =>
                setProductEdit({ ...productEdit, image: e.target.value })
              }
              value={productEdit.image}
              placeholder="Картинка"
            />
          </fieldset>
          <fieldset>
            <textarea
              onChange={(e) =>
                setProductEdit({ ...productEdit, description: e.target.value })
              }
              value={productEdit.description}
              placeholder="Введите описание"
              required
            ></textarea>
          </fieldset>
          <FormControl fullWidth>
            <InputLabel id="color-select">Цвет</InputLabel>
            <Select
              onChange={(e) =>
                setProductEdit({ ...productEdit, color: e.target.value })
              }
              value={productEdit.color}
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
            >
              Сохранить ихменения
            </button>
          </fieldset>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default EditPage;
