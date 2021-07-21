import { useQuery } from 'react-query';
import axios from 'axios';

/**
 * custom hook for fetching data
 * @param key unique identifier for query
 * @param queryUrl query route, base url has been specified
 * @param token optional user token to access protected route
 * @returns an observers for isLoading, error, isFetching and data
 */

export const useFetch = (key: string, queryUrl: string, token?: string) => {
  return useQuery(
    key,
    async () => {
      const response = await axios({
        method: 'get',
        url: `https://swapi.dev/api/${queryUrl}`,
      });
      return response.data;
    },
    {
      // prevents background data refetch when browser / window is refocused
      refetchOnWindowFocus: false,
    }
  );
};
