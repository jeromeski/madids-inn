document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#submit').addEventListener('click', function(e) {
    e.preventDefault()
    showLoader()
    
  })
});

const showLoader = () => {
  const loading = document.querySelector('.loading')
  const site = document.querySelector('#site')

  loading.classList.add('loading--active')
  site.className ='site--hidden'

  setTimeout(function() {
    hideLoader(loading, site)
  }, 2000)
}

const hideLoader = (loading, site) => {
  loading.classList.remove('loading--active')
  site.classList.remove('site--hidden')
  const inputField = document.getElementsByClassName('input-field')
  // inputField.forEach((input) => {
  //   input.value = ''
  // })
}