import React from "react";
import { Table } from 'reactstrap';

import CompanyDomain from "../CompanyDomain/CompanyDomain";

export default function List({ ...props }) {
    const { columns, storedList } = props
    console.log('list', { storedList });
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
                    {storedList?.map(cd => (
                        <CompanyDomain companyDomain={cd.domain} columns={columns} />
                    ))}
                </tbody>
            </Table>
        </ >
    )
}