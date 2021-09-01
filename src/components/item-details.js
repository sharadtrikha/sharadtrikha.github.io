import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { Fruits } from "../data/fruits";
import { AppContext } from "../app.context";
import { Card, IconButton, Typography } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";

import DoneIcon from "@material-ui/icons/Done";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Rating from '@material-ui/lab/Rating';

export const ItemDetails = () => {
  const { currentItem, setItemsAddedToCart, itemsAddedToCart } =
    useContext(AppContext);
  const item = Fruits.find((fruit) => fruit.id === currentItem);
  const remainingItems = Fruits.filter((fruit) => fruit.id !== currentItem);

  const addToCart = (id) => {
    const res = [...itemsAddedToCart, id];
    setItemsAddedToCart(res);
  };

  const getCount = (id) => {
    const arr = itemsAddedToCart.filter((elem) => elem === id);
    return arr.length;
  };

  const getSelectedItem = (req) => {
    const isAddedToCart = itemsAddedToCart.some((elem) => elem === req.id);
    return (
      <div style={{ borderBottom: "1px solid #e1e1e1" }}>
        <div
          className="inner"
          style={{
            display: "flex",
            padding: "1em",
            backgroundColor: "#fff",
          }}
        >
          <img
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "8px",
              // border: "1px solid #eeeff1",
              // "box-shadow": "0 5px 15px rgb(0 0 0 / 5%)",
            }}
            src={req.img}
          />

          <div
            className="product-details"
            style={{
              display: "flex",
              "flex-direction": "column",
              position: "relative",
              left: "37%",
            }}
          >
            <Typography component="span" variant="subtitle1">
              {req.displayName}
            </Typography>

            <Rating name="read-only" value={Math.floor(Math.random() * 5) + 1} readOnly size="small" />
            {/* <Chip label="Fruits" variant="outlined" /> */}
            {/* <Typography variant="subtitle1" color="textSecondary">{item.cost}</Typography> */}
            <span style={{margin: '6px'}}>
              <Typography
                variant="span"
                color="textPrimary"
                style={{ fontWeight: "600", marginRight: '12px' }}
              >
                {req.cost}$
              </Typography>
              <Typography
                variant="span"
                color="textSecondary"
                style={{ textDecoration: "line-through" }}
              >
                {req.cost - 5}$
              </Typography>
            </span>
            {/* <Button
              color="primary"
              variant="outlined"
              onClick={() => addToCart(item.id)}
            >
              Add
            </Button> */}

            {isAddedToCart ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AddIcon
                  style={{
                    color: "white",
                    "background-color": "rgb(4, 30, 66)",
                    border: "1px solid rgb(4, 30, 66)",
                    fontSize: "20px",
                  }}
                  onClick={() => addToCart(req.id)}
                />
                <div
                  style={{
                    color: "white",
                    "background-color": "rgb(4, 30, 66)",
                    border: "1px solid rgb(4, 30, 66)",
                    "min-width": "34px",
                    "min-height": "20px",
                  }}
                >
                  {getCount(req.id)}
                </div>
                <RemoveIcon
                  style={{
                    color: "white",
                    "background-color": "rgb(4, 30, 66)",
                    border: "1px solid rgb(4, 30, 66)",
                    fontSize: "20px",
                  }}
                />
              </div>
            ) : (
              <div
                style={{
                  width: "76px",
                  height: "22px",
                  color: "white",
                  "background-color": "rgb(4, 30, 66)",
                  border: "1px solid rgb(4, 30, 66)",
                }}
                onClick={() => addToCart(req.id)}
              >
                Add
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div
        style={{
          "min-height": "40px",
          display: "flex",
          "align-items": "center",
          "background-color": "#eee",
          "padding-left": "14px",
          "font-weight": "600",
          "font-size": "14px",
          opacity: "0.8",
        }}
      >
        1 item
      </div>
      {getSelectedItem(item)}

      <div
        style={{
          "min-height": "40px",
          display: "flex",
          "align-items": "center",
          "background-color": "#eee",
          "padding-left": "14px",
          "font-weight": "600",
          "font-size": "14px",
          opacity: "0.8",
        }}
      >
        Similar Items
      </div>
      {remainingItems.map(elem => {
        return getSelectedItem(elem)
      })}

    </React.Fragment>
  );
};
