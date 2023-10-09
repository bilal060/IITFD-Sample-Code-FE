import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import "../stBasicCard.scss";
import { tpBasicCardBodyProps } from "../../../shared/types/tpOther";

const CpBasicCardBody = ({
  currentValue,
  totalFieldName,
  totalValue,
  percentageDif,
}: tpBasicCardBodyProps): JSX.Element => (
  <>
    <CardContent
      className="card-body"
    >
      <div className="col-sm-12 card-body-text">{currentValue}</div>
    </CardContent>
    {totalFieldName && (
      <CardActions className="card-action">
        <span className="card-total">
          {totalFieldName}
          :
          {totalValue}
        </span>
        <span className="percentage-dif">
          {percentageDif}
          %
        </span>
      </CardActions>
    )}
  </>
);

CpBasicCardBody.defaultProps = {
  totalFieldName: "",
  totalValue: "",
  percentageDif: "",
};

export default CpBasicCardBody;
