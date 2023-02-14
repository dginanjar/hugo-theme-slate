import '../css/style.css'

if ((!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  localStorage.theme = 'dark'
}

toggle(localStorage.theme)

document.querySelectorAll('[data-toggle=theme]').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    localStorage.theme = (localStorage.theme == 'light' ? 'dark' : 'light')

    toggle(localStorage.theme)
  })
})

function toggle(theme) {
  document.querySelectorAll('[data-toggle=theme]').forEach((btn) => {
    btn.classList.add('hidden')
  })

  if (theme == 'dark') {
    document.documentElement.classList.add('dark')
    document.querySelectorAll('[data-theme=dark]').forEach((btn) => { btn.classList.remove('hidden') })
  } else {
    document.documentElement.classList.remove('dark')
    document.querySelectorAll('[data-theme=light]').forEach((btn) => { btn.classList.remove('hidden') })
  }
}