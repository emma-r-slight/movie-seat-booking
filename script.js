const container = document.querySelector('.container')
const seat = document.querySelectorAll('.row.seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value
