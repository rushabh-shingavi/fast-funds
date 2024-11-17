import { Card } from 'antd'
import React from 'react'

export default function BankAccountsDetails() {
    return (
        <>
            <div className='m-2'>
                <Card
                    title={<span>Bank Account</span>}
                    bordered={true}
                >
                    <div className="row">
                        <div className="col-4">
                            <span className="label-span">Description</span>
                        </div>
                        <div className="col-8">
                            <span className="value-span">kKHGRY - 1234567876543 - Savings</span>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-4">
                            <span className="label-span">Bank Name</span>
                        </div>
                        <div className="col-8">
                            <span className="value-span">SBI Bank</span>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-4">
                            <span className="label-span">Account Type</span>
                        </div>
                        <div className="col-8">
                            <span className="value-span">Savings</span>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-4">
                            <span className="label-span">Account Number</span>
                        </div>
                        <div className="col-8">
                            <span className="value-span">120348433093</span>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-4">
                            <span className="label-span">Account Holders</span>
                        </div>
                        <div className="col-8">
                            <span className="value-span">John</span>
                        </div>
                    </div>
                </Card>
            </div></>
    )
}
