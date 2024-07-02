import React from "react";
import Header from "./layouts/header/Header";
import ListProduct from "./components/product/ListProduct";
import Global from "./context/Global";

export default function App() {
  // Lưu ý: file App là nơi định tuyến router
  return (
    <>
      <Global />
    </>
  );
}
