import React from "react";
import { MobXProviderContext } from "mobx-react";
import StoreType from "../Types/StoreType";

export default (): StoreType => {
  return React.useContext(MobXProviderContext) as StoreType;
};
