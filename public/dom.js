const input = document.querySelector('#input');
const cb = (data) => {
  const filterdData = data.filter((Element) => Element.startsWith(input.value));
  return filterdData;
};
const requestSearchData = () => {
  // eslint-disable-next-line no-undef
  requestData('/input', (data) => cb(data));
};
input.addEventListener('input', requestSearchData);
