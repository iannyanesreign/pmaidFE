import React from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";

export default () => (
  <Nav navbar className="flex-row" style={{alignItems:'center'}}>
    <Notifications />
    <UserActions />
  </Nav>
);
