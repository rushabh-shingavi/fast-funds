
import React, { useState } from "react";
import  UploadSucess from "client/assets/images/UploadSucess.svg";
import EyeIcon from "client/assets/images/eyeicon-grey.svg";

export default function DocumentVerifyComponent() {
  const documentsList = [
    {
      document: "ID proof",
      fileSize: "10 MB",
    },
    {
      document: "Address proof",
      fileSize: "11 MB",
    },
    {
      document: "Invoice",
      fileSize: "2 MB",
    },
    {
      document: "Declaration",
      fileSize: "8 MB",
    },
  ];
  const [data, setData] = useState(documentsList);

  return (
    <>
      <div className="row col-8">
        {data.map((item, index) => (
          <React.Fragment key={index}>
              <div className="col-12 row loan-doccard">
                <div className="col-1 p-0">
                  <img className="" src={UploadSucess} alt="" width={40} />
                </div>
                <div className="col-6 row mt-2">
                  <span style={{ fontWeight: '600'}}>{item.document}</span>
                  <span style={{ fontSize: '12px', color: '#475467'}}>{item.fileSize}</span>
                </div>

                <div className="col-1">
                  <img
                    src={EyeIcon}
                    alt="EyeIcon"
                    width={40}
                  />
                </div>
                <div className="col-2 mx-2 mt-3">
                <p className="color-green" style={{ fontWeight: '600'}}>Approve</p>
                </div>
                <div className="col-2 mx-1 mt-3">
                <p className="color-red" style={{ fontWeight: '600'}}>Reject</p>
                </div>
              </div>
          
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
