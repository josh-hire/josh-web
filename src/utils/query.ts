import { useQuery, useMutation } from '@tanstack/react-query';
import Fetch from './fetch';
import { ToastrContext } from '../contexts/ToastrContext';
import { useContext } from 'react';
import { responseMessages } from 'Constants/responseMessages';

interface FetchOptions {
  key: string;
  message?: {
    success?: string;
    error?: string;
  };
}

interface ToastrContextType {
  setToastr: (value: { isOpen: boolean; message: string; color: string }) => void;
}

export function GetData(options: FetchOptions, callback: () => void = () => {}) {
  return useQuery([options.key], () => Fetch(options), {
    initialData: [],
    onSuccess: (res) => {
      callback();
      
return res;
    },
  });
}

export function GetDataById(id: string | number, options: FetchOptions, callback: () => void = () => {}) {
  const { setToastr } = useContext(ToastrContext) as ToastrContextType;
  
return useQuery([options.key, id], () => Fetch(options), {
    enabled: !!id,
    initialData: {},
    onSuccess: (res) => {
      callback();
      
return res;
    },
    onError: (error) => {
      handleError(error, options, setToastr);
    },
  });
}

export function Mutation(options: FetchOptions, callback: () => void) {
  const { setToastr } = useContext(ToastrContext) as ToastrContextType;
  
return useMutation(
    (payload: any) => {
      return executeFetch(payload, options);
    },
    {
      onSuccess: (res:any) => {
        setToastr({
          isOpen: true,
          message: options?.message?.success || res.message,
          color: 'success',
        });
        callback();
        
return res;
      },
      onError: (error) => {
        handleError(error, options, setToastr);
      },
    },
  );
}

export async function executeFetch(payload: any, options: FetchOptions) {
  const modOptions = {
    ...options,
    data: payload,
  };
  
return Fetch(modOptions);
}

export const handleError = (error: any, options: FetchOptions, setToastr: (value: { isOpen: boolean; message: string; color: string }) => void) => {
  const response = error?.response;
  const queryKey = options.key;
  const definedMessage = options?.message?.error;
  let message = definedMessage;

  if (!definedMessage) {
    let resMessage = responseMessages.error[queryKey]
      ? responseMessages.error[queryKey][response.status] || responseMessages.error[queryKey].default
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
