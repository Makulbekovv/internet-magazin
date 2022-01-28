import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import MainPage from "./pages/MainPage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import DetailPage from "./pages/DetailPage";
import Navbar from "./components/Navbar";
import AdminProvider from "./contexts/AdminProvider";
import ClientProvider from "./contexts/ClientProvider";
import NoteFoundPage from "./pages/404";
import AuthProvider from "./contexts/AuthProvider";
import ProductCard from "./components/ProductCard";
import NewsCard from "./pages/NewsCard";
import Login from "./Login";
import Register from "./Register";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { orange, purple, grey, red } from "@mui/material/colors";
import Footer from "./pages/Footer";
import LoginProvider from "./contexts/LoginProvider";
import PaymentPage from "./pages/PaymentPage";
// import { LoginProvider } from "./contexts/LoginProvider";
// import Video from "./components/Video";
// import ListPage from "./pages/ListPage";

const theme = createTheme({
  palette: {
    warning: grey,
  },
});

const MyRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoginProvider>
        <AuthProvider>
          <ClientProvider>
            <AdminProvider>
              <BrowserRouter>
                <Navbar />
                {/* <Video /> */}
                <Routes>
                  {/* <Route path="" element={<Video />} /> */}
                  <Route path="/" element={<MainPage />} />
                  <Route path="/admin-panel" element={<AdminPage />} />
                  <Route path="/admin-panel-add" element={<AddPage />} />
                  <Route path="admin-panel/edit/:id" element={<EditPage />} />
                  <Route path="/product-detail/:id" element={<DetailPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  {/* <Route path="/product" element={<ProductCard />} /> */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="newscard" element={<NewsCard />} />
                  {/* <Route path="/payment" element={<Payment.html/>} /> */}
                  <Route path="/payment" element={<PaymentPage />} />
                  <Route path="/*" element={<NoteFoundPage />} />
                </Routes>
                <Footer style={{ marginTop: "20px" }} />
              </BrowserRouter>
            </AdminProvider>
          </ClientProvider>
        </AuthProvider>
      </LoginProvider>
    </ThemeProvider>
  );
};

export default MyRoutes;
