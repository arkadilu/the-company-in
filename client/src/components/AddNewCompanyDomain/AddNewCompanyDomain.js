import React, { useState } from "react";
import { Button, Col, Form, FormFeedback, FormGroup, FormText, Input, Label, Row } from "reactstrap";

import { getCompanyDomainInfo } from "../../hooks/useApi";

export default function AddNewCompanyDomain({ ...props }) {
    const { addNewDomain } = props

    const [newCompanyDomain, setNewCompanyDomain] = React.useState("");
    const [domainValidity, setDomainValidity] = useState()

    const validateAndSetDomain = (e) => {
        const { value } = e.target
        setNewCompanyDomain(value)

        const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})*$/

        if (domainRegex.test(value)) {
            setDomainValidity("has-success");
        } else {
            setDomainValidity("has-danger");
        }
    }

    const onAddNewDomain = (e) => {
        e.preventDefault();
        if (!domainValidity || domainValidity === "has-danger") return

        getCompanyDomainInfo(newCompanyDomain)
            .then(companyData => {
                addNewDomain(companyData)
            })
            .catch(e => console.error(e))
        setNewCompanyDomain("")
    }
    
    return (
        <Form inline onSubmit={onAddNewDomain}>
            <Row>
                <Col className="bg-light" >
                    <FormGroup inline>
                        <Label for="domainName">
                            Domain name:
                        </Label>
                        <Input
                            placeholder="Enter domain here.."
                            type="text"
                            value={newCompanyDomain}
                            onChange={validateAndSetDomain}
                            valid={domainValidity === "has-success"}
                            invalid={domainValidity === "has-danger"}
                        />
                        <FormText>Please enter Domain in format "example.com"</FormText>

                        <FormFeedback>Uh oh! doesn't look like a domain.</FormFeedback>
                        <FormFeedback valid>Great! That looks like a Domain.</FormFeedback>

                    </FormGroup>
                    <Button size="lg" block>
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}