const input = document.querySelector('#input');
const dataList = document.querySelector('#hakuna-search');
const results = document.querySelector(".search-output")
const requestSearchData = () => {
  // eslint-disable-next-line no-undef
  requestData('/input', (data) => {
    const filteredData = data.filter((element) => element.startsWith(input.value));
    dataList.textContent = null;
    for (let i = 0; i < Math.min(5, filteredData.length); i += 1) {
      const option = document.createElement('option');
      option.value = filteredData[i];
      option.classList.add('auto-option');
      dataList.appendChild(option);
    }
  });
};
input.addEventListener('input', requestSearchData);

const resoultImg = () => {
  const value = input.value;
  const url = `https://api.unsplash.com/search/photos?query=${value}&client_id=Xw0_H9EaR9eOtHEmztLccgh6FXz0a9cZH7Efo5XOssM`
  requestData(url,(data) => {
   const imagePath = data.results[0].urls.full;
   const img = document.createElement('img');
   img.src = imagePath;
   img.classList.add('result-img');
   results.appendChild(img);
  })
}
input.addEventListener('change', resoultImg);
