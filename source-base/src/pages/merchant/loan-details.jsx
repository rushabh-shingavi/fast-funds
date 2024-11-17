import React, { useState, useEffect, useCallback } from 'react';
import { Button, Card, Form, Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { setStepCount } from '../../store/actions/auth.action';
import VisaIcon from "client/assets/images/visa-icon.svg";
import CustomNumberInput from '../../components/customNumberInput';
import CustomSlider from '../../components/slider';
import { amountFormat } from '../../services/common.service';

export default function LoanDetails({ onStage }) {
  const [form] = Form.useForm();

  const [selectedCard, setSelectedCard] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStepCount(3));
  }, []);



  const handleCardChange = (e) => {
    setSelectedCard(e.target.value);
  };
  const [details, setDetails] = useState({
    loanAmount: 100000,
    loanTenure: 15,
  });
  const handleSliderChange = useCallback(
    (value, name) => {
      try {
        setDetails({ ...details, [name]: value });
        form.setFieldsValue({
          [name]: value,
        });
      } catch (error) { }
    },
    [details]
  );

  return (
    <div className="row d-flex p-5 card-slider">
      <div className="col-12">

        <span style={{ fontWeight: '500', fontSize: '20px' }}>Loan Details</span>
        <p>Update your loan details here.</p>

        <div className="mt-3">
          <Radio.Group onChange={handleCardChange} value={selectedCard} className='col-12 d-flex'>
            <div className='col-3'>
              <span style={{ fontWeight: '500', fontSize: '16px' }}>Payment type</span>
            </div>
            <Radio value={1}>Full amount</Radio>

            <Radio value={2}>Partial amount</Radio>
          </Radio.Group>
        </div>

        <Form layout="vertical" form={form}>
          <div className=" mt-2 col-12 ">
            <div className="row">
              <div
                className="col-12 col-sm-6 col-md-7 col-lg-5"
                style={{ padding: "10px" }}
              >

                Loan Amount

              </div>
              <div className="col-12 col-sm-6 col-md-5 col-lg-7 mb-2">
                <CustomNumberInput
                  name="loanAmount"
                  minLimit={1000}
                  maxLimit={100000000}
                  prefix={"NPR"}
                  onChange={(value) => handleSliderChange(value, "loanAmount")}
                />
              </div>
            </div>
            <CustomSlider
              min={1000}
              max={100000000}
              disabled={false}
              value={details.loanAmount}
              tipFormatter={(value) => amountFormat(value, "NPR")}
              onChange={(value) => handleSliderChange(value, "loanAmount")}
              className="mt-0"
              formatValues={true}
              currency={"NPR"}
            />
          </div>
          <div className="col-12">
            <div className="row">
              <div
                className="col-12 col-sm-6 col-md-7 col-lg-7"
                style={{ padding: "10px" }}
              > Tenure
              </div>
              <div className="col-12 col-sm-6 col-md-5 col-lg-5 mb-2">
                <CustomNumberInput
                  name="loanTenure"
                  minLimit={10}
                  maxLimit={50}
                  prefix="Months"
                  onChange={(value) => handleSliderChange(value, "loanTenure")}
                />
              </div>
            </div>
            <CustomSlider
              min={10}
              max={50}
              disabled={false}
              value={details.loanTenure}
              tipFormatter={(value) => {
                return `${value} Months`;
              }}
              onChange={(value) => handleSliderChange(value, "loanTenure")}
              className="mt-0"
              type="Months"
            />
          </div>


        </Form>
        <Card className='col-8 mt-2'>

          <div className='d-flex'>
            <div className=' col-6 d-flex'>
              <label className='mx-2'>EMI:</label>
              <span className='mx-2'>2000 NPR</span>

            </div>

            <div className=' col-6 d-flex'>
              <label className='mx-2'>Total Amount Payable:</label>
              <span className='mx-2'>60,000 NPR</span>

            </div>
          </div>
        </Card>
        <div className='d-flex justify-content-end'>
          <div className="btn-verify mx-3">
            <Button
              block
              size="large"
              type="primary"
              className="login-button mt-3"
              onClick={() => onStage(3)}
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
              onClick={() => onStage(5)}
              style={{width:'150px'}}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};