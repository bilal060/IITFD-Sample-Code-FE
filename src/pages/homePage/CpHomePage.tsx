import React from "react";
import "./stHomePageStyle.scss";
import {
  CpTypography,
  CpButton,
  CpContainer,
  CpBox,
  CpStack,
  CpGrid,
  CpCard,
  CpBadge,
} from "../../shared/moduleImports/utModuleImports";
import {
  Avatar,
  FormatQuoteIcon,
} from "../../shared/moduleImports/utIconsImports";
import CpProductsGrid from "./CpProductsGrid";
import CpHeaderHomePage from "./navbar/CpHeaderHomePage";
import CpFooterHomePage from "./footer/CpFooterHomePage";
import CpCustomersCarousel from "./carousel/CpCustomersCarousel";

const texts = [1, 2, 3];
const cards = [1, 2, 3];
const CpMainButtons = () => (
  <CpContainer fixed>
    <CpStack
      sx={{ pt: 6 }}
      direction="row"
      spacing={4}
      justifyContent="center"
      className="stack-buttons-stack-comp"
    >
      <CpButton variant="contained">Register Now</CpButton>
      <CpButton variant="contained">Login</CpButton>
    </CpStack>
  </CpContainer>
);

const CpTestimonialsGrid = () => (
  <CpGrid container spacing={3} className="grid-testimonials-details-comp">
    {cards.map((card) => (
      <CpGrid item key={card} xs={12} sm={6} md={4} sx={{ pt: 24, mt: 8 }}>
        <CpCard className="card-grid-item-testimonials" elevation={1}>
          <CpBox className="box-testimonial-img-wrapper">
            <Avatar
              alt="Remy Sharp"
              src="public/static/media/team-2.13ae2ce3.jpg"
            />
          </CpBox>
          <CpBox className="box-testimonial-text-wrapper">
            <CpTypography variant="h4">Remy Sharp</CpTypography>
            <CpTypography variant="body2">@RemySharp</CpTypography>
            <CpTypography variant="body2" sx={{ mt: 8 }}>
              The connections you make at Web Summit are unparalleled, we met
              users all over the world
            </CpTypography>
          </CpBox>
          <CpBox className="box-testimonials-svg-comp">
            <FormatQuoteIcon className="icon-quotes-testimonials" />
          </CpBox>
        </CpCard>
      </CpGrid>
    ))}
  </CpGrid>
);

const CpTestimonialSection = () => (
  <CpBox className="box-testimonial-root-comp">
    <CpBox
      component="img"
      alt="bg pattern"
      src="public/static/media/pattern-lines.d6471bac.svg"
      className="box-background-pattern"
    />
    <CpContainer>
      <CpGrid container className="grid-testimonials-heading-comp">
        <CpGrid item xs={12} md={6}>
          <CpBadge className="badge-testimonials-root">
            <CpBox component="span" className="badge-content">
              testimonials
            </CpBox>
          </CpBadge>
          <CpTypography component="h2" variant="h2" align="center" gutterBottom>
            Some thoughts from our clients
          </CpTypography>
          <CpTypography variant="body1" align="center" gutterBottom>
            If you&apos;re selected for them you&apos;ll also get three tickets,
            opportunity to access Investor Office Hours and Mentor Hours and
            much more all for free.
          </CpTypography>
        </CpGrid>
      </CpGrid>
      <CpTestimonialsGrid />
    </CpContainer>
  </CpBox>
);

const CpTextsPictureSection = () => (
  <CpBox className="box-picturetexts-root-comp">
    <CpBox
      component="img"
      alt="bg pattern"
      src="/public/static/media/istockphoto-1311598658-170667a.jpg"
      className="box-textsPicture-img"
    />
    <CpContainer className="container-picture-texts-comp">
      <CpGrid container className="grid-picture-texts-comp">
        <CpGrid item xs={12} lg={7}>
          <CpBox className="box-texts-comp">
            <CpTypography
              component="h3"
              variant="h3"
              align="center"
              gutterBottom
            >
              Random Text..
            </CpTypography>
            <CpBox className="box-detail-text">
              {texts.map((text) => (
                <CpTypography
                  key={text}
                  variant="body2"
                  align="center"
                  gutterBottom
                >
                  If you&apos;re selected for them you&apos;ll also get three tickets,
                  opportunity to access Investor Office Hours and Mentor Hours
                  and much more all for free.
                  If you&apos;re selected for them you&apos;ll also get three tickets,
                  opportunity to access Investor Office Hours and Mentor Hours
                  and much more all for free.
                </CpTypography>
              ))}
            </CpBox>
          </CpBox>
        </CpGrid>
      </CpGrid>
    </CpContainer>
  </CpBox>
);

const CpHomePage = (): JSX.Element => (
  <div className="container-homepage-root-comp">
    <CpHeaderHomePage />
    <CpBox className="box-top-banner-comp">
      <CpContainer maxWidth="md">
        <CpGrid container spacing={2} className="grid-top-banner-comp">
          <CpGrid item xs={12}>
            <CpTypography
              component="h2"
              variant="h2"
              align="center"
              gutterBottom
            >
              test
            </CpTypography>
          </CpGrid>
          <CpGrid item xs={12}>
            <CpTypography variant="body1" align="center" paragraph>
              {`Where Buyers and sellers meet to exchange goods and services. You
              can RFQs... Quotes... Discover and see seller ratings made by
              other Buyers Many more...`}
            </CpTypography>
          </CpGrid>
        </CpGrid>
      </CpContainer>
    </CpBox>

    <CpCard className="card-main-wrapper-comp" elevation={1}>
      <CpBox className="box-main-wrapper-comp">
        <CpMainButtons />
        <CpProductsGrid />
      </CpBox>
      <CpTestimonialSection />
      <CpTextsPictureSection />
      <CpCustomersCarousel />
    </CpCard>
    <CpFooterHomePage />
  </div>
);

export default CpHomePage;
