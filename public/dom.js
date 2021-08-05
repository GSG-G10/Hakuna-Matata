const input = document.querySelector('#input');
const dataList = document.querySelector('#hakuna-search');
const results = document.querySelector('.search-output');

const createNode = (tag, className, parentNode) => {
  const tagName = document.createElement(tag);
  tagName.classList.add(className);
  parentNode.appendChild(tagName);
  return tagName;
};

const resoultImg = () => {
  const value = input.value.trim()
  const url = `https://api.unsplash.com/search/photos?query=${value}&client_id=Xw0_H9EaR9eOtHEmztLccgh6FXz0a9cZH7Efo5XOssM`;
  // eslint-disable-next-line no-undef
  requestData(url, (error, data) => {
    if (error) {
      results.textContent = "Server Error";
      return;
    }
    if (data.results.length == 0) {
      results.textContent = "No data to show!"
    } else {
      results.textContent = null;
      const imagePath = data.results[0].urls.full;
      const img = createNode('img', 'result-img', results);
      img.src = imagePath;
    }
  }, (loading) => {
    if (loading === true) {
      results.textContent = "Loading..."
    }
  });
};

const requestSearchData = () => {
  // eslint-disable-next-line no-undef
  requestData('/input', (error, data) => {
    const value1 = input.value.trim()
    if (value1 !== "") {
      const filteredData = data.filter((element) => element.startsWith(value1));
      dataList.textContent = null;
    for (let i = 0; i < Math.min(5, filteredData.length); i += 1) {
      const option = createNode('option', 'auto-option', dataList);
      option.value = filteredData[i];
     
        
    }
    } else {
      dataList.textContent = null;
    }
    
  }, (loading) => {
  });
};

input.addEventListener('input', requestSearchData);
input.addEventListener('change', resoultImg);
