import React from 'react';
import { Table } from 'antd';

export default function MonthwiseDetailsTable() {
  const tableData = [
    {
      key: '1',
      description: 'Credit Txns',
      values: ['NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84'],
      total: 'NPR 10,11,232.84',
    },
    {
      key: '2',
      description: 'O/W Cheque Bounces',
      values: ['NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84'],
      total: 'NPR 10,11,232.84',
    },
    {
      key: '3',
      description: 'O/W Cheque Bounces',
      values: ['NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84'],
      total: 'NPR 10,11,232.84',
    },
    {
      key: '4',
      description: 'O/W Cheque Bounces',
      values: ['NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84'],
      total: 'NPR 10,11,232.84',
    },
    {
      key: '5',
      description: 'O/W Cheque Bounces',
      values: ['NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84', 'NPR 10,11,232.84'],
      total: 'NPR 10,11,232.84',
    },
  ];

  const columns = [
    {
      title: '',
      dataIndex: 'checkbox',
      render: (_, record) => (
        <input
          className='custom-checkbox'
          type="checkbox"
          checked={record.isSelected} 
        />
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Mar 2024',
      dataIndex: 'mar2024',
      key: 'mar2024',
      render: (_, record) => record.values[0],
    },
    {
      title: 'Apr 2024',
      dataIndex: 'apr2024',
      key: 'apr2024',
      render: (_, record) => record.values[1],
    },
    {
      title: 'May 2024',
      dataIndex: 'may2024',
      key: 'may2024',
      render: (_, record) => record.values[2],
    },
    {
      title: 'Jun 2024',
      dataIndex: 'jun2024',
      key: 'jun2024',
      render: (_, record) => record.values[3],
    },
    {
      title: 'Jul 2024',
      dataIndex: 'jul2024',
      key: 'jul2024',
      render: (_, record) => record.values[4],
    },
    {
      title: 'Aug 2024',
      dataIndex: 'aug2024',
      key: 'aug2024',
      render: (_, record) => record.values[5],
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
  ];

  return (
    <div style={{ minHeight: 300, padding: "10px 20px" }}>
      <Table 
        dataSource={tableData} 
        columns={columns} 
        pagination={false}
        rowKey="key"
        bordered
      />
    </div>
  );
};
