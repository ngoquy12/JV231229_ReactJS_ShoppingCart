import React, { useState } from "react";

const tabs = [
  {
    id: 1,
    tabName: "Trang chủ",
  },
  {
    id: 2,
    tabName: "Liên hệ",
  },
  {
    id: 3,
    tabName: "Đăng ký",
  },
  {
    id: 4,
    tabName: "Đăng nhập",
  },
];

export default function Tab() {
  const [tab, setTab] = useState(1);

  const handleChangeTab = (index) => {
    setTab(index);
  };
  return (
    <div>
      <ul className="flex gap-2">
        {tabs.map((item) => (
          <li
            key={item.id}
            onClick={() => handleChangeTab(item.id)}
            className={`px-2 py-2 ${tab === item.id ? "bg-gray-400" : ""}`}
          >
            Liên hệ
          </li>
        ))}
      </ul>
    </div>
  );
}
