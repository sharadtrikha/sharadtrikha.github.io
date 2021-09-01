/* eslint-disable no-use-before-define */
import React, { useContext, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useHistory } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import MicRoundedIcon from "@material-ui/icons/MicRounded";
import { AppContext } from "../app.context";
import { Fruits } from '../data/fruits';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

export default function FreeSolo() {
  const { isSearchOpen, setIsSearchOpen, searchedText, setSearchedText, setCurrentItem } =
    useContext(AppContext);

  const [results, setResults] = useState([]);

  const browseHistory = useHistory();

  const onSearch = (e) => {
    console.log("FIRED");
    setSearchedText(e.target.value);
  };

  const onMenuItemClick = (item, displayName) => {
    setCurrentItem(item);
    setSearchedText('');
    setIsSearchOpen(false);
    browseHistory.push('/details');
  }
 

  useEffect(() => {
      if(searchedText && searchedText.length) {
        setIsSearchOpen(true);
      } else {
        setIsSearchOpen(false);
      }
  }, [searchedText]);


  const getResults = () => {
      if(!isSearchOpen) {
          return ''
      }
      const elem =  Fruits.map(fruit => {
          return <ListItem key={fruit.id} id={fruit.id} button onClick={((e) => onMenuItemClick(fruit.id, fruit.displayName))}><ListItemText>{fruit.displayName}
                      <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <img src={fruit.img} width="30px" height="30px" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItemText></ListItem>
      })

      return (<List component="nav" aria-label="main mailbox folders" style={{position: 'absolute',
        left: '0',
        right: 0,
        'background-color': 'white',
        'zIndex': 1}}>{elem}</List>)
  }

  return (
    <React.Fragment>
      <div
        style={{
          "background-color": "#041e42",
          padding: "0em 0.8em 0.8em 0.8em",
        }}
      >
        <OutlinedInput
          style={{ backgroundColor: "#fff", width: "100%", height: '42px' }}
          id="outlined-adornment-weight"
          value={searchedText}
          onChange={onSearch}
          onClick={() => {}}
          placeholder={searchedText.length ? "" : "Search from 18000+ products"}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <MicRoundedIcon />
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          labelWidth={0}
        />
        {/* <Autocomplete
        id="searchbar"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} style={{backgroundColor: '#fff'}} label="Search for products.." margin="normal" variant="outlined" />
        )}
      /> */}
        {/* <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      /> */}
      </div>
      {getResults()}
    </React.Fragment>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
