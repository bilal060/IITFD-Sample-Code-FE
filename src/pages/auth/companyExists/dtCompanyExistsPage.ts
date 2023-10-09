import CfgApp from "../../../configs/CfgApp";

export const dtRequestAccessContent = ():string => `If the company exists in the system is your company then please enter
 the information below and we will send an email to your company's current profile
  administrator, so this person can grant you access as an user.`;

export const dtSentEmailContent = (
  taxNo?: number, emailDomain?: string, email?: string,
):string => `You are trying to register your company with tax number ${taxNo ?? "xxxxxxx"} 
  with e-mail domain ${emailDomain ?? CfgApp.defaulttestEmailDomain} but ${taxNo ?? "xxxxxxx"} tax number 
  is already registered by ${email ?? CfgApp.defaulttestEmail}.`;

export const dtSentEmailReportContent = (
  email?: string,
):string => `If you wish to report misuse, please contact 
${email ?? CfgApp.defaulttestEmail}  and/or test help desk`;

export const dtCompanyExistsFormfieldsArray = [
  {
    name: "companyName",
    type: "text",
    label: "Company Name",
  },
  {
    name: "adminName",
    type: "text",
    label: "Admin Name",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
  },
];
