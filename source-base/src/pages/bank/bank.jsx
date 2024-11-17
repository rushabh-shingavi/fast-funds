import { useState } from "react";
import BankLoanDetails from "./bankLoan-details";
import SucessMessageBank from "./suceess-message";
export default function BankComponent() {
    const [stage, setStage] = useState(1)
        console.log('stage', stage)
    function renderSwitch() {

        switch (stage) {
            case 1:
                return <BankLoanDetails onStage={(value) => setStage(value)} />
            case 2:
                return <SucessMessageBank />
            default:
                return <BankLoanDetails onStage={(value) => setStage(value)} />
        }
    }

    return (
        <>

            <div>{renderSwitch()}</div>

        </>
    )
}