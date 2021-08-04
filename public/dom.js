const input = document.querySelector('#input');
const dataList = document.querySelector('#hakuna-search');
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
