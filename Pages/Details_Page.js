import React from "react";
import { useNavigate } from "react-router-dom";
import Item_List from "./Item_List.json";

import DTP_Header from "./Components/DTP_Header";
import DTP_SubDetails from "./Components/DTP_Subdetails";

export default function Details_Page() {

  var temp_key = window.value;

  function getItemByKey(temp_key) {
    return Item_List.filter(function (Item_List) {
      return Item_List.key === temp_key;
    });
  }

  var Detailed_Item = getItemByKey(temp_key);

  return (
    <div>
      <DTP_Header Detailed_Item={Detailed_Item}></DTP_Header>
      <DTP_SubDetails Detailed_Item={Detailed_Item}></DTP_SubDetails>
    </div>
  );
}
