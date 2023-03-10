import React from "react";

import { Switch, Route, Link, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import "./App.css";
import { Navbar } from "./components";
import { default as Homepage } from "./components/Homepage";
import { default as Exchanges } from "./components/Exchanges";
import { default as Cryptocurrencies } from "./components/Cryptocurrencies";
import { default as CryptoDetails } from "./components/CryptoDetails";
import { default as News } from "./components/News";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
               <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptoBazar <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
