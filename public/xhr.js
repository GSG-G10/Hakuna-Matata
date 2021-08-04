// eslint-disable-next-line no-unused-vars
const requestData = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      cb(data);
    }
  };
  xhr.open('GET', url);
  xhr.send();
};
