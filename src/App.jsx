import React from "react";
import Header from "./layouts/header/Header";
import ListProduct from "./components/product/ListProduct";
import Global from "./context/Global";
import Tab from "./components/tab/Tab";
import Radio from "./features/Radio";

export default function App() {
  // Lưu ý: file App là nơi định tuyến router
  return (
    <>
      {/* <Global /> */}
      {/* <Tab /> */}

      <Radio />
    </>
  );
}
