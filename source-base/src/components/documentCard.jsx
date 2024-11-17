
import React, { useState } from "react";
import DocSelect from "client/assets/images/DocSelect.svg";
import DocSuccess from "client/assets/images/DocSuccess.svg";
import { ReactComponent as UploadSelect } from "client/assets/images/UploadSelect.svg";
import { ReactComponent as UploadSucess } from "client/assets/images/UploadSucess.svg";
import UncheckedDoc from "client/assets/images/UncheckedDoc.svg";
import CheckedDoc from "client/assets/images/CheckedDoc.svg";
import { Button, Upload } from "antd";

export default function DocumentCardComponent({ dataSource }) {
  const [data, setData] = useState(dataSource);

  const handleUpload = (item) => {
    const updatedData = data.map((doc) => 
      doc === item ? { ...doc, isDone: true } : doc
    );
    setData(updatedData);
  };
  // const handleUpload = (info, item) => {
  //   try {
  //     console.log('info', info)
  //   console.log('item', item)
  //   if (info.file.status === 'done' || info.file.status === 'success') {
  //     const updatedData = data.map((doc) => 
  //       doc === item ? { ...doc, isDone: true, fileName: info.file.name } : doc
  //     );
  //     setData(updatedData);
  //     onUploadUpdate(updatedData);
  //   }
  //   } catch (error) {
  //     console.log('error',error)
  //   }
    
  // };
  return (
    <>
      <div className="row ">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {!item.isDone ? (
              <div className="col-12 row doccard" hidden={item.isSelected}>
                <div className="col-1 p-3">
                  <img className="" src={DocSelect} alt="" width={40}/>
                </div>
                <div className="col-6">
                  <h4
                    className="d-flex align-items-center justify-content-between text-size"
                    style={{ width: "100%" }}
                  >
                    {item.text}
                  </h4>
                  <p className="description">{item.description}</p>
                </div>

                <div className="col-3">
                  <div className="btn-verify">
                    <Upload
                      onChange={() => handleUpload(item)}
                      showUploadList={false}
                      accept=".jpg,.png,.pdf"
                    >
                      <Button
                        block
                        size="large"
                        type="primary"
                        className="login-button"
                        style={{ color: '#D4D4D4', border: "1px solid #D0D5DD" }}
                      >
                        Upload from Device <UploadSelect style={{ marginLeft: 20, marginBottom: 2 }} />
                      </Button>
                    </Upload>
                  </div>
                </div>

                <div className="col-2">
                  <img
                    src={UncheckedDoc}
                    alt="UncheckedDoc"
                    className=""
                  />
                </div>
              </div>
            ) : (
              <div className="col-12 row selected-doccard" hidden={item.isSelected}>
                <div className="col-1 p-3">
                  <img className="" src={DocSuccess} alt="" width={45}/>
                </div>
                <div className="col-6">
                  <h4
                    className="d-flex align-items-center justify-content-between  text-size color-green"
                    style={{ width: "100%" }}
                  >
                    {item.text}
                  </h4>
                  <p className="description color-green">{item.description}</p>
                </div>
                <div className="col-3">
                  <div className="btn-verify">
                    <Button
                      block
                      size="large"
                      type="primary"
                      className="login-button"
                      style={{ color: '#344054', border: "1px solid #D0D5DD" }}
                    >
                      <UploadSucess style={{ marginRight: 10, marginBottom: 2 }} /> 
                     {item.fileName}
                    </Button>
                  </div>
                </div>
                <div className="col-2 p-3">
                    <Upload
                      onChange={() => handleUpload(item)}
                      showUploadList={false}
                      accept=".jpg,.png,.pdf"
                    >
                  <img src={CheckedDoc} alt="CheckedDoc" />
                    </Upload>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
