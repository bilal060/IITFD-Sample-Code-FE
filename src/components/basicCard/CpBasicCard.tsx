import React from "react";
import "./stBasicCard.scss";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CpBasicCardBody from "./cardBody/CpBasicCardBody";
import { tpBasicCardProps } from "../../shared/types/tpOther";

const CpBasicCard = ({
  title,
  currentValue,
  totalFieldName,
  totalValue,
  percentageDif,
  cardClassName,
  cardTitleClassName,
}: tpBasicCardProps): JSX.Element => (
  <div className="cp-basic-card-root">
    <Card
      className={cardClassName}
    >
      <div>
        {title && (
          <CardHeader title={title} className={cardTitleClassName} />
        )}
        <CpBasicCardBody
          currentValue={currentValue}
          percentageDif={percentageDif}
          totalFieldName={totalFieldName}
          totalValue={totalValue}
        />
      </div>
    </Card>
  </div>
);

CpBasicCard.defaultProps = {
  title: "",
  subTitle: "",
  image: null,
  totalFieldName: "",
  totalValue: "",
  percentageDif: "",
  cardClassName: "",
  cardTitleClassName: "d-flex justify-content-between align-items-center",
};

export default CpBasicCard;
