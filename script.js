const input = document.querySelector(".debounce");

const inputValue = (e) => {
  console.log(e.target.value);
};

const main = (fn, wait) => {
  let timer;
  return (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      debugger;
      fn(e);
    }, wait);
  };
};

let debounce = main(inputValue, 1000);

input.addEventListener("input", debounce);
