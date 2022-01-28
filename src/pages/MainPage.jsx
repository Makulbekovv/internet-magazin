import { Container, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ClientContext } from "../contexts/ClientProvider";
import Video from "../components/Video";
import WatchText from "./WatchText";
import ProWatch from "./ProWatch";
import ProductsPagination from "../components/ProductsPagination";

const MainPage = (props) => {
  const { getProducts, mainPageProducts } = useContext(ClientContext);
  useEffect(() => {
    getProducts();
  }, []);

  if (!mainPageProducts) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <Video />
      <Container>
        <ProWatch />
        <Grid container spacing={1}>
          {mainPageProducts.map((item) => (
            <Grid xs={3} ml={10} mt={5} mb={5} item key={item.id}>
              <WatchText item={item} />
            </Grid>
          ))}
        </Grid>
        {/* <ProductsPagination /> */}
      </Container>
    </div>
  );
};

export default MainPage;
