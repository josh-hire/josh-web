import { useQuery as useQueryWrapper } from '@tanstack/react-query';

export default function useQuery({ key, fetchAction, ...options }) {
  return useQueryWrapper(key, fetchAction, {
    enabled: true,
    ...options,
  });
}
