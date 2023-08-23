import React, { useState } from "react";
import { Steps, theme } from "antd";
import { PersonalDetail } from "./pages/PersonalDetail";
import { AddressDetail } from "./pages/AddressDetail";
import { EducationalDetail } from "./pages/EducationalDetail";
import PreviewEdit from "./pages/PreviewEdit";

const App = () => {
  
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const steps = [
    {
      title: "Personal",
      content: <PersonalDetail current={current} setCurrent={setCurrent} />,
    },
    {
      title: "Address",
      content: <AddressDetail current={current} setCurrent={setCurrent} />,
    },
    {
      title: "Educational",
      content: <EducationalDetail current={current} setCurrent={setCurrent} />,
    },
    {
      title: "Preview & Edit",
      content: <PreviewEdit current={current} setCurrent={setCurrent} />,
    },
  ];
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "20px",
    backgroundColor: "#DBE7F2",
    padding: "20px",
    color: "black",
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
  };
  return (
    <>
      <h1 className="text-center text-4xl font-semibold text-black-600 mb-4">Registration Form</h1>
      <Steps className="p-5 stepper" current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      ></div>
      <div className="flex justify-center m-2"></div>
    </>
  );
};
export default App;
