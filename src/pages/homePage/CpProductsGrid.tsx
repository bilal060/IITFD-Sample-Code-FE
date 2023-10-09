import React from "react";
import "./stHomePageStyle.scss";
import {
  CpTypography,
  CpButton,
  CpContainer,
  CpBox,
  CpGrid,
  CpCard,
} from "../../shared/moduleImports/utModuleImports";
import { cards } from "./dtHomePage";

const CpProductsGrid = (): JSX.Element => (
  <CpBox className="box-product-list-comp">
    <CpContainer className="container-products-grid-root">
      <CpGrid container spacing={{ xs: 3 }} className="grid-container-products">
        {cards.map((card) => (
          <CpGrid item key={card.titleText} xs={12} sm={6} md={4}>
            <CpBox className="box-grid-item-wrapper">
              <CpCard className="grid-item-card-root" elevation={1}>
                <CpBox className="box-product-img-wrapper">
                  <CpBox
                    component="img"
                    alt="Product img"
                    src={card.image}
                    className="box-image-container"
                  />
                  <CpBox
                    className="box-img-shadow"
                    sx={{
                      background: `url(${card.image}) 0% 0% / cover transparent`,
                    }}
                  />
                </CpBox>
                <CpBox className="box-product-text-wrapper">
                  <CpTypography variant="h5">{card.titleText}</CpTypography>
                  <CpBox className="box-product-details-text">
                    <CpTypography variant="body2">
                      {card.detailsText}
                    </CpTypography>
                  </CpBox>
                  <CpButton variant="outlined" size="small">
                    Details
                  </CpButton>
                </CpBox>
              </CpCard>
            </CpBox>
          </CpGrid>
        ))}
      </CpGrid>
    </CpContainer>
  </CpBox>
);

export default CpProductsGrid;
