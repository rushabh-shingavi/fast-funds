import { Card } from 'antd'
import React from 'react'

export default function Irregularities() {
    return (
        <>
            <div className='m-2'>
                <Card
                    title={<span>Irregularities(2)</span>}
                    bordered={true}
                >
                    <div className="row d-flex justify-content-between">
                        <div className="col-6">
                            <h5 className="label-span">Activity</h5>
                        </div>
                        <div className="col-6">
                            <h5 className="value-span">Incidences</h5>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-between mt-3">
                        <div className="col-6">
                            <span className="label-span">Credit Txns</span>
                        </div>
                        <div className="col-6">
                            <span className="value-span">NPR 10,11,232.84</span>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-between mt-3">
                        <div className="col-6">
                            <span className="label-span">O/W Cheque Bounces</span>
                        </div>
                        <div className="col-6">
                            <span className="value-span">NPR 10,11,232.84</span>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-between mt-3">
                        <div className="col-6">
                            <span className="label-span">O/W Cheque Bounces</span>
                        </div>
                        <div className="col-6">
                            <span className="value-span">NPR 10,11,232.84</span>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-between mt-3">
                        <div className="col-6">
                            <span className="label-span">O/W Cheque Bounces</span>
                        </div>
                        <div className="col-6">
                            <span className="value-span">NPR 10,11,232.84</span>
                        </div>
                    </div>
                </Card>
            </div></>
    )
}
