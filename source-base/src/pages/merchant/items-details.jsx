import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, Table} from 'antd';
import { useDispatch } from 'react-redux';
import { setStepCount } from '../../store/actions/auth.action';
import ITEMS_LIST from '../../mocks/items-list';
import { ReactComponent as ZondiIcon } from "client/assets/images/zone-icon.svg";
import { ReactComponent as EditIcon } from "client/assets/images/edit.svg";
import { ReactComponent as DeleteIcon } from "client/assets/images/delete.svg";

export default function ItemsDetails({ onStage }) {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStepCount(2));
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
    const id = ITEMS_LIST?.length;
    ITEMS_LIST.push({
      // slNo: "03",
      slNo: `0${id + 1}`,
      itemDescription: values?.itemDescription || '',
      skuNumber: values?.skuNumber || '',
      mrp: values?.mrp || '',
      discount: `${values?.discount} %`  || '',
    });
    setVisible(false);
  };
  const columns = [
    {
      title: 'Sl No',
      dataIndex: 'slNo',
      key: 'slNo',
    },
    {
      title: 'Item description',
      dataIndex: 'itemDescription',
      key: 'itemDescription',
    },
    {
      title: 'SKU number',
      dataIndex: 'skuNumber',
      key: 'skuNumber',
    },
    {
      title: 'MRP (in NPR)',
      dataIndex: 'mrp',
      key: 'mrp',
    },
    {
      title: 'Discount (in %)',
      dataIndex: 'discount',
      key: 'discount',
    },
  ];
  return (
    <div className="row d-flex p-5">
      <div className="col-12">
      <div className="col-12 d-flex">
      <div className="col-6">
        <span style={{ fontWeight: '500', fontSize: '20px' }}>Item Details</span>
        <p>Update your item details here.</p>
        </div>
        <div className='col-6 d-flex justify-content-end'>
        <div className="btn-verify mx-3">
              <Button
                block
                size="large"
                type="primary"
                htmlType="submit"
                className="login-button mt-3"
                style={{ color: '#344054', border: "1px solid #D0D5DD", width:'150px'}}
              >
               <EditIcon style={{ marginRight: 8, marginBottom: 2 }} />   Edit
               </Button>
            </div>

          <div className="btn-verify mx-3">
              <Button
                block
                size="large"
                type="primary"
                htmlType="submit"
                className="login-button mt-3"
                style={{ color: '#344054', border: "1px solid #D0D5DD", width:'150px'}}
              >
               <DeleteIcon style={{ marginRight: 8, marginBottom: 2, }} />   Delete
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
               <ZondiIcon style={{ marginRight: 8, marginBottom: 2 }} />   Add
            </Button>
          </div>
        </div>
        </div>
        <div className="table-body" style={{ minHeight: 300, padding: "10px 20px" }}>
          <Table
          className="table  table-bordered custom-tbl-style"
            columns={columns}
            dataSource={ITEMS_LIST}
            pagination={false}
            rowKey="slNo"
            bordered
          />
        </div>
        <div className='d-flex justify-content-end'>
          <div className="btn-verify mx-3">
            <Button
              block
              size="large"
              type="primary"
              className="login-button mt-3"
              onClick={() => onStage(2)}
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
              onClick={() => onStage(4)}
              style={{width:'150px'}}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <Modal
        title={selectedItem ? 'Edit Item' : 'Add Item Details'}
        visible={visible}
        onCancel={handleCancel}
        width={400}
        footer={[
          <div className='d-flex justify-content-center'>
          <div className="btn-verify mx-3 w-100">
            <Button
              block
              size="large"
              type="primary"
              className="login-button mt-3"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>

          <div className="btn-login mx-3 w-100">
            <Button
              block
              size="large"
              type="primary"
              className="login-button mt-3"
              onClick={() => form.submit()}
            >
              Add
            </Button>
          </div>
        </div>
        ]}
      >
                <p>Update your item details here.</p>

        <Form form={form} onFinish={handleSubmit} layout="vertical">
        <div>
                  <Form.Item
                    label={<span>
                            Item Description
                            </span>
                    }
                    name="itemDescription"
                    rules={[
                      {
                        required: true,
                        message:"Item Description is required", 
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Item Description"
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    label={<span>
                            SKU Number
                            </span>
                    }
                    name="skuNumber"
                    rules={[
                      {
                        required: true,
                        message:"SKU Number is required", 
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter SKU Number"
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    label={<span>
                            MRP (NPR)
                            </span>
                    }
                    name="mrp"
                    rules={[
                      {
                        required: true,
                        message:"MRP (NPR) is required", 
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      size="large"
                      placeholder="Enter MRP (NPR)"
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    label={<span>
                            Discount (in %)
                            </span>
                    }
                    name="discount"
                    rules={[
                      {
                        required: true,
                        message:"Discount (in %) is required", 
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      size="large"
                      placeholder="Enter Discount (in %)"
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    label={<span>
                            Net Value
                            </span>
                    }
                    name="netValue"
                    rules={[
                      {
                        required: true,
                        message:" Net Value is required", 
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      size="large"
                      placeholder="Enter Net Value"
                    />
                  </Form.Item>
                </div>
        </Form>
      </Modal>
    </div>
  );
};