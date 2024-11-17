import { Button, Form, Input,} from "antd";
import BANK_LOGO from "client/assets/images/Cash-Connectors.png";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { CONFIG } from "../../environment";
import NotificationService from "../../services/notification.service";
import { SET_LOGIN_DETAILS } from "../../store/constants";
import { useDispatch } from "react-redux";
import { setLoginDetails } from "../../store/actions/auth.action";

export default function Landing() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

// function postLogin() {
//   navigate("/dashboard-merchant")
// }
const postLogin = useCallback(
  async (data) => {
    console.log('data', data)
    try {
      const UserName = data.userName.toLowerCase();
      if (data && UserName === CONFIG.MERCHANT_USERNAME && data.password === CONFIG.MERCHANT_PASSWORD) {
        dispatch(setLoginDetails(data));
        navigate("/dashboard-merchant")
      }
      else if (data && UserName === CONFIG.BANK_USERNAME && data.password === CONFIG.BANK_PASSWORD) {
        dispatch(setLoginDetails(data));
        navigate("/dashboard-bank")
      }
      else {
        NotificationService.showErrorMessage("Invalid Credentials");
      }
    } catch (error) {
      NotificationService.showErrorMessage("Invalid Credentials");
    }
  },
  []
);
  return (
    <>
      <div id="Auth">
        <div id="authWrapper" align="center">
        <div className="mb-3" align="center">
              <img
                src={BANK_LOGO}
                height={50}
                alt="Bank Logo"
                className="mb-1"
              />
            </div>

          <div className="auth-card-form" align="center">
            <div className="auth-form-align">
            <div className="login-title mt-1 mb-1">
                            <span>
                            Login to your account
                            </span>
                  </div>
              <Form layout="vertical" onFinish={postLogin} form={form}>
                <div>
                  <Form.Item
                    label={
                      <>
                        <div className="d-flex justify-content-between w-100">
                          <div>
                            <span>
                              Username
                            </span>
                          </div>
                        </div>
                      </>
                    }
                    name="userName"
                    style={{textAlign:"left"}}
                    rules={[
                      {
                        required: true,
                        message:"Username is required", 
                      },
                    ]}
                  >
                    <Input
                      maxLength={20}
                      size="large"
                      placeholder="Enter Username"
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    label={
                      <>
                        <div className="d-flex justify-content-between w-100">
                          <div>
                            <span>
                              Password
                            </span>
                          </div>
                        </div>
                      </>
                    }
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Password is required",
                      },
                    ]}
                    style={{textAlign:"left"}}
                  >
                    <Input.Password
                      maxLength={20}
                      size="large"
                      placeholder="Enter Password"
                      // {t("pages.login.enter_password", {
                      //   defaultValue: "Enter Password",
                      // })}
                      autoComplete="new-password"
                    />
                  </Form.Item>
                </div>
                  
                <div className="row">
                  <div className="btn-login">
                    <Button
                      block
                      size="large"
                      type="primary"
                      htmlType="submit"
                      className="login-button mt-3"
                    >
                      {/* {t("buttons.login_btn", {
                        defaultValue: "Login",
                      })} */} Login
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}





// import React from 'react'

// function Landing() {
//   return (
//     <div>Landing</div>
//   )
// }

// export default Landing