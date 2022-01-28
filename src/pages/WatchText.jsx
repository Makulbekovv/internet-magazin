import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ClientContext } from "../contexts/ClientProvider";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const WatchText = (props) => {
  const { addProductToCart, checkProductInCart, deleteProductFromCart } =
    React.useContext(ClientContext);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{}}>
      <CardMedia
        style={{ backgroundSize: "cover" }}
        component="img"
        height="194"
        image={props.item.image}
        alt="Paella dish"
      />
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ ml: "10px", mt: "10px" }}
      >
        {props.item.price} сом
      </Typography>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.item.brand}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CardActions>
            {checkProductInCart(props.item.id) ? (
              <Button
                style={{ height: "35px", marginTop: "15px", fontSize: "10px" }}
                onClick={() => deleteProductFromCart(props.item.id)}
                size="small"
                variant="contained"
                color="warning"
              >
                В Корзине
              </Button>
            ) : (
              <Button
                style={{ height: "30px", fontSize: "10px" }}
                onClick={() => addProductToCart(props.item)}
                size="small"
                variant="contained"
              >
                В Корзину
              </Button>
            )}

            <Link
              style={{ marginLeft: 10 }}
              to={`/product-detail/${props.item.id}`}
            >
              <Button size="small" variant="contained">
                Подробнее...
              </Button>
            </Link>
          </CardActions>

          <Typography paragraph>{props.item.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default WatchText;
