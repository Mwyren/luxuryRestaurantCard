const rings = document.querySelector('.rings')


for(let i = 0; i < 10; i++){
  const ring = document.createElement('div')
  ring.classList.add('ring')
  rings.appendChild(ring)
}

