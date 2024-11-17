import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStepCount } from '../../store/actions/auth.action';
import SucessIcon from "client/assets/images/SucessIcon.svg";
import { useNavigate } from 'react-router';
import { loginDetailsSelector } from '../../store/selectors/auth.selector';
import { CONFIG } from '../../environment';
import { Button } from 'antd';


export default function SucessMessageMerchant() {
  const navigate = useNavigate();
  const LoginDetails = useSelector(loginDetailsSelector);
  const UserName = LoginDetails.userName.toLowerCase();
  const mainDashboard = UserName === CONFIG.MERCHANT_USERNAME ? true : false;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStepCount(5));
  }, []);



  return (
    <>
    <div className='d-flex align-items-center justify-content-end mx-5'>
            <div className="btn-login mx-3">
              <Button
                block
                size="large"
                type="primary"
                htmlType="submit"
                className="login-button mt-3"
                onClick={() => mainDashboard ? navigate("/dashboard-merchant") : navigate("/dashboard-bank")}
              >
                Back To Dashboard
              </Button>
            </div>
          </div>
    <div className="sucess-style col-10">
      <div>
        <img src={SucessIcon} alt="" width={100} />
      </div>
      <div>
        <p className='text-center' style={{ fontSize: '20px' }}>Your Loan Application with <strong>Ref no 375634543545</strong>  has been <br />submitted successfully</p>
      </div>
    </div>
    </>
  );
};