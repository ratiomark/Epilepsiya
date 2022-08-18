const main = document.querySelector('.main_test');
const centerDiv = document.querySelector('.center_div');
const header = document.querySelector('.header_epilepsiya');

console.log(main)
const arrayWithRows = []
const arrayWithColumns = []
const startButton = document.querySelector(".start_epilepsiya");
for (let row = 1; row < 8; row++) {
  // console.log(document.querySelector(`.row_${row}`));

  arrayWithRows.push(document.querySelector(`.row_${row}`))
  // arradocument.querySelector(`.row_${row}`)
  // let elem2 = document.querySelector('.main_test')
  // console.log(elem);
  // console.log(elem2);


}
// console.log(arrayWithRows);
for (const iterator of arrayWithRows) {
  // console.log(Array.from(iterator.getElementsByTagName('div')))
  // Array.from(iterator.getElementsByTagName('div'))
  Array.from(iterator.getElementsByTagName('div')).forEach((i) => arrayWithColumns.push(i))
  // console.log(iterator);
  // iterator.forEach(element => {
  //   console.log(element);

  // });
}

// console.log(arrayWithColumns);
function getColor() {
  const colors = [
    '#49A16C', '#FFF80A',
    '#FA2FB5', '#F498AD',
    '#1A5AD7', '#FF06B7',
    '#FFD829', '#282A2E',
    '#F7EC09', '#FF1E00'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}
function StartEpilepsiya() {
  for (let i = 0; i < 10; i++) {
    arrayWithColumns.forEach(i => i.setAttribute("style", `background-color:${getColor()}`))

  }
}

// setInterval(StartEpilepsiya, 50)
startButton.addEventListener('click', function () {
  startButton.remove()
  header.remove()
  setInterval(StartEpilepsiya, 24)
  // setTimeout(setInterval(StartEpilepsiya, 50), 50)
})