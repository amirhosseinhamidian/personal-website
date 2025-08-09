// utils/toastHandler.ts
import { toast } from 'react-hot-toast';
import type {
  ToastOptions,
  DefaultToastOptions,
  Renderable,
  ValueOrFunction,
} from 'react-hot-toast';

export function createToastHandler() {
  const base = 'border rounded-md';
  const light = 'bg-background-light text-text-light border-border-light';
  const dark =
    'dark:bg-background-dark dark:text-text-dark dark:border-border-dark';

  const successCls = `${base} ${light} ${dark}`;
  const errorCls = `${base} bg-red text-text-dark dark:text-text-dark`;
  const customCls = `${base} ${light} ${dark}`;
  const loadingCls = `${base} ${light} ${dark}`;

  return {
    showSuccessToast: (message: Renderable, options: ToastOptions = {}) =>
      toast.success(message, {
        duration: 4000,
        className: successCls,
        ...options,
      }),

    showErrorToast: (message: Renderable, options: ToastOptions = {}) =>
      toast.error(message, { duration: 4000, className: errorCls, ...options }),

    showCustomToast: (message: Renderable, options: ToastOptions = {}) =>
      toast(message, { duration: 4000, className: customCls, ...options }),

    showLoadingToast: (message: Renderable, options: ToastOptions = {}) =>
      toast.loading(message, {
        duration: 2000,
        className: loadingCls,
        ...options,
      }),

    handlePromiseToast: <T>(
      promise: Promise<T>,
      messages: {
        loadingMessage: Renderable;
        successMessage: ValueOrFunction<Renderable, T>;
        errorMessage: ValueOrFunction<Renderable, unknown>;
      },
      options?: DefaultToastOptions
    ) => {
      const { loadingMessage, successMessage, errorMessage } = messages;

      toast.promise(
        promise,
        {
          loading: loadingMessage,
          success: successMessage,
          error: errorMessage,
        },
        {
          className: loadingCls,
          success: { className: successCls, ...(options?.success ?? {}) },
          error: { className: errorCls, ...(options?.error ?? {}) },
          loading: { className: loadingCls, ...(options?.loading ?? {}) },
          ...options,
        }
      );
    },
  };
}
