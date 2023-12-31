import { ToastOptions, toast } from "react-toastify";

const toastConfig:ToastOptions = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    pauseOnFocusLoss: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}

const toastSuccessConfig:ToastOptions = {...toastConfig};
const toastErrorConfig:ToastOptions = {...toastConfig};
const toastInfoConfig:ToastOptions = {...toastConfig};

export function useToast(){
    const toastSuccess = (msg:string) => {toast.dismiss() ; toast.success(msg, toastSuccessConfig)};
    const toastError = (msg:string) => {toast.dismiss() ; toast.error(msg, toastErrorConfig)};
    const toastInfo = (msg:string) => {toast.dismiss() ; toast.info(msg, toastInfoConfig)};
    return {
        toastSuccess,
        toastError,
        toastInfo
    };
}