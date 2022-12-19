export const getFromBase64 = (str: string) => {
  if (!str) {
    return null;
  }
  return JSON.parse(fromBase64(str));
};

export const getToBase64 = (data: any) => {
  if (!data) {
    return null;
  }
  return toBase64(JSON.stringify(data));
};

export const toBase64 = (str: string) => window.btoa(unescape(encodeURIComponent(str)));
export const fromBase64 = (str: string) => decodeURIComponent(escape(window.atob(str)));

export const selectUnselectObject = (obj: Object | null, value: any) => {
  const _obj = obj ? JSON.parse(JSON.stringify(obj)) : {};
  if (!_obj.hasOwnProperty(value)) {
    _obj[value] = value;
    return _obj;
  }
  delete _obj[value];
  return _obj;
}