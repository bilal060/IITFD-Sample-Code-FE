import React from "react";
import {
  CpBox, CpCard, CpCarousel, CpDivider, CpGrid, CpList,
  CpListItem, CpListItemText, CpTypography,
} from "../../../shared/moduleImports/utModuleImports";
import { sellerList } from "./dtSellerList";
import "./stSellerList.scss";

const CpSellerList = (): JSX.Element => (
  <CpGrid>
    {
        sellerList.map((item) => (
          <CpList sx={{ width: "100%" }}>
            <CpListItem alignItems="center">
              <CpListItemText
                primary={item.sellerName}
                secondary={(
                  <CpGrid>
                    <CpTypography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.productName}
                    </CpTypography>
                    {` -${item.productPrice} $`}
                    <CpCarousel
                      isRTL={false}
                      itemsToScroll={1}
                      itemPadding={[10, 15]}
                      enableAutoPlay
                      autoPlaySpeed={1500}
                    >
                      {item.images.map((img) => (
                        <CpCard key={img} elevation={1} sx={{ m: 2 }}>
                          <CpBox
                            className="box-customers-img-wrapper"
                            component="img"
                            alt=""
                            src=""
                          />
                          {img}
                        </CpCard>
                      ))}
                    </CpCarousel>
                  </CpGrid>
                )}
              />
            </CpListItem>
            <CpDivider variant="inset" component="li" sx={{ mr: 4 }} />
          </CpList>

        ))
      }
  </CpGrid>
);
export default CpSellerList;
