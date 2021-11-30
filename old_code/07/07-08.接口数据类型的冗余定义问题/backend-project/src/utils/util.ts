interface Result<T> {
  sucesss: boolean;
  errMsg?: string;
  data: T;
}

export const getResponseData = <T>(data: T, errMsg?: string): Result<T> => {
  if (errMsg) {
    return {
      sucesss: false,
      errMsg,
      data
    };
  }
  return {
    sucesss: true,
    data
  };
};
