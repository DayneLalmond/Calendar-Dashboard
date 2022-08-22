
var calendar = $('#edits');

var now = dayjs()

// day is day of the week starting with 0 = sunday
const day = dayjs().day()
const month = dayjs().month()+1
const date = dayjs().date()
const year = dayjs().year()

// console.log(dayjs([month, date, year]).format('MMM/DD/YYYY'))

function getDays() {
  //getDays creates elements and applies classes for each number of days in the month
    var totalDays = dayjs().daysInMonth()
    for(var i = 1; i <= totalDays; i ++) {
        var div = document.createElement('div');
        var article = document.createElement('article');
        div.classList.add('box', 'right-side')
        article.classList.add('tag', 'is-light')
        article.textContent = dayjs([month, i]).format('MMM, DD')
        calendar.append(div);
        div.append(article);
        // the div elements are created for every day
        // the article elements are attached inside the divs
        showArticle(article, i)
        showDiv(div, i)
    }
  }
//the function is called here - can be changed if you want!
getDays()


function showArticle(article, i) {
  if (i === date) {
      article.classList.add('is-dark')}
  else {
      article.classList.remove('is-dark')}
}

function showDiv(div, i) {
  
  if (i === date) {
      div.classList.add('notification', 'is-success', 'label')
      div.classList.add('custom-highlight')
      }
      if (i < date) {
        div.remove();
        }
  else {
      div.classList.add('notification', 'is-primary', 'is-light')}
// the function below is called at the end of the if statements to correct the characteristics within the element
  check(div)
}

function check(div) {
  // if (enabled == true) {
    // this function allows the user to modify the calendar with the use of the text form and clicking on divs
    div.addEventListener("click", function() {
      var doc = document.createElement('li')
      var toDo = document.querySelector("#todo")
      doc.classList.add('content', 'is-small')
      doc.textContent = toDo.value
      div.append(doc)
  })
}
//   else {
//     console.log('asdasfd')
//   }
// }
