import React, { useState } from "react";
import Header from "../Home/Header";
import "../Cart/Cart.css";
import PinDropIcon from "@mui/icons-material/PinDrop";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function Cart() {
  const [getAddress, setGetAddress] = useState(false);
  const [getOrder, setGetOrder] = useState(false);

  const getAddressDetails = () => {
    setGetAddress(!getAddress);
  };

  const getOrderSummary = () => {
    setGetOrder(!getOrder);
  };
  return (
    <div className="cart-container">
      <div className="bookDescription-header">
        <Header />
      </div>
      <div className="bookDescription-title">
        <div
          style={{
            width: "78%",
            height: "auto",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1%",
          }}
        >
          <div style={{ display: "flex" }}>
            <b style={{ color: "grey" }}>Home/</b>
            <b style={{ fontSize: "1em" }}> My cart</b>
          </div>
        </div>
      </div>
      <div className="bookDescription-body">
        <div className="cart-book-detail">
          <div
            style={{
              height: "20%",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1%",
            }}
          >
            <div style={{ marginLeft: "3%" }}>
              {" "}
              <b style={{ fontSize: "1.2em", color: "#0A0102" }}>
                {" "}
                My cart({})
              </b>
            </div>
            <div
              style={{
                display: "flex",
                border: "1px solid grey",
                height: "60%",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "2%",
              }}
            >
              <PinDropIcon sx={{ color: "maroon" }} />
              <h5 style={{ color: "#0A0102" }}>
                BridgeLabz Solutions LLP, No...
              </h5>
              <ArrowDropDownIcon sx={{ color: "grey" }} />
            </div>
          </div>
          <div
            style={{
              height: "56%",
              display: "flex",
            }}
          >
            <div style={{ width: "21%" }}>Book Image</div>
            <div style={{ width: "25%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  height: "20%",
                  color: "#0A0102",
                }}
              >
                <b> Book Name</b>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  height: "20%",
                  color: "#9D9D9D",
                }}
              >
                <b> Author Name</b>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  height: "20%",
                  color: "#0A0102",
                }}
              >
                <b> Price</b>
              </div>
              <div style={{ display: "flex", height: "40%" }}>
                <div
                  style={{
                    height: "1.5em",
                    marginTop: "15%",
                    marginLeft: "5%",
                    width: "46%",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid #DBDBDB",
                      color: "#DBDBDB",
                      width: "25%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      fontSize: "2em",
                      borderRadius: "100%",
                      backgroundColor: "#DBDBDB",
                    }}
                  >
                    <div style={{ marginBottom: "35%" }}>-</div>
                  </div>
                  <div
                    style={{
                      border: "1px solid #DBDBDB",
                      width: "40%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#333232",
                    }}
                  >
                    2
                  </div>
                  <div
                    style={{
                      border: "1px solid #DBDBDB",
                      width: "25%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#333232",
                      fontSize: "1.5em",
                      borderRadius: "100%",
                      backgroundColor: "#DBDBDB",
                    }}
                  >
                    <div style={{ marginBottom: "30%" }}>+</div>
                  </div>
                </div>
                <div style={{ marginTop: "15%", marginLeft: "15%" }}>
                  Remove
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "20%" }}>
            {!getAddress && (
              <button
                style={{
                  marginLeft: "78%",
                  width: "18%",
                  height: "2.5em",
                  marginTop: "2.5%",
                  backgroundColor: "#3371B5",
                  color: "white",
                  border: "1px solid #3371B5",
                }}
                onClick={getAddressDetails}
              >
                PLACE ORDER
              </button>
            )}
          </div>
        </div>
        <div
          style={{
            width: "70%",
          }}
        >
          {getAddress ? (
            <div
              style={{
                marginTop: "1.2%",
                border: "1px solid #707070",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "1.5%",
                }}
              >
                <div style={{ marginLeft: "2%" }}>
                  <b style={{ fontSize: "1.2em" }}> Customer Details</b>
                </div>
                {!getOrder && (
                  <div
                    style={{
                      marginRight: "5%",
                      border: "1px solid #A03037",
                      color: "#A03037",
                      width: "20%",
                      height: "2em",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Add New Address
                  </div>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "4%",
                  marginTop: "3%",
                  justifyContent: "space-between",
                  width: "70%",
                }}
              >
                <div
                  style={{
                    width: "46%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <label htmlFor="">Full Name</label>
                  </div>
                  <div style={{ width: "100%" }}>
                    <input
                      type="text"
                      placeholder="Chandra"
                      style={{ width: "100%", height: "3em", padding: "0 5%" }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    width: "46%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <label htmlFor="">Mobile Nummber</label>
                  </div>
                  <div style={{ width: "100%" }}>
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="7005268726"
                      style={{ width: "100%", height: "3em", padding: "0 5%" }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}
                >
                  <RadioButtonCheckedIcon sx={{ color: "#A03037" }} />
                  <div>
                    <b>1.WORK</b>{" "}
                  </div>
                  <div
                    style={{
                      fontSize: ".8em",
                      marginTop: ".5%",
                      marginLeft: "2%",
                      color: "#A03037",
                    }}
                  >
                    {" "}
                    <b> Edit</b>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      marginLeft: "5%",
                      width: "100%",
                    }}
                  >
                    <div style={{ marginTop: "1%" }}>
                      <label htmlFor="">Address</label>
                    </div>
                    <input
                      type="text"
                      placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium deserunt recusandae ex eaque. Incidunt aliquid
                      sit veritatis asperiores. Autem neque qui dolorum enim
                      dolor necessitatibus, possimus fugiat maiores vero maxime!"
                      style={{ width: "71.5%", height: "6em", marginTop: "1%" }}
                    />
                  </div>
                  <div style={{ display: "flex", marginBottom: "2%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginLeft: "5%",
                        width: "34%",
                      }}
                    >
                      <div style={{ marginTop: "1%" }}>
                        <label htmlFor="">city/town</label>
                      </div>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Bengaluru"
                        style={{
                          width: "100%",
                          height: "3em",
                          marginTop: "1%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginLeft: "3.5%",
                        width: "34%",
                      }}
                    >
                      <div style={{ marginTop: "1%" }}>
                        <label htmlFor="">state</label>
                      </div>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Karnataka"
                        style={{
                          width: "100%",
                          height: "3em",
                          marginTop: "1%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {!getOrder && (
                <>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "2%",
                        marginLeft: "2%",
                      }}
                    >
                      <RadioButtonUncheckedIcon />

                      <div>
                        <b>2.Home</b>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      <div style={{ marginLeft: "5%" }}> Address </div>
                    </div>
                    <div
                      style={{
                        marginLeft: "5%",
                        width: "72%",
                      }}
                    >
                      in Hey there My name is Chand Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Cum debitis eligendi in Hey
                      there My name is Chand Lorem ipsum dolor sit hh
                    </div>
                  </div>

                  <div>
                    <button
                      style={{
                        marginTop: "2%",
                        marginLeft: "80%",
                        marginBottom: "5%",
                        width: "15%",
                        height: "2.5em",
                        backgroundColor: "#3371B5",
                        color: "white",
                        border: "1px solid #3371B5",
                      }}
                      onClick={getOrderSummary}
                    >
                      Continue
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div
              style={{
                border: "1px solid #707070",
                height: "3.5em",
                marginTop: "1.2%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: "0 5%",
                color: "#333232",
              }}
            >
              <b> Address Details</b>
            </div>
          )}

          {getOrder ? (
            <div
              style={{
                border: "1px solid #707070",
                marginTop: "1.2%",
                height: "12em",
              }}
            >
              <div
                style={{
                  height: "20%",
                  display: "flex",
                  marginTop: "1%",
                  marginLeft: "3%",
                }}
              >
                {" "}
                <b style={{ fontSize: "1.2em", color: "#0A0102" }}>
                  {" "}
                  Order summary
                </b>
              </div>
              <div
                style={{
                  height: "56%",
                  display: "flex",
                }}
              >
                <div style={{ width: "21%" }}>Book Image</div>
                <div style={{ width: "25%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      height: "20%",
                      color: "#0A0102",
                    }}
                  >
                    <b> Book Name</b>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      height: "20%",
                      color: "#9D9D9D",
                    }}
                  >
                    <b> Author Name</b>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      height: "20%",
                      color: "#0A0102",
                    }}
                  >
                    <b> Price</b>
                  </div>
                </div>
              </div>
              <div style={{ width: "100%" }}>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "#3371B5",
                    border: "1px solid #3371B5",
                    height: "2em",
                    width: "15%",
                    marginLeft: "76%",
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          ) : (
            <div
              style={{
                border: "1px solid #707070",
                height: "3.5em",
                marginTop: "1.2%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: "0 5%",
                color: "#333232",
              }}
            >
              <b> Order summary</b>
            </div>
          )}
        </div>
      </div>
      <div className="home-footer">
        <p style={{ marginLeft: "11%" }}>
          copyright © 2020, Bookstore Private Limited. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
