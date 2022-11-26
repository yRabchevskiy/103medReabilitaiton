import React from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { IBseApiResponse } from './models/api';

axios.defaults.baseURL = 'http://localhost:8080/api';

interface HeaderParams {
  token?: string;
  param?: any;
}
const getHeaders = (params?: HeaderParams) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${params?.token || null}`,
      // 'Accept-Language': language,
    },
    params: params?.param || null,
  };
};

interface IBaseApiRes<T> {
  response: T | null;
  error: AxiosError | null;
  loading: boolean;
}

interface IGetApiRes<T> extends IBaseApiRes<T> {
  onGet: (url: string, param?: HeaderParams) => void;
}
interface IPostApiRes<T> extends IBaseApiRes<T> {
  onPost: (url: string, _data: any, param?: HeaderParams) => void;
}
interface IPutApiRes<T> extends IBaseApiRes<T> {
  onPut: (url: string, _data: any, param?: HeaderParams) => void;
}
interface IPatchApiRes<T> extends IBaseApiRes<T> {
  onPatch: (url: string, _data: any, param?: HeaderParams) => void;
}
interface IDeleteApiRes<T> extends IBaseApiRes<T> {
  onDelete: (url: string, param?: HeaderParams) => void;
}

export const useGet = <T = any>(): IGetApiRes<T> => {
  const [response, setResponse] = React.useState<T | null>(null);
  const [error, setError] = React.useState<AxiosError | null>(null);
  const [loading, setloading] = React.useState<boolean>(false);

  const onGet = React.useCallback(async (url: string, param?: HeaderParams) => {
    let isSubscribed = true;
    setloading(true);
    setError(null);
    const source = axios.CancelToken.source();
    await getDataAsync(isSubscribed, url, param);
    return () => {
      source.cancel('Cancelling in cleanup');
      console.log('Cancelling in cleanup');
      setloading(false);
      setError(null);
      setResponse(null);
      isSubscribed = false;
    };
  }, []);

  const getDataAsync = async (isSubscribed: boolean, url: string, param?: HeaderParams) => {
    const _header = getHeaders(param);
    await axios
      .get(url, _header)
      .then((res: AxiosResponse<IBseApiResponse>) => {
        if (!isSubscribed) return;
        setResponse(res.data.data);
      })
      .catch(err => {
        if (!isSubscribed) return;
        if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data);
          return;
        }
        setError(err.toJSON());
      })
      .finally(() => {
        if (!isSubscribed) return;
        setloading(false);
      });
  };

  return { response, error, loading, onGet };
};

export const usePost = <T = any, R = any>(): IPostApiRes<R> => {
  const [response, setResponse] = React.useState<R | null>(null);
  const [error, setError] = React.useState<AxiosError | null>(null);
  const [loading, setloading] = React.useState<boolean>(false);

  const onPost = React.useCallback(async (url: string, _data: T, param?: HeaderParams) => {
    let isSubscribed = true;
    setloading(true);
    const source = axios.CancelToken.source();
    await postDataAsync(isSubscribed, url, _data, param);
    return () => {
      source.cancel('Cancelling in cleanup');
      console.log('Cancelling in cleanup');
      setloading(false);
      setError(null);
      setResponse(null);
      isSubscribed = false;
    };
  }, []);

  const postDataAsync = async (isSubscribed: boolean, url: string, _data: T, param?: HeaderParams) => {
    const _header = getHeaders(param);
    const data = JSON.stringify(_data);
    await axios
      .post(url, data, _header)
      .then((res: AxiosResponse<IBseApiResponse>) => {
        if (!isSubscribed) return;
        setResponse(res.data.data);
      })
      .catch(err => {
        if (!isSubscribed) return;
        if (err.response && err.response.data) {
          setError(err.response.data);
          return;
        }
        setError(err.toJSON());
      })
      .finally(() => {
        if (!isSubscribed) return;
        setloading(false);
      });
  };

  return { response, error, loading, onPost };
};

export const usePut = <T = any, R = any>(): IPutApiRes<R> => {
  const [response, setResponse] = React.useState<R | null>(null);
  const [error, setError] = React.useState<AxiosError | null>(null);
  const [loading, setloading] = React.useState<boolean>(false);

  const onPut = React.useCallback(async (url: string, _data: T, param?: HeaderParams) => {
    let isSubscribed = true;
    setloading(true);
    const source = axios.CancelToken.source();
    await putDataAsync(isSubscribed, url, _data, param);
    return () => {
      source.cancel('Cancelling in cleanup');
      console.log('Cancelling in cleanup');
      setloading(false);
      setError(null);
      setResponse(null);
      isSubscribed = false;
    };
  }, []);

  const putDataAsync = async (isSubscribed: boolean, url: string, _data: T, param?: HeaderParams) => {
    const _header = getHeaders(param);
    const data = JSON.stringify(_data);
    await axios
      .put(url, data, _header)
      .then((res: AxiosResponse<IBseApiResponse>) => {
        if (!isSubscribed) return;
        setResponse(res.data.data);
      })
      .catch(err => {
        if (!isSubscribed) return;
        if (err.response && err.response.data) {
          setError(err.response.data);
          return;
        }
        setError(err.toJSON());
      })
      .finally(() => {
        if (!isSubscribed) return;
        setloading(false);
      });
  };

  return { response, error, loading, onPut };
};

export const usePatch = <T = any, R = any>(): IPatchApiRes<R> => {
  const [response, setResponse] = React.useState<R | null>(null);
  const [error, setError] = React.useState<AxiosError | null>(null);
  const [loading, setloading] = React.useState<boolean>(false);

  const onPatch = React.useCallback(async (url: string, _data: T, param?: HeaderParams) => {
    let isSubscribed = true;
    setloading(true);
    const source = axios.CancelToken.source();
    await patchDataAsync(isSubscribed, url, _data, param);
    return () => {
      source.cancel('Cancelling in cleanup');
      console.log('Cancelling in cleanup');
      setloading(false);
      setError(null);
      setResponse(null);
      isSubscribed = false;
    };
  }, []);

  const patchDataAsync = async (isSubscribed: boolean, url: string, _data: T, param?: HeaderParams) => {
    const _header = getHeaders(param);
    const data = JSON.stringify(_data);
    await axios
      .patch(url, data, _header)
      .then((res: AxiosResponse<IBseApiResponse>) => {
        if (!isSubscribed) return;
        setResponse(res.data.data);
      })
      .catch(err => {
        if (!isSubscribed) return;
        if (err.response && err.response.data) {
          setError(err.response.data);
          return;
        }
        setError(err.toJSON());
      })
      .finally(() => {
        if (!isSubscribed) return;
        setloading(false);
      });
  };

  return { response, error, loading, onPatch };
};

export const useDelete = <T = any>(): IDeleteApiRes<T> => {
  const [response, setResponse] = React.useState<T | null>(null);
  const [error, setError] = React.useState<AxiosError | null>(null);
  const [loading, setloading] = React.useState<boolean>(false);

  const onDelete = React.useCallback(async (url: string, param?: HeaderParams) => {
    let isSubscribed = true;
    setloading(true);
    const source = axios.CancelToken.source();
    await deleteDataAsync(isSubscribed, url, param);
    return () => {
      source.cancel('Cancelling in cleanup');
      console.log('Cancelling in cleanup');
      setloading(false);
      setError(null);
      setResponse(null);
      isSubscribed = false;
    };
  }, []);

  const deleteDataAsync = async (isSubscribed: boolean, url: string, param?: HeaderParams) => {
    const _header = getHeaders(param);
    await axios
      .delete(url, _header)
      .then((res: AxiosResponse<IBseApiResponse>) => {
        if (!isSubscribed) return;
        setResponse(res.data.data);
      })
      .catch(err => {
        if (!isSubscribed) return;
        if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data);
          return;
        }
        setError(err.toJSON());
      })
      .finally(() => {
        if (!isSubscribed) return;
        setloading(false);
      });
  };

  return { response, error, loading, onDelete };
};
