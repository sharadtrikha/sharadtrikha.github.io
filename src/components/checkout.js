import { Card, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import { AppContext } from "../app.context";
import { Fruits } from '../data/fruits';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import NavigationIcon from '@material-ui/icons/Navigation';

const getElement = (data, id) => {
  return data.find(elem => elem.id === id);
}


export const Checkout = () => {
  const { itemsAddedToCart } = useContext(AppContext);
  const uniqueItems = [...new Set(itemsAddedToCart)];
  const browseHistory = useHistory();
  const totalData = [...Fruits];
  let totalCost = 0;
  itemsAddedToCart.forEach(item => {
    const elem = getElement(totalData, item);
    totalCost = totalCost + elem.cost;
  })

  const getCount = (id) => {
    const arr = itemsAddedToCart.filter((elem) => elem === id);
    return arr.length;
  };
  
  //let uniqueItemsData = [];
  // totalData.forEach(elem => {
  //   if(itemsAddedToCart.some(elem.id)) {
  //     uniqueItemsData.push(elem);
  //   }
  // })
  



  return itemsAddedToCart.length ? (
    <React.Fragment>
    <List>
    {
      
      uniqueItems.map(item => {
        const e = getElement(totalData,item);
        const numberOfItemsAdded = getCount(item);
        return (
          <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={e.img} style={{width: '40px'}} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={e.displayName}
                    secondary={`${e.cost}$`}
                    
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <CloseIcon fontVariant="small" fontSize="small" />
                      <span style={{marginLeft: '8px'}}>{numberOfItemsAdded}</span>
                    </IconButton>
                   
                  </ListItemSecondaryAction>
                </ListItem>
        )
      })
      
    }
    </List>

    <div style={{
      margin: '20px 0',
    'border-top': '1px solid #eee',
    'border-bottom': '1px solid #eee',
    padding: '10px'
    }}>
      <Typography component={'span'} span variant={'subtitle1'}>Est. Total - </Typography>
      <Typography style={{fontWeight: '600'}} component={'span'} span variant={'subtitle2'}>{totalCost}$ </Typography>
    </div>
    <Button
        style={{
          width: '100%',
          'font-family': 'system-ui'
        }}
        variant="contained"
        color="secondary"
        startIcon={<NavigationIcon />}
        onClick={() => browseHistory.push('/storeMap')}
      >
        Navigate Me !
      </Button>

    </React.Fragment>
  ) : (
    <div
      style={{
        height: "85vh",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
      }}
    >
      {" "}
      Cart is empty
    </div>
  );
};
