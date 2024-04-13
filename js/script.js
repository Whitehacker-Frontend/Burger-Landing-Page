let productCard = document.querySelectorAll('.product-content')
let headerBg = document.querySelector('.header-bg')
let a= 1
productCard.forEach(element => {
    if (a % 2 == 1){
        element.style = 'padding: 60px 50px;justify-content: end;'
    }
    else if  (a % 2 == 0){
        element.style = 'padding: 60px 50px;justify-content: start;'
    }
    a++;
});

const themes = {
    light: {
        '--bg': 'rgb(28, 28, 28)',
        '--text':'rgb(255, 255, 255)',
        '--content': 'rgb(49, 47, 48)',
    },
    dark: {
        '--bg':  'rgb(255, 255, 255)',
        '--text': 'rgb(28, 28, 28)',
        '--content': 'rgba(220, 208, 233, 1)',
    }
}

  let time = new Date();
  console.log(time);
  let hour = time.getHours();
  console.log(hour);
  function selectTheme() {
    let themeAttr = ''
    if (hour > 7 && hour < 18){
        themeAttr = 'dark';
        headerBg.src = './img/burger-bglight.jpg'
    }else{
        themeAttr = 'light';
        headerBg.src = './img/header-bg.png'

    }
    
    const themeObj = themes[themeAttr];
    let themeStr = ``;
    for (let key in themeObj){
      themeStr += `${key}: ${themeObj[key]};`
    }
    document.documentElement.style = themeStr;
  }
  selectTheme()