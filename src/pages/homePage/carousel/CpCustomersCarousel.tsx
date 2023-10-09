import React from "react";
import "./stCustomersCarousel.scss";
import {
  CpBox,
  CpCard,
  CpCarousel,
  CpContainer,
  CpTypography,
} from "../../../shared/moduleImports/utModuleImports";

const logos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 300, itemsToShow: 2 },
  { width: 576, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 992, itemsToShow: 5 },
  { width: 1200, itemsToShow: 6 },
];
const CpCustomersCarousel = ():JSX.Element => (
  <CpBox className="cp-carousel-comp-root">
    <CpBox
      component="img"
      alt="bg pattern"
      src="public/static/media/pattern-lines.d6471bac.svg"
      className="box-background-pattern"
    />
    <CpContainer className="section-container">
      <CpTypography component="h2" variant="h2" align="center" gutterBottom>
        Our Customers
      </CpTypography>
      <CpCarousel
        isRTL={false}
        breakPoints={breakPoints}
        itemsToScroll={1}
        itemPadding={[10, 15]}
        enableAutoPlay
        autoPlaySpeed={1500}
      >
        {logos.map((logo) => (
          <CpCard key={logo} elevation={1} className="card-carousel-item">
            <CpBox
              className="box-customers-img-wrapper"
              component="img"
              alt="Product img"
              src="/public/static/media/companylogo.jpg"
            />
          </CpCard>
        ))}
      </CpCarousel>
    </CpContainer>
  </CpBox>
);

export default CpCustomersCarousel;
