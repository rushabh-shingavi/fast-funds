import { Card } from 'antd'
import React from 'react'
import BankAccountsDetails from './bank-accounts-details';
import MonthlyAverageBalanceChart from '../../components/monthlyAvgBalChart';
import DepositsAndWithdrawalsChart from '../../components/depositsWithdrawalsChart';
import NetCashFlowChart from '../../components/netCashFlowChart';
import Outflow from './outflow';
import Inflow from './inflow';
import Irregularities from './Irregularities';

export default function AnalyticsOverview() {
    const cards = [
        { count: 32, content: 'Total' },
        { count: 32, content: 'Approved' },
        { count: 32, content: 'In progress' },
        { count: 32, content: 'Rejected' },
        { count: 32, content: 'Reopened' },
    ];
    return (
        <>
            <div className="row d-flex justify-content-center mb-2 w-100">
                {cards.map((card, index) => (
                    <div className="col-md-2" key={index}>
                        <Card
                            hoverable
                            className="custom-card"
                        >
                            <Card.Meta className='custom-meta' title={card.count} description={card.content} />
                        </Card>
                    </div>
                ))}
            </div>
            <div className="d-flex">
            <div className="col-6">
                <BankAccountsDetails />
            </div>
            <div className="col-6">
                <Irregularities />
            </div>
            </div>
            <div className="d-flex">
            <div className="col-6">
                <MonthlyAverageBalanceChart />
            </div>
            <div className="col-6">
                <DepositsAndWithdrawalsChart />
            </div>
            </div>
            <NetCashFlowChart/>
            <div className="d-flex">
            <div className="col-6">
                <Outflow />
            </div>
            <div className="col-6">
                <Inflow />
            </div>
            </div>
        </>
    )
}