// scrollbar
const scrollNavigate = (direction) => {
  const scrollableDiv = document.querySelector('#scrollable-div');
  if(direction == 'left'){
    scrollableDiv.scroll({
      left: scrollableDiv.scrollLeft + -500,
      behavior: 'smooth'
    });
  }
  else if (direction == 'right'){
    scrollableDiv.scroll({
      left: scrollableDiv.scrollLeft + 500,
      behavior: 'smooth'
    });
  }
}