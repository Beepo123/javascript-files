function buttons(className){
  // only 1 button will be on at a time
  let classNames = ['js-gaming-button', 'js-music-button', 'js-tech-button']
  let newArray = classNames.filter(item => item !== className);

  let buttonElements = document.querySelector(`.${className}`);
  buttonElements.classList.add('button-clicked');
  
  document.querySelector(`.${newArray[0]}`).classList.remove('button-clicked');
  document.querySelector(`.${newArray[1]}`).classList.remove('button-clicked');
  }