export const dtEmailDomainContent = ():string => `The configured e-mail domains will be used for 
automatic approval of the user's access request to the company, without the need for action by company 
administrators registered in test`;

export const dtEmailDomainInfo = ():string => "Public email can not be entered for e-mail domain";

export const dtCheckboxText = (
  name: string,
): string => `I have read and agree to the Terms of ${name === "TermsPersonalData" ? "Personal Data Protection" : "Use"}`;
