import React from 'react'
import { Button } from 'antd';
import { ReactComponent as ZondiIcon } from "client/assets/images/zone-icon.svg";
import { ReactComponent as EditIcon } from "client/assets/images/edit.svg";
import { ReactComponent as DeleteIcon } from "client/assets/images/delete.svg";
import { ReactComponent as FilterIcon } from "client/assets/images/filters-lines.svg";
import TransactionsListTable from '../../components/transactionsListTable';
export default function TransactionsList() {
    return (
        <>
            <div className="col-12 d-flex">
                <div className="col-6">
                    <span className='mx-2' style={{ fontWeight: '600', fontSize: '24px' }}>Transactions List</span>
                </div>
                <div className='col-6 d-flex justify-content-end'>
                    <div className="btn-verify mx-3">
                        <Button
                            block
                            size="large"
                            type="primary"
                            htmlType="submit"
                            className="login-button"
                            style={{ color: '#344054', border: "1px solid #D0D5DD", width:"150px"}}
                        >
                            <EditIcon style={{ marginRight: 8, marginBottom: 2 }} />   Edit
                        </Button>
                    </div>

                    <div className="btn-verify mx-3">
                        <Button
                            block
                            size="large"
                            type="primary"
                            htmlType="submit"
                            className="login-button"
                            style={{ color: '#344054', border: "1px solid #D0D5DD", width:"150px"}}
                        >
                            <DeleteIcon style={{ marginRight: 8, marginBottom: 2, }} />   Delete
                        </Button>
                    </div>
                    <div className="btn-verify mx-3">
                        <Button
                            block
                            size="large"
                            type="primary"
                            htmlType="submit"
                            className="login-button"
                            style={{width:"150px"}}
                        >
                            <FilterIcon style={{ marginRight: 8, marginBottom: 2, }} />   Filters
                        </Button>
                    </div>
                    <div className="btn-login mx-3">
                        <Button
                            block
                            size="large"
                            type="primary"
                            className="login-button"
                            style={{width:"150px"}}
                        >
                            <ZondiIcon style={{ marginRight: 8, marginBottom: 2 }} />   Add
                        </Button>
                    </div>
                </div>
            </div>
            <div className="mt-2 p-2">
            <TransactionsListTable/>
            </div>
        </>
    )
}