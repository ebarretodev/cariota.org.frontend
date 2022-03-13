import React from "react";
import Card from "./card";

const InternalSider = () => {
    return(
        <>
            <Card title="Tangle Transactions" height={250}>
                Tangle Transactions
            </Card>
            <Card title="Incoming">
                Outgoing last 24h
            </Card>
            <Card title="Outgoing">
                Outgoing last 24h
            </Card>
        </>
    )
}

export default InternalSider