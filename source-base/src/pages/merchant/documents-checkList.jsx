import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { setStepCount } from '../../store/actions/auth.action';
import DocumentCardComponent from '../../components/documentCard';

const documentsList = [
  {
    text: "Identity proof",
    description: "Mandatory requirement",
    isSelected: false,
    isDone: false,
    fileName:"DOC_63283823"
  },
  {
    text: "Address proof",
    description: "Mandatory requirement",
    isSelected: false,
    isDone: false,
    fileName:"DOC_63283823"

  }, {
    text: "Invoice",
    description: "Mandatory requirement",
    isSelected: false,
    isDone: false,
    fileName:"DOC_63283823"

  }, {
    text: "Declaration",
    description: "Mandatory requirement",
    isSelected: false,
    isDone: false,
    fileName:"DOC_63283823"
  },
];
export default function DocumentsCheckList({ onStage }) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStepCount(4));
  }, []);
  const [docList, setDocList] = useState(documentsList);


 
  return (
    <div className="row d-flex p-5">
      <div className="col-12">

        <span style={{ fontWeight: '500', fontSize: '20px' }}>Document Details</span>
        <p>Update your documents details here.</p>

        <div className="mt-2 col-12">
         <DocumentCardComponent dataSource ={docList} />
        </div>
        <div className='d-flex justify-content-end'>
          <div className="btn-verify mx-3">
            <Button
              block
              size="large"
              type="primary"
              className="login-button mt-3"
              onClick={() => onStage(4)}
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
              onClick={() => onStage(6)}
              style={{width:'150px'}}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};