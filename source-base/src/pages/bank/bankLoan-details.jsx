import React, { useState, useEffect } from 'react';
import { Button, Card, Form, Input, Modal,} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setStepCount } from '../../store/actions/auth.action';
import { ReactComponent as EyeIconFill } from "client/assets/images/eyeicon-fill.svg";
import Avatar1 from "client/assets/images/Avatar1.png";
import DocumentVerifyComponent from '../../components/documentVerify';
import IconPark from "client/assets/images/icon-park.svg";
import { ReactComponent as Attachment } from "client/assets/images/attachment.svg";
import { useNavigate } from 'react-router';
import { loginDetailsSelector } from '../../store/selectors/auth.selector';
import { CONFIG } from '../../environment';

export default function BankLoanDetails({ onStage }) {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LoginDetails = useSelector(loginDetailsSelector);
  const UserName = LoginDetails.userName.toLowerCase();
  const mainDashboard = UserName === CONFIG.MERCHANT_USERNAME ? true : false;
  useEffect(() => {
    dispatch(setStepCount(0));
  }, []);

  const showModal = (item) => {
    form.resetFields();
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const handleSubmit = (values) => {
    console.log('Form values:', values);
    setVisible(false);
    dispatch(setStepCount(1));
    onStage(2)
  };


  return (
    <div className="row d-flex p-5">
      <div className="col-12">
        <div className='d-flex align-items-center justify-content-between w-100'>
          <div>
            <span style={{ fontWeight: '500', fontSize: '20px' }}>Loan Details</span>
            <p>Update your loan details here.</p>
          </div>
          <div className='d-flex align-items-center justify-content-between mx-5'>
            <div className="btn-login mx-3">
              <Button
                block
                size="large"
                type="primary"
                htmlType="submit"
                className="login-button mt-3"
                onClick={() => navigate("/view-analytics")}
              >
                <EyeIconFill style={{ marginRight: 8, marginBottom: 2 }} />
                View Analytics
              </Button>
            </div>
          </div>
        </div>
        
          <div>
            <span style={{fontSize: '14px' }}>Personal details</span>
            <p style={{fontSize: '14px' }}>This will be displayed on your profile.</p>
          </div>
        
          <div className="row col-12 mt-2">
                        <div className='col-3'>
                        <img
                            src={Avatar1}
                            alt="Avatar1"
                            className="mx-2"
                          />
                        </div>
                        <div className='col-8 m-2'>
                <Card
                    bordered={true}
                >
                    <div className="row">
                        <div className="col-3">
                            <span className="label-span">Name</span>
                        </div>
                        <div className="col-8">
                            <span className="value-span">: Sarvesh Gupta</span>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-3">
                            <span className="label-span">DOB</span>
                        </div>
                        <div className="col-8">
                            <span className="value-span">: 11-11-1991</span>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-3">
                            <span className="label-span">Mobile number</span>
                        </div>
                        <div className="col-8">
                            <span className="value-span">: 99537388343</span>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-3">
                            <span className="label-span">Address</span>
                        </div>
                        <div className="col-8">
                        <span className="value-span">: Lorem ipsum dolor sit amet consectetur. Purus sit etiam faucibus sit. Dolor amet maecenas ultricies massa pulvinar. Quis pellentesque sagittis tempus fermentum pellentesque. </span>
                        </div>
                    </div>
                </Card>
            </div>
                   
        </div>
        <div>
            <span style={{fontSize: '14px' }}>Personal details</span>
            <p style={{fontSize: '14px' }}>This will be displayed on your profile.</p>
          </div>
          <DocumentVerifyComponent/>
          <div className=" col-6 loan-bottom-links">
              <p>
              Share Agreement
                <img src={IconPark} height={35}  style={{ marginLeft: 8, marginBottom: 2 }} alt="IconPark" />
              </p>
              <p>
              Call requirement <img src={IconPark} height={35}  style={{ marginLeft: 8, marginBottom: 2 }} alt="IconPark" />
              </p>
            </div>
     
        <div className='d-flex justify-content-end'>
          <div className="btn-verify mx-3">
            <Button
              block
              size="large"
              type="primary"
              className="login-button mt-3"
              onClick={() => mainDashboard ? navigate("/dashboard-merchant") : navigate("/dashboard-bank")}
              style={{width:'150px'}}
            >
              Back
            </Button>
          </div>

          <div className="btn-login mx-3">
            <Button
              block
              size="large"
              type="primary"
              className="login-button mt-3"
              onClick={() => showModal()}
              style={{width:'150px'}}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <Modal
        title={[ <div className='d-flex justify-content-between'>
 <span style={{ fontWeight: '500', fontSize: '22px' }}>Remarks</span>
          <div className="btn-verify mx-3">
            <Button
              block
              size="large"
              type="primary"
              className="login-button"
              style={{width:'150px'}}s
            >
         <Attachment style={{ marginRight: 8, marginBottom: 2 }} />  Attach File
            </Button>
          </div>
        </div>]}
        visible={visible}
        closable={false}
        onCancel={handleCancel}
        width={600}
        footer={[
          <div className='d-flex justify-content-end'>
          <div className="btn-verify mx-3">
            <Button
              block
              size="large"
              type="primary"
              className="login-button mt-3"
              onClick={handleCancel}
              style={{width:'150px'}}
            >
              Cancel
            </Button>
          </div>

          <div className="btn-login mx-3">
            <Button
              block
              size="large"
              type="primary"
              className="login-button mt-3"
              onClick={() => form.submit()}
              style={{width:'150px'}}
            >
              Send
            </Button>
          </div>
        </div>
        ]}
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
        <div>
                  <Form.Item
                    name="remarks"
                    rules={[
                      {
                        required: true,
                        message:"Remarks is required", 
                      },
                    ]}
                  >
                    <Input.TextArea
                      rows={3}
                      size="large"
                    />
                  </Form.Item>
                </div>
            
        </Form>
      </Modal>
    </div>
  );
};