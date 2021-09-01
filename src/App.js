import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import { Header } from "./components/header";
import SearchBar from "./components/searchbar";
import { SlideShow } from "./components/slideShow";
import { useState } from "react";
import { AppContext } from "./app.context";
import { ItemDetails } from "./components/item-details";
import { Checkout } from "./components/checkout";
import { StoreSelection } from "./components/storeSelection";
import { StoreChart } from "./components/storeChart";
import { Typography } from "@material-ui/core";
import GadgetsIcon from "./assets/gadgets.jpg";
import HomeCareIcon from "./assets/homecare.jpg";
import walmartcopy from "./assets/walmartcopy.png";

const useStyles = makeStyles({
  shellContainer: {
    // padding: '1em'
  },
});

function App() {
  const classes = useStyles();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [currentItem, setCurrentItem] = useState("");
  const [itemsAddedToCart, setItemsAddedToCart] = useState([]);
  const [selectedStore, setSelectedStore] = useState("");

  return (
    <div className="App">
      {selectedStore ? (
        <Router>
          <AppContext.Provider
            value={{
              isSearchOpen: isSearchOpen,
              setIsSearchOpen: setIsSearchOpen,
              searchedText: searchedText,
              setSearchedText: setSearchedText,
              currentItem: currentItem,
              setCurrentItem: setCurrentItem,
              itemsAddedToCart: itemsAddedToCart,
              setItemsAddedToCart: setItemsAddedToCart,
            }}
          >
            <Header />
            <SearchBar />
            <Switch>
              <Route path="/details">
                <ItemDetails />
              </Route>

              <Route path="/checkout">
                <Checkout />
              </Route>

              <Route path="/storeMap">
                <StoreChart selectedStore={selectedStore} />
              </Route>

              <Route path="/">
                <section className={classes.shellContainer}>
                  {/* <SearchBar /> */}

                  <div
                    class="MarketingBanner MarketingBanner-container MarketingBanner-mobile"
                    style={{ backgroundColor: "#0071DC", color: "#FFFFFF" }}
                    data-module="MarketingBanner"
                    data-module-id="35c04f9d-26d4-42f6-9acb-13109a571a4d"
                    aria-label="W+ no order minimum shipping. Restrictions apply."
                    tabindex="0"
                  >
                    <div
                      style={{ display: "flex", padding: "1em" }}
                      class="MarketingBanner-contentWrapper"
                    >
                      <img
                        alt="Free shipping with no order minimum required. Restrictions apply. Try it free"
                        aria-label="Free shipping with no order minimum required. Restrictions apply. Try it free"
                        itemprop="image"
                        loading="lazy"
                        src="https://i5.walmartimages.com/dfw/4ff9c6c9-cbdc/k2-_45850a1b-054c-40a9-97e1-a5dbefc5413f.v1.svg"
                        class=""
                      />
                      <div class="MultipleCTACard">
                        <span class="MultipleCTACard-title">
                          W+ no order minimum shipping. Restrictions apply.
                        </span>
                        <div class="MultipleCTALinks ">
                          <a
                            class="MultipleCTALinks-link"
                            title="Try it free"
                            data-uid="wlT66plb"
                            href="/plus?povid=wpl_mab_gm"
                            style={{ color: "#FFFFFF" }}
                            data-tl-id="-MarketingBanner-MultipleCTACard-MultipleCTA-0-link"
                          >
                            Try it free
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <SlideShow />
                  {/* <div>
                  <Typography variant={"subtitle1"}>
                    Popular Categories
                  </Typography>
                  <div className="popular-categories">
                    <img
                      src={GadgetsIcon}
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "50%",
                      }}
                    />

<img
                      src={GadgetsIcon}
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "50%",
                      }}
                    />

<img
                      src={HomeCareIcon}
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "50%",
                      }}
                    />

<img
                      src={ClothesIcon}
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "50%",
                      }}
                    />
              
                  </div>
                  </div> */}
                  <img style={{width: '90vw'}} src={walmartcopy} />
                </section>
              </Route>
            </Switch>
          </AppContext.Provider>
        </Router>
      ) : (
        <StoreSelection setSelectedStore={setSelectedStore} />
      )}
    </div>
  );
}

export default App;
