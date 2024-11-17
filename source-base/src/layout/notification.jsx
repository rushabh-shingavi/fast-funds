
import { Popover } from 'antd';
import React from 'react';

export default function Notification() {
  const data = [
    {
      id: 1,
      text1: "Loan Application",
      text2: "Item Description",
      text3: "LA67567768788998",
      text4: "TV",
      text5: "Under review",
    },
    {
      id: 2,
      text1: "Loan Application",
      text2: "Item Description",
      text3: "LA67567768788998",
      text4: "TV",
      text5: "Under review",
    },
    {
      id: 3,
      text1: "Loan Application",
      text2: "Item Description",
      text3: "LA67567768788998",
      text4: "TV",
      text5: "Under review",
    },
    {
      id: 4,
      text1: "Loan Application",
      text2: "Item Description",
      text3: "LA67567768788998",
      text4: "TV",
      text5: "Under review",
    },
    {
      id: 5,
      text1: "Loan Application",
      text2: "Item Description",
      text3: "LA67567768788998",
      text4: "TV",
      text5: "Under review",
    },
    {
      id: 6,
      text1: "Loan Application",
      text2: "Item Description",
      text3: "LA67567768788998",
      text4: "TV",
      text5: "Under review",
    },
  ];

  return (
    <>
      <div className="row">
        {data.map((item, index) => {
          const content = (
            <div className="row notify-selected-card">
              <div className="d-flex justify-content-between align-items-center">
                <span className='m-1'>{item.text1}</span>
                <span className='m-1'>{item.text2}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span className='m-1'>{item.text3}</span>
                <span style={{ marginRight: '6.5rem' }}>{item.text4}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span className='m-1'>{item.text1}</span>
                <span className='m-1'>{item.text2}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span className='m-1'>{item.text3}</span>
                <span style={{ marginRight: '6.5rem' }}>{item.text4}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span className='m-1'>{item.text1}</span>
                <span className='m-1'>{item.text2}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span className='m-1'>{item.text3}</span>
                <span style={{ marginRight: '6.5rem' }}>{item.text4}</span>

              </div>
              <div className="col-12 d-flex justify-content-between align-items-center">
                <p className='btn-notify m-2'>{item.text5}</p>
              </div>
            </div>
          );

          return (
            <Popover
              key={index}
              className='custom-popover-content'
              placement="left"
              content={content}
              trigger="click"
              overlayStyle={{ maxWidth: '30%' }}
            >
              <div className="notify-card">
                <div className="col-12 d-flex justify-content-between align-items-center">
                  <span className='m-2'>{item.text1}</span>
                  <span className='m-2'>{item.text2}</span>
                </div>
                <div className="col-12 d-flex justify-content-between align-items-center">
                  <span className='m-2'>{item.text3}</span>
                  <span style={{ marginRight: '6.8rem' }}>{item.text4}</span>
                </div>
                <div className="col-12 d-flex justify-content-between align-items-center">
                  <p className='btn-notify m-2'>{item.text5}</p>
                </div>
              </div>
            </Popover>
          );
        })}
      </div>
    </>
  );
}
