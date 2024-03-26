import React from "react";

import {
    Input,
    InputGroup,
    InputGroupAddon,
    Button
} from "../../../../components"

const SearchBar = () => {
    return (
        <>
            <InputGroup className="mb-4 w-50">
                <Input placeholder="Search for..." className="bg-white" />
                <InputGroupAddon addonType="append">
                    <Button color="primary">
                        <i className="fa fa-search"></i>
                    </Button>
                </InputGroupAddon>
            </InputGroup>

        </>
    )
}

export default SearchBar;