import React from 'react';

export const AppContext = React.createContext({
    searchedText: '',
    setSearchedText: () => {},
    isSearchOpen: false,
    setIsSearchOpen: () => {},
    itemsAddedToCart: [],
    setItemsAddedToCart: () => {},
    currentItem: '',
    setCurrentItem: () => {}
});