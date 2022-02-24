
import React from "react";
import { useParams } from "react-router-dom"
import { Table } from "reactstrap";

import CompanyDomain from "../components/CompanyDomain/CompanyDomain";

export default function CompanyDomainDetails() {
    const { companyDomain } = useParams()
    const columns = [
        "logo",
        "name",
        "domain",
        "description",
        "industry",
        "metrics.raised",
        "metrics.marketCap",
        "metrics.annualRevenue",
        "metrics.employees",
        "location"
    ]

    return (
        <>
            <Table hover responsive size="sm">
                <thead>
                    <tr>
                        {columns.map((col, i) => {
                            let column = col.split('.')[1] || col
                            return <th key={"header" + i}>{column.toUpperCase()}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    <CompanyDomain companyDomain={companyDomain} columns={columns} />
                </tbody>
            </Table>
        </>
    )
}