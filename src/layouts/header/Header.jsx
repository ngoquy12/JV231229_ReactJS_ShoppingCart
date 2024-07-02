import { ShoppingCartOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/Global";

export default function Header() {
  const { cartLength } = useContext(GlobalContext);

  return (
    <>
      <header className="h-[56px] w-full bg-orange-500 flex items-center justify-between px-12 text-white">
        <ul className="flex gap-3">
          <li>Trang chủ</li>
          <li>Danh sách sản phẩm</li>
        </ul>
        <div className="relative">
          <ShoppingCartOutlined className="text-[24px]" />
          <p className="bg-red-500 px-2 text-[12px] absolute top-[-10px] right-[-20px] rounded-lg hover:text-[14px] transition-all duration-75 ease-linear">
            {cartLength > 9 ? "9+" : cartLength}
          </p>
        </div>
      </header>
    </>
  );
}
