import { Select, Table } from 'antd';
import React, { useMemo, useState } from 'react';

export default function MonthlySummary() {
  const monthRanges = {
    'Mar - Jun': ['Mar', 'Apr', 'May', 'Jun'],
    'Jul - Sep': ['Jul', 'Aug', 'Sep'],
    'Oct - Dec': ['Oct', 'Nov', 'Dec'],
  };

  const years = ['2022', '2023', '2024',];

  const dataSource = {
    '2022': {
      'Mar - Jun': [
        { description: 'Opening Balance', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Deposits', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Salary', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Interest', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'I/W Funs Transfer', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'O/W Funs Transfer Return', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Opening Balance', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Opening Balance', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'I/W Funs Transfer', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Loan', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Charges & Fees', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
      ],
      'Jul - Sep': [
        { description: 'Opening Balance', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Deposits', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Salary', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Interest', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'I/W Funs Transfer', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'O/W Funs Transfer Return', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Opening Balance', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Opening Balance', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'I/W Funs Transfer', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Loan', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Charges & Fees', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
      ],
      'Oct - Dec': [
        { description: 'Opening Balance', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Deposits', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Salary', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Interest', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'I/W Funs Transfer', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'O/W Funs Transfer Return', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Opening Balance', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Opening Balance', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'I/W Funs Transfer', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Loan', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Charges & Fees', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
      ],
    },
    '2023': {
      'Mar - Jun': [
        { description: 'Opening Balance', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Deposits', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Salary', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Interest', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'I/W Funs Transfer', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'O/W Funs Transfer Return', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Opening Balance', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Opening Balance', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'I/W Funs Transfer', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Loan', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Charges & Fees', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
      ],
      'Jul - Sep': [
        { description: 'Opening Balance', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Deposits', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Salary', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Interest', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'I/W Funs Transfer', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'O/W Funs Transfer Return', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Opening Balance', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Opening Balance', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'I/W Funs Transfer', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Loan', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Charges & Fees', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
      ],
      'Oct - Dec': [
        { description: 'Opening Balance', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Deposits', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Salary', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Interest', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'I/W Funs Transfer', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'O/W Funs Transfer Return', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Opening Balance', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Opening Balance', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'I/W Funs Transfer', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Loan', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Charges & Fees', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
      ],
    },
    '2024': {
      'Mar - Jun': [
        { description: 'Opening Balance', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Deposits', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Salary', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Interest', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'I/W Funs Transfer', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'O/W Funs Transfer Return', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Opening Balance', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Opening Balance', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'I/W Funs Transfer', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Loan', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
        { description: 'Charges & Fees', marAmount: 54000, marTxnCount: 1, aprAmount: 54000, aprTxnCount: 1, mayAmount: 54000, mayTxnCount: 1, junAmount: 54000, junTxnCount: 1 },
      ],
      'Jul - Sep': [
        { description: 'Opening Balance', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Deposits', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Salary', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Interest', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'I/W Funs Transfer', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'O/W Funs Transfer Return', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Opening Balance', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Opening Balance', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'I/W Funs Transfer', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Loan', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
        { description: 'Charges & Fees', julAmount: 54000, julTxnCount: 1, augAmount: 54000, augTxnCount: 1, sepAmount: 54000, sepTxnCount: 1 },
      ],
      'Oct - Dec': [
        { description: 'Opening Balance', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Deposits', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Salary', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Interest', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'I/W Funs Transfer', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'O/W Funs Transfer Return', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Opening Balance', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Opening Balance', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'I/W Funs Transfer', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Loan', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
        { description: 'Charges & Fees', octAmount: 54000, octTxnCount: 1, novAmount: 54000, novTxnCount: 1, decAmount: 54000, decTxnCount: 1 },
      ],
    },
  };
  const [selectedMonthRange, setSelectedMonthRange] = useState('Mar - Jun');
  const [selectedYear, setSelectedYear] = useState('2024');

  const columns = useMemo(() => {
    const months = monthRanges[selectedMonthRange];
    const dynamicColumns = months.map((month) => ({
      title: `${month} ${selectedYear}`,
      children: [
        {
          title: 'Amount (NPR)',
          dataIndex: `${month.toLowerCase()}Amount`,
          key: `${month.toLowerCase()}Amount`,
        },
        {
          title: 'Txn Count',
          dataIndex: `${month.toLowerCase()}TxnCount`,
          key: `${month.toLowerCase()}TxnCount`,
        },
      ],
    }));

    return [
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      ...dynamicColumns,
    ];
  }, [selectedMonthRange, selectedYear]);

  const data = useMemo(() => {
    return dataSource[selectedYear]?.[selectedMonthRange] || [];
  }, [selectedMonthRange, selectedYear]);

  const handleMonthRangeChange = (value) => {
    setSelectedMonthRange(value);
  };

  const handleYearChange = (value) => {
    setSelectedYear(value);
  };
  return (
    <>
      <div className="col-12 d-flex">
        <div className="col-6">
          <span className='mx-2' style={{ fontWeight: '600', fontSize: '24px' }}>Monthly Summary</span>
        </div>
        <div className='col-6 d-flex justify-content-end'>
          <Select
            defaultValue={selectedMonthRange}
            style={{ width: 150, marginRight: 10 }}
            onChange={handleMonthRangeChange}
          >
            {Object.keys(monthRanges).map((range) => (
              <Select.Option key={range} value={range}>
                {range}
              </Select.Option>
            ))}
          </Select>
          <Select defaultValue={selectedYear} style={{ width: 100 }} onChange={handleYearChange}>
            {years.map((year) => (
              <Select.Option key={year} value={year}>
                {year}
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>

      <Table className="table-striped-rows p-5"
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
      />

    </>);
};
