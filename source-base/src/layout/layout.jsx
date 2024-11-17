
import React from "react";
import TopBanner from "./topBanner";
import SideBar from "./sidebar";
import MerchantComponent from "../pages/merchant/merchant";
import { useSelector } from "react-redux";
import { loginDetailsSelector } from "../store/selectors/auth.selector";
import { CONFIG } from "../environment";
import BankComponent from "../pages/bank/bank";


export default function LayoutWrapper() {
    const LoginDetails = useSelector(loginDetailsSelector);
    const UserName = LoginDetails.userName.toLowerCase();
    const mainLayout = UserName === CONFIG.MERCHANT_USERNAME ? true : false;
    return (
        <>
            <div className="top-banner">
                <TopBanner />
            </div>
            <div className="main-section col-12">
                <div className='d-flex justify-content-between  mx-auto px-0 w-100 h-100'>
                    <div className="col-md-2  d-md-block side-container" >
                        <div className="side-banner ">
                            <SideBar />
                        </div>
                    </div>
                    <div className="col-md-10 p-0">
                { mainLayout ? <MerchantComponent /> : <BankComponent/>}
                    </div>
                </div>
            </div>
        </>
    );
}
