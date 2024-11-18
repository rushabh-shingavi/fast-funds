// import React from 'react'

// export default function PersonalDetails() {
//   return (
//     <div>personal-details</div>
//   )
// }
import React from 'react';
import { Form, Input, Button, Select, Card } from 'antd';
import { useSelector } from 'react-redux';
import { loginDetailsSelector } from '../../store/selectors/auth.selector';
import { CONFIG } from '../../environment';
import { useNavigate } from 'react-router';

export default function PersonalDetails({ onStage }) {
    const navigate = useNavigate();
    const LoginDetails = useSelector(loginDetailsSelector);
  const UserName = LoginDetails.userName.toLowerCase();
  const mainDashboard = UserName === CONFIG.USERNAME1 ? true : false;
    const onFinish = (values) => {
        console.log('Form values:', values);
        onStage(2)
    };

    return (
        <div className="row d-flex p-5">
            <div className="col-12">

                <span style={{ fontWeight: '500', fontSize: '20px' }}>Personal Details</span>
                <p>Update your personal details here.</p>

                <Form
                    name="personal-details"
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{ countryCode: '+91' }}
                >
                    <div className="row col-12 mt-2">
                        <div className="col-md-2 col-sm-12">
                            <span>Mobile Number</span>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <Form.Item label="" required>

                                <Input.Group compact>
                                    <Form.Item
                                        name="countryCode"
                                        noStyle
                                        rules={[{ required: true, message: 'Please select country code!' }]}
                                    >
                                        <Select style={{ width: '20%' }}>
                                            <Select.Option value="+91">+91</Select.Option>
                                            {/* <Select.Option value="+91">+91</Select.Option> */}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        name="mobileNumber"
                                        noStyle
                                        rules={[
                                            { required: true, message: 'Please enter your mobile number!' },

                                        ]}
                                    >
                                        <Input style={{ width: '70%' }} placeholder="Mobile Number" />
                                    </Form.Item>
                                </Input.Group>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="row col-12 mt-2">
                        <div className='col-2'>
                            <h5>Validation</h5>
                            <span>Checking you are a bank customer or not?</span>
                        </div>
                        <Card className='col-6'>
                            <div className='col-4'>
                                <div className='d-flex justify-content-between'>
                                    <label>Name:</label>
                                    <span>-</span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <label>DOB:</label>
                                    <span>-</span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <label>Mobile number:</label>
                                    <span>-</span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <label>Address:</label>
                                    <span>-</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="row col-12 mt-2">
                        <div className='col-2'>
                            <h5>OTP Verification</h5>
                            <span>Please enter OTP received to your mobile number</span>
                        </div>
                        <div className='col-6'>
                            <Form.Item label="">
                                <Form.Item
                                    name="otp"
                                    noStyle
                                    rules={[
                                        { required: true, message: 'Please enter the OTP received on your mobile!' }
                                    ]}
                                >
                                    <Input tyle={{ width: '50%' }} placeholder="Enter OTP" />
                                </Form.Item>
                            </Form.Item>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <div className="btn-verify mx-3">
                            <Button
                                block
                                size="large"
                                type="primary"
                                className="login-button mt-3"
                                style={{width:'150px'}}
                                onClick={() => mainDashboard ? navigate("/dashboard-merchant") : navigate("/dashboard-bank")}
                            >
                                Back
                            </Button>
                        </div>

                        <div className="btn-login mx-3">
                            <Button
                                block
                                size="large"
                                type="primary"
                                htmlType="submit"
                                className="login-button mt-3"
                                style={{width:'150px'}}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};