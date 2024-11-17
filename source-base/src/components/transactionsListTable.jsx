import React, { useState } from 'react';
import { Button, Table, Pagination } from 'antd';
const dataSource = [
  {
    key: '1',
    txn_date: '01/05/2024',
    particulars: 'SentIMPS406121593433Madrasa Ar/SBINX3102/DONATION',
    cheque_refnbr: 'LA67567768788998',
    counterparty: 'Cred rent',
    debit_npr: '5,00,000',
    credit_npr: '5,00,000',
    computed_balance_npr: '5,00,000',
    category: 'Rent',
  },
  {
    key: '2',
    txn_date: '01/05/2024',
    particulars: 'SentIMPS406121593433Madrasa Ar/SBINX3102/DONATION',
    cheque_refnbr: 'LA67567768788998',
    counterparty: 'Cred rent',
    debit_npr: '5,00,000',
    credit_npr: '5,00,000',
    computed_balance_npr: '5,00,000',
    category: 'Food',
  },{
    key: '3',
    txn_date: '01/05/2024',
    particulars: 'SentIMPS406121593433Madrasa Ar/SBINX3102/DONATION',
    cheque_refnbr: 'LA67567768788998',
    counterparty: 'Cred rent',
    debit_npr: '5,00,000',
    credit_npr: '5,00,000',
    computed_balance_npr: '5,00,000',
    category: 'Rent',
  },{
    key: '4',
    txn_date: '01/05/2024',
    particulars: 'SentIMPS406121593433Madrasa Ar/SBINX3102/DONATION',
    cheque_refnbr: 'LA67567768788998',
    counterparty: 'Cred rent',
    debit_npr: '5,00,000',
    credit_npr: '5,00,000',
    computed_balance_npr: '5,00,000',
    category: 'Food',
  },{
    key: '5',
    txn_date: '01/05/2024',
    particulars: 'SentIMPS406121593433Madrasa Ar/SBINX3102/DONATION',
    cheque_refnbr: 'LA67567768788998',
    counterparty: 'Cred rent',
    debit_npr: '5,00,000',
    credit_npr: '5,00,000',
    computed_balance_npr: '5,00,000',
    category: 'Rent',
  },{
    key: '6',
    txn_date: '01/05/2024',
    particulars: 'SentIMPS406121593433Madrasa Ar/SBINX3102/DONATION',
    cheque_refnbr: 'LA67567768788998',
    counterparty: 'Cred rent',
    debit_npr: '5,00,000',
    credit_npr: '5,00,000',
    computed_balance_npr: '5,00,000',
    category: 'Food',
  },{
    key: '7',
    txn_date: '01/05/2024',
    particulars: 'SentIMPS406121593433Madrasa Ar/SBINX3102/DONATION',
    cheque_refnbr: 'LA67567768788998',
    counterparty: 'Cred rent',
    debit_npr: '5,00,000',
    credit_npr: '5,00,000',
    computed_balance_npr: '5,00,000',
    category: 'Rent',
  },{
    key: '8',
    txn_date: '01/05/2024',
    particulars: 'SentIMPS406121593433Madrasa Ar/SBINX3102/DONATION',
    cheque_refnbr: 'LA67567768788998',
    counterparty: 'Cred rent',
    debit_npr: '5,00,000',
    credit_npr: '5,00,000',
    computed_balance_npr: '5,00,000',
    category: 'Food',
  },{
    key: '9',
    txn_date: '01/05/2024',
    particulars: 'SentIMPS406121593433Madrasa Ar/SBINX3102/DONATION',
    cheque_refnbr: 'LA67567768788998',
    counterparty: 'Cred rent',
    debit_npr: '5,00,000',
    credit_npr: '5,00,000',
    computed_balance_npr: '5,00,000',
    category: 'Rent',
  },{
    key: '10',
    txn_date: '01/05/2024',
    particulars: 'SentIMPS406121593433Madrasa Ar/SBINX3102/DONATION',
    cheque_refnbr: 'LA67567768788998',
    counterparty: 'Cred rent',
    debit_npr: '5,00,000',
    credit_npr: '5,00,000',
    computed_balance_npr: '5,00,000',
    category: 'Food',
  },{
    key: '11',
    txn_date: '01/05/2024',
    particulars: 'SentIMPS406121593433Madrasa Ar/SBINX3102/DONATION',
    cheque_refnbr: 'LA67567768788998',
    counterparty: 'Cred rent',
    debit_npr: '5,00,000',
    credit_npr: '5,00,000',
    computed_balance_npr: '5,00,000',
    category: 'Rent',
  },{
    key: '12',
    txn_date: '01/05/2024',
    particulars: 'SentIMPS406121593433Madrasa Ar/SBINX3102/DONATION',
    cheque_refnbr: 'LA67567768788998',
    counterparty: 'Cred rent',
    debit_npr: '5,00,000',
    credit_npr: '5,00,000',
    computed_balance_npr: '5,00,000',
    category: 'Food',
  },
];

const columns = [
  {
    title: 'Txn date',
    dataIndex: 'txn_date',
    key: 'txn_date',
  },
  {
    title: 'Particulars',
    dataIndex: 'particulars',
    key: 'particulars',
  },
  {
    title: 'Cheque / Refnbr',
    dataIndex: 'cheque_refnbr',
    key: 'cheque_refnbr',
  },
  {
    title: 'Counterparty',
    dataIndex: 'counterparty',
    key: 'counterparty',
  },
  {
    title: 'Debit (NPR)',
    dataIndex: 'debit_npr',
    key: 'debit_npr',
  },
  {
    title: 'Credit (NPR)',
    dataIndex: 'credit_npr',
    key: 'credit_npr',
  },
  {
    title: 'Computed balance (NPR)',
    dataIndex: 'computed_balance_npr',
    key: 'computed_balance_npr',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
];
export default function TransactionsListTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);



  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = dataSource.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(value);
    setCurrentPage(1);
  };


  const totalPages = Math.ceil(dataSource.length / rowsPerPage);

  return (
    <>
    
        <div className="table-body" style={{ minHeight: 300, padding: "10px 20px" }}>
          <Table
            columns={columns}
            dataSource={currentRows}
            pagination={false}
            rowKey="slNo"
            bordered
          />
        </div>

        <div className='d-flex align-items-center justify-content-between' style={{padding: "10px 20px" }}>
          <div className='pagination-container mx-3'>            
            <Pagination
              defaultPageSize={rowsPerPage}
              current={currentPage}
              total={dataSource.length}
              showSizeChanger
              onShowSizeChange={(current, size) => handleRowsPerPageChange(size)}
              onChange={handlePageChange}
            />
          </div>
          <div className='d-flex align-items-center justify-content-between'>
             <div className="btn-verify mx-3">
               <Button
                block
                size="large"
                type="primary"
                htmlType="submit"
                className="login-button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{ color: '#344054', border: "1px solid #D0D5DD", width:"150px"}}
              >
                Previous
              </Button>
            </div>
            <div className="btn-verify mx-3">

              <Button
                block
                size="large"
                type="primary"
                htmlType="submit"
                className="login-button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{ color: '#344054', border: "1px solid #D0D5DD", width:"150px" }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
    </>
  );
}
