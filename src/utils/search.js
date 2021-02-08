export const searchFilter = function myFunction() {
  const input = document.getElementById('search')
  const filter = input.value.toUpperCase()
  const ul = document.querySelector('.section-cards')
  const cardBlock = ul.getElementsByTagName('article')
  let i = 0
  let cardContent = ''
  let txtValue = ''

  for (i = 0; i < cardBlock.length; i++) {
    cardContent = cardBlock[i].getElementsByTagName('a')[0]
    txtValue = cardContent.textContent || cardContent.innerText

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      cardBlock[i].style.display = ''
    } else {
      cardBlock[i].style.display = 'none'
    }
  }
}
