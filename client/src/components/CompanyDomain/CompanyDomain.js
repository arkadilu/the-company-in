import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getLocalDomainData } from "../../hooks/useLocalStorage";

export default function CompanyDomain({ ...props }) {
    const { companyDomain, columns } = props

    const [displayColumns, setDisplayColumns] = useState([])
    const [currentDisplayedCompanyDetails, setCurrentDisplayedCompanyDetails] = useState()

    let navigate = useNavigate();

    useEffect(() => {
        //to display the whole info for the company detail page or the brief for the list on the dashboard
        if (columns) setDisplayColumns(columns)

    }, [setDisplayColumns, columns])

    useEffect(() => {
        setCurrentDisplayedCompanyDetails(getLocalDomainData(companyDomain))
    }, [companyDomain])

    const navigateToCompanyDetails = (e) => {
        debugger
        navigate(`/domain/` + currentDisplayedCompanyDetails.domain);
    }

    return (
        <>
            {!!currentDisplayedCompanyDetails ?
                <tr key={currentDisplayedCompanyDetails?.domain} onClick={navigateToCompanyDetails}>
                    {displayColumns?.map((col, i) => {
                        return (<td key={currentDisplayedCompanyDetails.name + "" + i}>
                            {col.includes('.')
                                ?
                                currentDisplayedCompanyDetails[col.split('.')[0]]    // main category in the data object: for example "metrics"
                                [col.split('.')[1]] // the actual field to show
                                :
                                currentDisplayedCompanyDetails[col]?.startsWith("http") ?
                                    <img src={currentDisplayedCompanyDetails[col]} alt="logo" /> :
                                    currentDisplayedCompanyDetails[col]
                            }
                        </td>)
                    })}
                </tr>
                :
                <></>
            }
        </>
    )
}