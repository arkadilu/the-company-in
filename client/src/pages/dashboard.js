import React from "react";
import AddNewCompanyDomain from "../components/AddNewCompanyDomain/AddNewCompanyDomain";
import List from "../components/List/List";

import useLocalStorage from '../hooks/useLocalStorage';

export default function Dashboard() {
    const [ storedList, addNewDomain ] = useLocalStorage();
    return (
        <>
            <AddNewCompanyDomain addNewDomain={addNewDomain} />
            <List storedList={storedList}
                columns={["logo", "name", "type"]}
            />
        </>
    )
}