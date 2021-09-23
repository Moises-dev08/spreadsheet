import React from "react";

import Spreadsheet from "react-spreadsheet";
import { initialData } from "../../const/const";

import "./spreadSheetComponent.css";

const SpreadSheetComponent = () => (
  <div className="spreadSheet__container">
    <Spreadsheet className="spreadSheet" data={initialData} />
  </div>
);

export default SpreadSheetComponent;
