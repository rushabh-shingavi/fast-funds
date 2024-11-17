import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Mar 2024',
    children: [
      {
        title: 'Amount (NPR)',
        dataIndex: 'marAmount',
        key: 'marAmount',
      },
      {
        title: 'Txn Count',
        dataIndex: 'marTxnCount',
        key: 'marTxnCount',
      },
    ],
  },
  {
    title: 'Apr 2024',
    children: [
      {
        title: 'Amount (NPR)',
        dataIndex: 'aprAmount',
        key: 'aprAmount',
      },
      {
        title: 'Txn Count',
        dataIndex: 'aprTxnCount',
        key: 'aprTxnCount',
      },
    ],
  },
  {
    title: 'May 2024',
    children: [
      {
        title: 'Amount (NPR)',
        dataIndex: 'mayAmount',
        key: 'mayAmount',
      },
      {
        title: 'Txn Count',
        dataIndex: 'mayTxnCount',
        key: 'mayTxnCount',
      },
    ],
  },
  {
    title: 'Jun 2024',
    children: [
      {
        title: 'Amount (NPR)',
        dataIndex: 'junAmount',
        key: 'junAmount',
      },
      {
        title: 'Txn Count',
        dataIndex: 'junTxnCount',
        key: 'junTxnCount',
      },
    ],
  },
];

const data = [
  {
    key: '1',
    description: 'Opening Balance',
    marAmount: 54000,
    marTxnCount: 1,
    aprAmount: 54000,
    aprTxnCount: 1,
    mayAmount: 54000,
    mayTxnCount: 1,
    junAmount: 54000,
    junTxnCount: 1,
  },
  {
    key: '2',
    description: 'Deposits',
    marAmount: 54000,
    marTxnCount: 1,
    aprAmount: 54000,
    aprTxnCount: 1,
    mayAmount: 54000,
    mayTxnCount: 1,
    junAmount: 54000,
    junTxnCount: 1,
  },
  {
    key: '3',
    description: 'Salary',
    marAmount: 54000,
    marTxnCount: 1,
    aprAmount: 54000,
    aprTxnCount: 1,
    mayAmount: 54000,
    mayTxnCount: 1,
    junAmount: 54000,
    junTxnCount: 1,
  },
  {
    key: '4',
    description: 'Interest',
    marAmount: 54000,
    marTxnCount: 1,
    aprAmount: 54000,
    aprTxnCount: 1,
    mayAmount: 54000,
    mayTxnCount: 1,
    junAmount: 54000,
    junTxnCount: 1,
  },
  {
    key: '5',
    description: 'I/W Funs Transfer',
    marAmount: 54000,
    marTxnCount: 1,
    aprAmount: 54000,
    aprTxnCount: 1,
    mayAmount: 54000,
    mayTxnCount: 1,
    junAmount: 54000,
    junTxnCount: 1,
  },
  {
    key: '6',
    description: 'O/W Funs Transfer Return',
    marAmount: 54000,
    marTxnCount: 1,
    aprAmount: 54000,
    aprTxnCount: 1,
    mayAmount: 54000,
    mayTxnCount: 1,
    junAmount: 54000,
    junTxnCount: 1,
  },
];

export default function MonthlySummaryTable () {
  return <Table columns={columns} dataSource={data} pagination={false} />;
};
