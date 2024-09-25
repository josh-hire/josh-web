import { useQuery, useMutation } from '@tanstack/react-query';
import Fetch from './fetch';
import { ToastrContext } from '../contexts/ToastrContext';
import { useContext } from 'react';
import { responseMessages } from 'Constants/responseMessages';

export function GetData(options, callback = () => {}) {
  // const { setToastr } = useContext(ToastrContext);
  return useQuery([options.key], () => Fetch(options), {
    initialData: [],
    onSuccess: (res) => {
      callback && callback();
      return res;
    },
    // onError: (error) => {
    //   handleError(error, options, setToastr);
    // },
  });
}

export function GetDataById(id, options, callback = () => {}) {
  const { setToastr } = useContext(ToastrContext);
  return useQuery([options.key, id], () => Fetch(options), {
    enabled: !!id,
    initialData: {},
    onSuccess: (res) => {
      callback && callback();
      return res;
    },
    onError: (error) => {
      handleError(error, options, setToastr);
    },
  });
}

export function Mutation(options, callback) {
  const { setToastr } = useContext(ToastrContext);
  return useMutation(
    (payload) => {
      return excuteFetch(payload, options);
    },
    {
      onSuccess: (res) => {
        setToastr({
          isOpen: true,
          message: options?.message?.success || res.message,
          color: 'success',
        });
        callback && callback();
        return res;
      },
      onError: (error) => {
        handleError(error, options, setToastr);
      },
    },
  );
}

export async function excuteFetch(payload, options) {
  const modOptions = {
    ...options,
    data: payload,
  };
  return Fetch(modOptions);
}

export const handleError = (error, options, setToastr) => {
  const response = error?.response;
  const queryKey = options.key;
  const definedMessage = options?.message?.error;
  let message = definedMessage;
  if (!definedMessage) {
    let resMessage = responseMessages.error[queryKey]
      ? responseMessages.error[queryKey][response.status] ||
        responseMessages.error[queryKey].default
      : response?.data?.message;
    const isMessageObject = typeof resMessage === 'object';
    if (isMessageObject) {
      resMessage = resMessage?.details[0]?.message;
    }
    message = resMessage;
  }
  setToastr({
    isOpen: true,
    message,
    color: 'error',
  });
  return error;
};
