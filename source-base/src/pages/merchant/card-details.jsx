import React, { useState, useEffect } from 'react';
import { Button, Card, Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { setStepCount } from '../../store/actions/auth.action';
import VisaIcon from "client/assets/images/visa-icon.svg";

export default function CardDetails({ onStage }) {
  const [selectedCard, setSelectedCard] = useState('1234');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStepCount(1));
  }, []);

  const cards = [
    {
      id: '1234',
      type: 'Visa',
      expiry: '11/2024',
      totalLimit: '5,00,000 NPR',
      availableLimit: '3,00,000 NPR',
    },
    {
      id: '5678',
      type: 'Visa',
      expiry: '10/2024',
      totalLimit: '5,00,000 NPR',
      availableLimit: '3,00,000 NPR',
    },
    {
      id: '9101',
      type: 'Visa',
      expiry: '10/2024',
      totalLimit: '5,00,000 NPR',
      availableLimit: '3,00,000 NPR',
    },
  ];

  const handleCardChange = (e) => {
    setSelectedCard(e.target.value);
  };
  // const onFinish = (values) => {
  //   console.log('Form values:', values);
  //   onStage(3)
  // };

  return (
    <div className="row d-flex p-5 card-details">
      <div className="col-12">

        <span style={{ fontWeight: '500', fontSize: '20px' }}>Card Details</span>
        <p>Update your card details here.</p>

        <div className="mt-5">
          <h6 className="mb-3">Choose your Card</h6>
          <Radio.Group onChange={handleCardChange} value={selectedCard} className="w-100">
            <div className='col-12 d-flex' >
              {cards.map((card) => (
                <div key={card.id} className='col-4 mx-2'>
                  <Card
                    className={`card-selection ${selectedCard === card.id ? 'selected-card' : ''
                      }`}
                    hoverable
                    bodyStyle={{ padding: '10px', position: 'relative' }}
                  >
                    <Radio value={card.id} className="d-flex align-items-center">
                      <div className="col-12 d-flex">
                        <div className="col-2 mx-2">
                          <img
                            src={VisaIcon}
                            alt="Visa"
                            className="visa-logo"
                            width="50"
                          />
                        </div>
                        <div className="col-10 mx-2">
                          <p className="mb-1">Visa ending in {card.id}</p>
                          <p className="text-muted">Expiry {card.expiry}</p>
                          <div className="mt-2">
                            <p className="mb-1 color-green">Total Card limit {card.totalLimit}</p>
                            <p className="color-green">Available limit {card.availableLimit}</p>
                          </div>
                        </div>
                      </div>
                    </Radio>
                  </Card>
                </div>
              ))}
            </div>
          </Radio.Group>
        </div>
        <div className='d-flex justify-content-end'>
          <div className="btn-verify mx-3">
            <Button
              block
              size="large"
              type="primary"
              className="login-button mt-3"
              onClick={() => onStage(1)}
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
              onClick={() => onStage(3)}
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