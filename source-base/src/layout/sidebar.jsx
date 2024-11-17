import React from "react";
import { Steps } from "antd";
import { loginDetailsSelector, stepCountSelector } from "../store/selectors/auth.selector";
import { useSelector } from "react-redux";
import { CONFIG } from "../environment";
export default function SideBar() {
  const { Step } = Steps;
  const stepCount = useSelector(stepCountSelector);
  
  // const stepCount = 1;
  console.log('stepCount', stepCount)
  
  const data1 = [
    {
      title: "Personal Details",
    },
    {
      title: "Card Details",
    },
    {
      title: "Item Details",
    },
    {
      title: "Loan Details",
    },
    {
      title: "Document Checklist",
    },
  ];
  const data2 = [
    {
      title: "Loan Details",
    },
    {
      title: "Remarks",
    },
  ];
  const LoginDetails = useSelector(loginDetailsSelector);
  const UserName = LoginDetails.userName.toLowerCase();
  const data = UserName === CONFIG.MERCHANT_USERNAME ? data1 : data2;
  return (
    <>
      <Steps className="display-side mb-5"
        direction="vertical" current={stepCount}>
        {data.map((item, index) => (
          <Step title={item.title} icon={index + 1} key={index}></Step>
        ))}
      </Steps>
    </>
  );
}
