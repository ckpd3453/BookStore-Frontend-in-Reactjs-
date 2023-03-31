import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "../Home/Home.css";

export default function Header() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "maroon",
        }}
      >
        <img
          src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A34a6421f-a569-47b8-bc37-078211517464&params=version%3A0&token=1680190794_da39a3ee_b225cc53be9b6a1df4baafa163d34b312ae68fce&api_key=CometServer1"
          alt=""
          style={{ marginLeft: "10%", height: "50%", marginRight: ".3%" }}
        />
        <div style={{ color: "white", marginRight: "6%" }}>Bookstore</div>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            width: "32%",
            height: "1.8em",
            marginTop: ".7%",
            marginRight: "39%",
          }}
        >
          <SearchIcon sx={{ height: "100%", width: "2em" }} />
          <input
            type="text"
            placeholder="Search..."
            style={{ border: "1px solid white" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "-15%",
            marginTop: ".2%",
          }}
        >
          <Person2OutlinedIcon />
          Profile
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            marginLeft: "5%",
            marginTop: ".3%",
          }}
        >
          <ShoppingCartOutlinedIcon />
          Cart
        </div>
      </div>
    </div>
  );
}
