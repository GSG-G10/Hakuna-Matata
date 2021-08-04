const input = document.querySelector('#input');
input.addEventListener('input', () => {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      const result = data.filter((Element) => Element.startsWith(input.value));
    }
  };
  xhr.open('GET', '/input');
  xhr.send();
});
