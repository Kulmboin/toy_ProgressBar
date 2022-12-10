const foodContainer = document.querySelector(".food-container");
const progressBar = document.querySelector(".progress-bar");

let timerId;

const throttle = (callback, time) => {
  if (timerId) return;
  timerId = setTimeout(() => {
    callback();
    timerId = undefined;
  }, time);
};

const onScroll = () => {
  const scrollLeft = foodContainer.scrollLeft;
  const width = foodContainer.scrollWidth - foodContainer.clientWidth;

  const scrollWidth = (scrollLeft / width) * 100;

  progressBar.style.width = scrollWidth + "%";
};

foodContainer.addEventListener("scroll", () => {
  throttle(onScroll, 25);
});
