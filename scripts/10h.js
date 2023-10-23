function costKeyDown(event){
    if(event.key === 'Enter'){
    calculate();
    }
  }

  function subscribe(){
    const buttonElement = document.querySelector('.js-subscribe-button');
    if (buttonElement.innerText === 'Subscribe'){
      buttonElement.innerText = 'Subscribed'
      buttonElement.classList.add('is-subscribed');
    } else {
      buttonElement.innerText = 'Subscribe'
      buttonElement.classList.remove('is-subscribed');
    }
  };

  function calculate(){
    let inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value)
    let totalCost = 0;

    if (cost < 0) {
        document.querySelector('.js-totalCost').innerHTML = `Error: cost cannot be less than $0`;
        return
    } else if (cost < 40) {
        totalCost = cost + 10
    } else {
        totalCost = cost
    }

    document.querySelector('.js-totalCost').innerHTML = `$${totalCost}`;
  }