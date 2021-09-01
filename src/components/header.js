import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { WalmartLogo } from "../assets/walmart-logo";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { AppContext } from '../app.context';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    "& svg": {
      fill: "#fff",
    },
  },
}))(Badge);

const useStyles = makeStyles({
  bgColor: {
    backgroundColor: "#041e42",
    display: "flex",
    alignItems: "center",
  },
  iconButton: {
    position: 'relative',
    paddingRight: '1.5rem',
    "& svg": {
      fill: "#fff",
    },
  },
  wmlogo: {
    flexGrow: 2,
  },
});

export const Header = () => {
  const classes = useStyles();
  const { itemsAddedToCart } = useContext(AppContext);
  const browseHistory = useHistory();

  const onCartClick = () => {
      browseHistory.push('/checkout')
  }

  return (
    <header className={classes.bgColor}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>

      <span className={classes.wmlogo} onClick={() => browseHistory.push('/')}>
        <WalmartLogo />
      </span>

      {/* <IconButton className={classes.iconButton} aria-label="menu">
        <ShoppingCartOutlinedIcon />
      </IconButton> */}

      <IconButton aria-label="cart" className={classes.iconButton} onClick={onCartClick}>
        <StyledBadge badgeContent={itemsAddedToCart.length} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </header>
  );
};
