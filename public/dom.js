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
  const { value } = input;
  const url = `https://api.unsplash.com/search/photos?query=${value}&client_id=Xw0_H9EaR9eOtHEmztLccgh6FXz0a9cZH7Efo5XOssM`;
  // eslint-disable-next-line no-undef
  requestData(url, (data) => {
    results.textContent = null;
    const imagePath = data.results[0].urls.full;
    const img = createNode('img', 'result-img', results);
    img.src = imagePath;
  });
};

const requestSearchData = () => {
  // eslint-disable-next-line no-undef
  requestData('/input', (data) => {
    const filteredData = data.filter((element) => element.startsWith(input.value));
    dataList.textContent = null;
    for (let i = 0; i < Math.min(5, filteredData.length); i += 1) {
      const option = createNode('option', 'auto-option', dataList);
      option.value = filteredData[i];
    }
  });
};

input.addEventListener('input', requestSearchData);
input.addEventListener('change', resoultImg);
