// eslint-disable-next-line no-unused-vars
const requestData = (url, cb, load) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    let loading = true;
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        loading = false;
        load(loading);
        cb(null, data);
      } else {
        cb("Error");
      }
    } else {
        load(loading)
    }
  };
  xhr.open('GET', url);
  xhr.send();
};