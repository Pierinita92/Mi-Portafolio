
const container = document.querySelector('.navbar_Container')

const menu = document.getElementById('menu')

container.addEventListener('click', function (e) {
  if(e.target.matches('.buttonOpen')) {
    menu.classList.add('show--menu')
  }

  if(e.target.matches('.buttonClose')) {
    menu.classList.remove('show--menu')
  }

  if (e.target.matches('.menuLink')) {
    menu.classList.remove('show--menu')
  }
})

