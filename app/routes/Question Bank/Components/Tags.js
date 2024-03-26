import React from "react";

import {
    Nav,
    NavItem,
    NavLink,
    Badge,
} from "../../../components"
const Tags = () => {
    return (
        <div className="mb-4">
            <div className="small mb-3">
                Tags
            </div>
            <Nav pills vertical>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <i className="fa fa-fw fa-circle text-primary align-self-center mr-2"></i>
                        Engineering
                        <Badge color="secondary" pill className="ml-auto align-self-center">
                            1
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <i className="fa fa-fw fa-circle text-info align-self-center mr-2"></i>
                        Physics
                        <Badge color="secondary" pill className="ml-auto align-self-center">
                            3
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <i className="fa fa-fw fa-circle text-success align-self-center mr-2"></i>
                        Chemistry
                        <Badge color="secondary" pill className="ml-auto align-self-center">
                           10
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <i className="fa fa-fw fa-circle text-warning align-self-center mr-2"></i>
                        Computer Science
                        <Badge color="secondary" pill className="ml-auto align-self-center">
                            5
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <i className="fa fa-fw fa-circle text-danger align-self-center mr-2"></i>
                        Commerce
                        <Badge color="secondary" pill className="ml-auto align-self-center">
                            1
                        </Badge>
                    </NavLink>
                </NavItem>
                
            </Nav>
        </div>
    )
}

export default Tags;