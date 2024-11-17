import React from 'react'
import TopBanner from '../../layout/topBanner'
import { useNavigate } from 'react-router';
import { Tabs } from 'antd';
import { useState } from 'react';
import MonthwiseDetailsTable from './monthwise-details';
import BankAccountsDetails from './bank-accounts-details';
import AnalyticsOverview from './analytics-overview';
import TransactionsList from './transactionsList';
import MonthlySummary from './monthly-summary';

export default function ViewAnalytics() {
    const navigate = useNavigate();
    const [activeKey, setActiveKey] = useState("1");


    return (
        <>
            <div className="top-banner">
                <TopBanner />
            </div>
            <div className='analytics-section col-12 p-2'>
                <div className='m-2'>
                    <h5 onClick={() => navigate("/layout")}>{"< Back"}</h5>
                </div>
                <div className='m-2'>
                    <span style={{ fontWeight: '500', fontSize: '20px' }}>Loan Details</span>
                    <p>Update your loan details here.</p>
                </div>
                <div className='m-2'>
                    <Tabs
                        className='custom-tab-pane'
                        defaultActiveKey="1"
                        onChange={setActiveKey}
                        activeKey={activeKey}
                    >
                        <Tabs.TabPane
                            tab={"Summary"}
                            key="1"
                        >
                        </Tabs.TabPane>
                        <Tabs.TabPane
                            tab={"Overview"}
                            key="2"
                        >
                        </Tabs.TabPane>
                        <Tabs.TabPane
                            tab={"Transactions"}
                            key="3"
                        >
                        </Tabs.TabPane>
                        <Tabs.TabPane
                            tab={"Monthly Summary"}
                            key="4"
                        >
                        </Tabs.TabPane>
                    </Tabs>
                </div>
                {activeKey === "1" && (
                    <div className="col-12">
                        <BankAccountsDetails />
                        <MonthwiseDetailsTable />
                    </div>
                )}
                  {activeKey === "2" && (
                    <div className="col-12">
                     <AnalyticsOverview/>
                                         </div>
                )}
                  {activeKey === "3" && (
                    <div className="col-12">
                    <TransactionsList/>
                    </div>
                )}
                  {activeKey === "4" && (
                    <div className="col-12">
                       <MonthlySummary/>
                    </div>
                )}

            </div>
        </>
    )
}
