import { toast } from "react-toastify";

type ToastType = {
  justMsg: (msg: string) => string | number,
  success: (msg: string) => string | number,
  warning: (msg: string) => string | number,
  error: (msg: string) => string | number,
  info: (msg: string) => string | number,
  showByStatusCode: (msg: string, statusCode: number | undefined) => void,
};

const utAppToast = (): ToastType => {
  const utError = (msg: string) => toast(msg, { type: "error" });
  const utSuccess = (msg: string) => toast(msg, { type: "success" });
  const utInfo = (msg: string) => toast(msg, { type: "info" });
  const utWarning = (msg: string) => toast(msg, { type: "warning" });
  const utJustMsg = (msg: string) => toast(msg, { type: "default" });

  const utShowByStatusCode = (msg: string, statusCode: number | undefined) => {
    if (statusCode && statusCode >= 200 && statusCode < 400) {
      utSuccess(msg);
    } else {
      utError(msg);
    }
  };

  return {
    error: utError,
    success: utSuccess,
    info: utInfo,
    warning: utWarning,
    justMsg: utJustMsg,
    showByStatusCode: utShowByStatusCode,
  };
};

export default utAppToast;
