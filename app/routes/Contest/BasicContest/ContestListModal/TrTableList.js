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
  CustomInput
} from "../../../../components"

import { randomArray, randomAvatar } from "../../../../utilities"

const TrTableList = (props) => {
  const avatar = [
    [
      <AvatarAddOn.Icon
        className="fa fa-circle"
        color="facebook"
        key="avatar-icon-bg"
      />,
      <AvatarAddOn.Icon
        className="fa fa-facebook"
        color="white"
        key="avatar-icon-fg"
        small
      />,
    ],
    [
      <AvatarAddOn.Icon
        className="fa fa-circle"
        color="twitter"
        key="avatar-icon-bg"
      />,
      <AvatarAddOn.Icon
        className="fa fa-twitter"
        color="white"
        key="avatar-icon-fg"
        small
      />,
    ],
    [
      <AvatarAddOn.Icon
        className="fa fa-circle"
        color="linkedin"
        key="avatar-icon-bg"
      />,
      <AvatarAddOn.Icon
        className="fa fa-linkedin"
        color="white"
        key="avatar-icon-fg"
        small
      />,
    ],
    [
      <AvatarAddOn.Icon
        className="fa fa-circle"
        color="foursquare"
        key="avatar-icon-bg"
      />,
      <AvatarAddOn.Icon
        className="fa fa-foursquare"
        color="white"
        key="avatar-icon-fg"
        small
      />,
    ],
    [
      <AvatarAddOn.Icon
        className="fa fa-circle"
        color="paypal"
        key="avatar-icon-bg"
      />,
      <AvatarAddOn.Icon
        className="fa fa-paypal"
        color="white"
        key="avatar-icon-fg"
        small
      />,
    ],
  ];
  return (
    <React.Fragment>
      <tr>
        <td className="align-middle">
          <CustomInput
            type="checkbox"
            id={`TrTableUsersList-${props.id}`}
            label=""
            inline
          />
        </td>
        <td className="align-middle">
          <a href="#">
            <i className="fa fa-fw fa-star-o"></i>
          </a>
        </td>
        <td>
          <Media>
            <Media left className="d-flex align-self-center mr-3">
              <Avatar.Image
                size="md"
                src={randomAvatar()}
                className="align-self-center"
                addOns={[
                  <AvatarAddOn.Icon
                    className="fa fa-circle"
                    color="white"
                    key="avatar-icon-white-bg"
                  />,
                  ...randomArray(avatar),
                ]}
              />
            </Media>
          </Media>
        </td>
        <td className="align-middle"> {faker.person.firstName()} {faker.person.lastName()}</td>
        <td className="align-middle">{faker.person.jobTitle()}</td>
        <td className="align-middle">{faker.person.lastName()}</td>
        <td className="align-middle">{faker.number.int()}</td>
        <td className="align-middle">{faker.number.int()}</td>
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
TrTableList.propTypes = {
  id: PropTypes.node,
};
TrTableList.defaultProps = {
  id: "1",
};

export { TrTableList };
