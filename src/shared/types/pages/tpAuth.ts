export type tpRegister = {
  companyName: string;
  workAs: string;
  email: string;
  password: string;
  confirmPassword: string;
  reCaptchaToken: string;
};

export type tpLogin = {
  email: string,
  password: string,
  reCaptchaToken?: string,
};

export type tpSignUpFormInputProps = {
  setReCaptchaToken: (token:string)=> void;
  reCaptchaToken:string;
  isLoading:boolean;
}

export type tpLoginFormInputProps = {
  setReCaptchaToken: (token:string)=> void;
  reCaptchaToken:string;
}

export type tpVerifyEmail = { emailToken: string };
