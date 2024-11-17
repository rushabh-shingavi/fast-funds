import React, { useEffect, useState } from 'react'
import TopBanner from '../../layout/topBanner'
import LOAN_ACCOUNTS from '../../mocks/loan-accounts'
import { Button, Input, Pagination, Table, Tag } from 'antd';
import { BiSearch } from "react-icons/bi";
import { ReactComponent as ZondiIcon } from "client/assets/images/zone-icon.svg";
import "./dashboard.css"
import { useNavigate } from 'react-router';
import { useDispatch} from 'react-redux';
import { setStepCount } from '../../store/actions/auth.action';

export default function DashboardMerchant() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchField, setSearchField] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(setStepCount(0));
  }, []);


  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const filteredRows = LOAN_ACCOUNTS.filter(item =>
    item.loanApplicationNo.toLowerCase().includes(searchField.toLowerCase()));
  const currentRows = filteredRows.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(LOAN_ACCOUNTS.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(value);
    setCurrentPage(1);
  };
  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return '#D4F8D3';
      case 'Rejected':
        return '#FADFD0';
      case 'Hold':
        return '#FFF8BD';
      default:
        return '#FFF';
    }
  };
  const columns = [
    { title: 'Sl No', dataIndex: 'slNo' },
    { title: 'Invoice No', dataIndex: 'invoiceNo' },
    { title: 'Loan Application No', dataIndex: 'loanApplicationNo' },
    { title: 'Item Description', dataIndex: 'itemDescription' },
    { title: 'Invoice Value (in NPR)', dataIndex: 'invoiceValue' },
    { title: 'Loan Value (in NPR)', dataIndex: 'loanValue' },
    {
      title: 'Loan Status',
      dataIndex: 'loanStatus',
      render: (loanStatus) => (
        <Tag
          className='loan-status'
          style={{ background: getStatusColor(loanStatus) }}
        >
          {loanStatus}
        </Tag>
      ),
    },
    { title: 'Amount Received', dataIndex: 'amountReceived' },
  ];
  return (
    <>
      <div className="top-banner">
        <TopBanner />
      </div>
      <div className="main-section">
        <div className='d-flex align-items-center justify-content-between w-100'>
          <div className="d-flex align-items-center mx-4">
            <span style={{ fontSize: "24px", fontWeight: "500" }}>Dashboard</span>
          </div>
          <div className='d-flex align-items-center justify-content-between mx-5'>
            <div className='d-flex align-items-center mx-3'>
              <Input
                className=""
                style={{width: "300px" }}
                placeholder=" Search loan"
                size="large"
                prefix={<BiSearch style={{ fontSize: 14, color: "#667085" }} />}
                onChange={(e) => setSearchField(e.target.value)}
              />
            </div>

            <div className="btn-login mx-3">
              <Button
                block
                size="large"
                type="primary"
                htmlType="submit"
                className="login-button mt-3"
                onClick={() => navigate("/layout")}
                style={{width:'200px'}}
              >
                <ZondiIcon style={{ marginRight: 8, marginBottom: 2 }} />   New Request
              </Button>
            </div>
          </div>
        </div>
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
              total={filteredRows.length}
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
                style={{ color: '#344054', border: "1px solid #D0D5DD", width:'150px'}}
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
                style={{ color: '#344054', border: "1px solid #D0D5DD", width:'150px'}}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
