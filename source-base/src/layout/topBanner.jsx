import { Button, Drawer, Modal, Popover, } from "antd";
import BANK_LOGO from "client/assets/images/Cash-Connectors.png";
import profileIcon from "client/assets/images/profile.png";
import notifyIcon from "client/assets/images/notify-icon.svg";
import { useNavigate } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import "./layout.css";
import { useState } from "react";
import { AiOutlineInfoCircle, AiOutlineMenu } from "react-icons/ai";
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import { loginDetailsSelector } from "../store/selectors/auth.selector";
import { CONFIG } from "../environment";
import closeIcon from "client/assets/images/close.svg";
import Notification from "./notification";



export default function TopBanner() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
    const [visible, setVisible] = useState(false);
    const lastLogin = moment().format('DD.MM.YYYY [at] hh.mm a');
    const LoginDetails = useSelector(loginDetailsSelector);
    const UserName = LoginDetails.userName.toLowerCase();
    const mainDashboard = UserName === CONFIG.MERCHANT_USERNAME ? true : false;
  const content = (
    <ul className="profile-options m-0 p-0" style={{listStyleType:'none'}}>
      {/* <li onClick={() => navigate("/profile")}>
        Profile Details
      </li>
      <li onClick={() => navigate("/change-password")}>
        Change Password
      </li> */}
      <li onClick={() => setVisible(true)}>
        Log Out
      </li>
    </ul>
  );
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  
  return (
    <>
      <div className="d-flex header-wrapper">
        <div className="d-flex  align-items-center">
          <AiOutlineMenu
            className="d-block d-lg-none"
            size={20}
            style={{ marginRight: 30 }}
          />
          <img
            className="d-none d-lg-block"
            height={40}
            style={{
              cursor: "pointer",
            }}
            src={BANK_LOGO}
            alt="Bank Logo"
            onClick={() => mainDashboard ? navigate("/dashboard-merchant") : navigate("/dashboard-bank")}
          />
        
        
        </div>

        <div className="topbanner-menu d-flex justify-content-between">
        <img
              src={notifyIcon}
              alt="notifyIcon"
              height={40}
              width={40}
              style={{ alignSelf: "center" }}
              className="d-none d-lg-block"
              onClick={showDrawer}
            />

          <div className="profile-sec d-flex" style={{ margin: "0px 30px" }}>
            <img
              src={profileIcon}
              alt="profile"
              height={40}
              width={40}
              style={{ alignSelf: "center" }}
              className="d-none d-lg-block"
            />
            <span className="d-block  d-lg-none">
              <Popover placement="bottom" content={content} trigger="hover">
                <img
                  src={profileIcon}
                  alt="profile"
                  height={40}
                  width={40}
                  style={{ alignSelf: "center" }}
                />
              </Popover>
            </span>
            <div className="mt-1">
            <div className="d-flex justify-content-between mt-1">
              <Popover placement="bottom" content={content} trigger="hover">
                <span
                  className="d-none d-lg-block"
                  style={{
                    padding: "0 10px",
                    color: "var(--black_color)",
                    fontSize: "14px",
                    fontWeight: 500,
                    paddingRight: 5,
                  }}
                >
                  John
                </span>
                
              </Popover>
              <Popover placement="bottom" content={content} trigger="hover">
              <IoIosArrowDown
                className="d-none d-lg-block"
                color="var(--black_color)"
                style={{ marginTop: "5px" }}
              />
              </Popover>
            </div>
            <div>
                <span
                  className="d-none d-lg-block"
                  style={{
                    padding: "0 10px",
                    color: "var(--black_color)",
                    fontSize: "12px",
                    fontWeight: 400,
                    paddingRight: 5,
                  }}
                > 
                  Last Login on {lastLogin}
                </span>
                
            </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        closable={false}
        maskClosable={false}
        open={visible}
        footer={null}
        width={480}
        mask={true}
      >
        <div style={{ margin: "0 auto" }} align="center" className="mt-2">
          <AiOutlineInfoCircle size={55} className="color-green" />
          <h6
            className="auth-header-label color-green"
            style={{ textTransform: "initial" }}
          >
             Are you sure you want to logout ?
          </h6>

          <div align="center" className="mt-4 mb-4 d-flex">
          <div className="btn-verify mx-3 w-100">
            <Button
              type="primary"
              size="large"
              onClick={() => {
                setVisible(false);
              }}
              className="login-button"
            >
             Cancel
            </Button>
            </div>

            <div className="btn-login mx-3 w-100">
            <Button
              type="primary"
              size="large"
              className="login-button"
              onClick={() => {
                dispatch({ type: "USER_LOGOUT" });
                  navigate("/login");
              }}
            >
              Yes
            </Button>
          </div>
          </div>
        </div>
      </Modal>
      <Drawer
        title={[ <div className='d-flex justify-content-between'>
          <span className="mt-2" style={{ fontWeight: '500', fontSize: '22px' }}>All Notifications</span>
          <img
              src={closeIcon}
              alt="closeIcon"
              width={20}
              style={{ alignSelf: "center" }}
              onClick={onClose}
            />
                 </div>]}
        placement="right"
        onClose={onClose}
        open={open}
        headerStyle={{ textAlign: 'left' }}
        closeIcon={false}
      >
        <Notification/>
      </Drawer>
      </>
  );
}
