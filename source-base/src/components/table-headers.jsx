import React from "react";
import { Tag} from "antd";

export const LOAN_HEADERS = [
    {
      title: 'Sl No',
      dataIndex: 'slNo',
      key: 'slNo',
    },
    {
      title: 'Invoice No',
      dataIndex: 'invoiceNo',
      key: 'invoiceNo',
    },
    {
      title: 'Loan Application No',
      dataIndex: 'loanApplicationNo',
      key: 'loanApplicationNo',
    },
    {
      title: 'Item Description',
      dataIndex: 'itemDescription',
      key: 'itemDescription',
    },
    {
      title: 'Invoice Value (in NPR)',
      dataIndex: 'invoiceValue',
      key: 'invoiceValue',
    },
    {
      title: 'Loan Value (in NPR)',
      dataIndex: 'loanValue',
      key: 'loanValue',
    },
    {
      title: 'Loan Status',
      dataIndex: 'loanStatus',
      key: 'loanStatus',
      render: (status) => {
        let color = status === 'Approved' ? 'green' : status === 'Rejected' ? 'volcano' : 'gold';
        return (
          <Tag color={color}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: 'Amount Received',
      dataIndex: 'amountReceived',
      key: 'amountReceived',
    }
  ];
