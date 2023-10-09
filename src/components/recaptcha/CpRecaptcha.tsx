import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

type PropTypes = {
  onChange?: ((token: string | null) => void) | undefined
}

const CpRecaptcha = (props: PropTypes): JSX.Element => {
  const { onChange } = props;
  return (
    <ReCAPTCHA
      sitekey="6LcyT7YeAAAAAG46bQwhXjdVSiQ8NLlGrhI_C-uB"
      onChange={onChange}
    />
  );
};

CpRecaptcha.defaultProps = {
  onChange: undefined,
};

export default CpRecaptcha;
