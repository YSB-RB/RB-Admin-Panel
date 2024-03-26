import React from "react";
import { faker } from "@faker-js/faker";
import PropTypes from "prop-types";

import {
  Media,
  Avatar,
  AvatarAddOn,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "../../../components"

import { randomArray, randomAvatar } from "../../../utilities"

const TrQDTable = (props) => {
  
  return (
    <React.Fragment>
      <tr>
        <td className="align-middle"> {faker.person.firstName()} {faker.person.lastName()}</td>
        <td className="align-middle">{faker.person.jobTitle()}</td>
        <td className="align-middle">{faker.person.lastName()}</td>
        <td className="align-middle">{faker.person.jobTitle()}</td>
        <td className="align-middle text-right">
          <UncontrolledButtonDropdown>
            <DropdownToggle color="link" className="pr-0">
              <i className="fa fa-bars"></i>
              <i className="fa fa-angle-down ml-2" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <i className="fa fa-fw fa-file-code-o mr-2"></i>
                Details
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-fw fa-share mr-2"></i>
                Share
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-fw fa-check mr-2"  ></i>
                Check
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-fw fa-pencil mr-2"></i>
                Edit
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <i className="fa fa-fw fa-trash mr-2"></i>
                Delete
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </td>
      </tr>
    </React.Fragment>
  );
};
TrQDTable.propTypes = {
  id: PropTypes.node,
};
TrQDTable.defaultProps = {
  id: "1",
};

export { TrQDTable };
