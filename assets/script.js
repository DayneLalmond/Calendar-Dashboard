
var calendar = $('#edits');

var now = dayjs()

// day is day of the week starting with 0 = sunday
const day = dayjs().day()
const month = dayjs().month()+1
const date = dayjs().date()
const year = dayjs().year()

console.log(dayjs([month, date, year]).format('MMM/DD/YYYY'))

function getDays() {
  //getDays creates elements and applies classes for each number of days in the month
    var totalDays = dayjs().daysInMonth()
    console.log(totalDays);
    for(var i = 1; i <= totalDays; i ++) {
        var div = document.createElement('div');
        var article = document.createElement('article');
        div.classList.add('box', 'right-side')
        article.classList.add('tag', 'is-light')
        article.textContent = dayjs([month, i, year]).format('MMM, DD')
        calendar.append(div);
        div.append(article);
    }
  }
//the function is called here - can be changed if you want!
getDays();







