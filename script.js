const container = document.querySelector('.container')
const seat = document.querySelectorAll('.row.seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value

container.addEventListener('click', (e) => {
  console.log(e.target.classList)

  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected')
  }
  updateSelectedCount()
})
