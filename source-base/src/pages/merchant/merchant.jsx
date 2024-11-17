import { useState } from "react";
import PersonalDetails from "./personal-details";
import CardDetails from "./card-details";
import ItemsDetails from "./items-details";
import LoanDetails from "./loan-details";
import DocumentsCheckList from "./documents-checkList";
import SucessMessageMerchant from "./suceess-message";
export default function MerchantComponent() {
    const [stage, setStage] = useState(1)
        console.log('stage', stage)
    function renderSwitch() {

        switch (stage) {
            case 1:
                return <PersonalDetails onStage={(value) => setStage(value)} />
            case 2:
                return <CardDetails onStage={(value) => setStage(value)} />
            case 3:
                return <ItemsDetails onStage={(value) => setStage(value)} />
            case 4:
                return <LoanDetails onStage={(value) => setStage(value)} />
            case 5:
                return <DocumentsCheckList onStage={(value) => setStage(value)} />
            case 6:
                return <SucessMessageMerchant />
            default:
                return <PersonalDetails onStage={(value) => setStage(value)} />
        }
    }

    return (
        <>

            <div>{renderSwitch()}</div>

        </>
    )
}