import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Navbar from "./Navbar";
import "../styles/App.css";
import { useSelector } from "react-redux";
import cartReducer from "../reducers/cartReducer";
import { remove } from "../actions/cartLoader";
import { addToCart } from "../actions/cartLoader";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by the "}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {" team."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  // heroButtons: {
  //   marginTop: theme.spacing(4)
  // },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%",
    height: "400px"
    // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  root: {
    backgroundColor: "black"
  }
}));

export default function Album() {
  const addedItems = useSelector(appState => appState.addedItems);
  function handleClick(id) {
    addToCart(id);
    console.log(id);
  }

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" className={classes.root}>
        {/* <Toolbar color="black">
          <Typography variant="h6" color="inherit" noWrap />
        </Toolbar> */}
        <Navbar />
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Checkout Cart
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            />
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {addedItems.length === 0 ? (
              <span>Nothing is in your cart</span>
            ) : (
              ""
            )}
            {addedItems.map(card => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={"/assets/" + card.sku + "_1.jpg"}
                    title={card.title}
                  />

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" />
                    {card.title}
                    <Typography>{card.style}</Typography>
                    <Typography>
                      {card.price}
                      <div
                        className={
                          card.isFreeShipping ? "shipping" : "shipping hide"
                        }
                      >
                        Free Shipping
                      </div>
                    </Typography>
                    <span>Quantity: </span> {card.quantity}
                  </CardContent>

                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      className={classes.root}
                      onClick={() => {
                        handleClick(card.id);
                      }}
                    >
                      Add
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      className={classes.root}
                      onClick={() => {
                        remove(card.id);
                      }}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom />
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          <h1>
            Your Total $:
            {addedItems
              .reduce((a, b) => {
                return a + b.total_price;
              }, 0)
              .toFixed(2)}
          </h1>
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
