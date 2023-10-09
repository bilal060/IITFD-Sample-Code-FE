import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CpLayout from "./components/layout/CpLayout";
import CpCompanyProfilePanel from "./pages/comapnyProfilePanel/CpCompanyProfilePanel";
import CpSellerRfqListPage from "./pages/sellerRfqListPage/CpSellerRfqListPage";
import CpTransactionHistoryPage from "./pages/transactionHistoryPage/CpTransactionHistoryPage";
import CpPromenaLoginPage from "./pages/pronemaLoginPage/cpPromenaLoginPage";
import CpRegisterPage from "./pages/auth/register/CpRegisterPage";
import CpCatelogPage from "./pages/entities/catelog/CpCatelogPage";
import CpQuotationPage from "./pages/entities/quotation/CpQuotationPage";
import CpfqPage from "./pages/entities/rfq/CpRfqPage";
import CpHomePage from "./pages/homePage/CpHomePage";
import CpLoginPage from "./pages/auth/login/CpLoginPage";
import CpSignupPage from "./pages/auth/signup/CpSignupPage";
import CpCompanyProfilePage from "./pages/companyProfile/CpCompanyProfilePage";
import CpDashboardPage from "./pages/dashboard/CpDashboardPage";
import CpSellerPage from "./pages/entities/seller/CpSellerPage";
import CpCategoryPage from "./pages/categoryPage/CpCategoryPage";
import CpCatalogPage from "./pages/catalogPage/CpCatalogPage";
import CpProductPage from "./pages/productPage/CpProductPage";
import CpUserListingPage from "./pages/userListings/CpUserListingPage";
import CpReactToastComp from "./components/feedback/reactToast/CpReactToast";
import CpVerifyEmailPage from "./pages/auth/verifyEmail/CpVerifyEmailPage";
import CpProductCatalogPage from "./pages/productCatalogPage/CpProductCatalogPage";
import CpSellersForProductPage from "./pages/sellerForProductPage/CpSellersForProductPage";
import CpSellerMembershipPage from "./pages/sellerMembershipPage/CpSellerMembershipPage";
import CpForgotPasswordPage from "./pages/auth/forgotPassword/CpForgotPasswordPage";
import CpResetPasswordPage from "./pages/auth/resetPassword/CpResetPasswordPage";
import CpActivateAccountPage from "./pages/auth/activateAccount/CpActivateAccountPage";
import CpCompanyExistsPage from "./pages/auth/companyExists/CpCompanyExistsPage";
import CpTermsPage from "./pages/auth/terms/CpTermsPage";
import CpAdditionalAddresses from "./pages/additionalAddresses/CpAdditionalAddresses";
import CpCreateAddressPage from "./pages/createAddressPage/CpCreateAddressPage";
import CpCreateServiceLocation from "./pages/createServiceLocation/CpCreateServiceLocation";
import CpBusinessDetailsPage from "./pages/businessDetails/CpBusinessDetailsPage";
import CpAddProductsAndServies from "./pages/addProductsAndServices/CpAddProductsAndServices";
import CpCreateBankInformation from "./pages/createBankInformation/CpCreateBankInformation";
import CpAddNewDocument from "./pages/addNewDocument/CpAddNewDocument";
import CpEmailSentPage from "./pages/auth/emailSent/CpEmailSentPage";
import CpSectorPage from "./pages/sector/CpSectorPage";
import CpContactsPage from "./pages/contactsPage/CpContactsPage";
import CpCreateContactPage from "./pages/createContactPage/CpCreateContactPage";
import CpRequestAccessPage from "./pages/requestAccessPage/CpRequestAccessPage";

const CpLayoutRoutes = (): JSX.Element => (
  <CpLayout>
    <Route exact path="/company" component={CpCompanyProfilePage} />
    <Route exact path="/terms" component={CpTermsPage} />
    <Route exact path="/company-profile" component={CpCompanyProfilePanel} />
    <Route exact path="/company-exists" component={CpCompanyExistsPage} />
    <Route exact path="/email-sent" component={CpEmailSentPage} />
    <Route exact path="/activate-account" component={CpActivateAccountPage} />
    <Route exact path="/seller/membership" component={CpSellerMembershipPage} />
    <Route exact path="/additional-addresses" component={CpAdditionalAddresses} />
    <Route exact path="/create-address" component={CpCreateAddressPage} />
    <Route exact path="/create-bank-information" component={CpCreateBankInformation} />
    <Route exact path="/add-new-document" component={CpAddNewDocument} />
    <Route exact path="/business-details" component={CpBusinessDetailsPage} />
    <Route exact path="/add-sector" component={CpSectorPage} />
    <Route exact path="/create-service-location" component={CpCreateServiceLocation} />
    <Route exact path="/add-products-and-services" component={CpAddProductsAndServies} />
    <Route exact path="/contacts" component={CpContactsPage} />
    <Route exact path="/create-contact" component={CpCreateContactPage} />
    <Route exact path="/request-access" component={CpRequestAccessPage} />
  </CpLayout>
);

const CpRoutes = (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path="/" component={CpHomePage} />
      <Route exact path="/login" component={CpLoginPage} />
      <Route exact path="/signup" component={CpSignupPage} />
      <Route exact path="/forgot-password" component={CpForgotPasswordPage} />
      <Route exact path="/reset-password" component={CpResetPasswordPage} />
      <Route
        exact
        path="/verifyEmail/:emailToken"
        component={CpVerifyEmailPage}
      />
      <Route exact path="/promena-login" component={CpPromenaLoginPage} />
      <Route exact path="/register-seller" component={CpRegisterPage} />
      <Route exact path="/dashboard" component={CpDashboardPage} />
      <Route exact path="/view-seller" component={CpSellerPage} />
      <Route exact path="/users-listing" component={CpUserListingPage} />
      <Route exact path="/categories" component={CpCategoryPage} />
      <Route exact path="/catalogues" component={CpCatalogPage} />
      <Route exact path="/products" component={CpProductPage} />
      <Route exact path="/product_catalog" component={CpProductCatalogPage} />
      <Route
        exact
        path="/transaction-history"
        component={CpTransactionHistoryPage}
      />
      <Route exact path="/seller-rfq-list" component={CpSellerRfqListPage} />
      <Route exact path="/create-catelog" component={CpCatelogPage} />
      <Route exact path="/create-rfq" component={CpfqPage} />
      <Route exact path="/view-quotation" component={CpQuotationPage} />
      <Route exact path="/seller/products" component={CpSellersForProductPage} />
      <CpLayoutRoutes />
    </Switch>
    <CpReactToastComp />
  </Router>
);

export default CpRoutes;
