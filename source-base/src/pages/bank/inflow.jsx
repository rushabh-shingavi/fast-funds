import { Card } from 'antd'
import React from 'react'

export default function Inflow() {
    return (
        <>
            <div className='m-2'>
            <Card
                    title={<div className="row d-flex justify-content-between mt-3">
                        <div className="col-6">
                            <span className="label-span">Inflow</span>
                        </div>
                        <div className="col-6">
                            <span className="value-span">NPR 10,11,232.84</span>
                        </div>
                    </div>}
                    bordered={true}
                >
                    <div className="row d-flex justify-content-between">
                        <div className="col-6">
                            <h5 className="label-span">Category</h5>
                        </div>
                        <div className="col-6">
                            <h5 className="value-span">Amount (NPR)</h5>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-between mt-3">
                        <div className="col-6">
                            <span className="label-span">Salary</span>
                        </div>
                        <div className="col-6">
                            <span className="value-span">10,11,232.84</span>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-between mt-3">
                        <div className="col-6">
                            <span className="label-span">IAT funds Transfer</span>
                        </div>
                        <div className="col-6">
                            <span className="value-span">10,11,232.84</span>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-between mt-3">
                        <div className="col-6">
                            <span className="label-span">OWN funds Transfer Return</span>
                        </div>
                        <div className="col-6">
                            <span className="value-span">10,11,232.84</span>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-between mt-3">
                        <div className="col-6">
                            <span className="label-span">Interest</span>
                        </div>
                        <div className="col-6">
                            <span className="value-span">10,11,232.84</span>
                        </div>
                    </div>
                </Card>
            </div></>
    )
}
