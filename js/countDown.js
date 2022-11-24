
let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31]
let today = new Date()
let year = today.getFullYear()
let month = today.getMonth()

/*  先完成第二功能，实现获取这个月还剩下多少天的功能 */
if((year%4==0 && year%100 != 0)||year % 400 == 0){
    monthDays[1] = 29  //如果是闰年的话，将2月修改为29天
}

let currentDays = monthDays[month]
let cdDatePercent = today.getDate()/currentDays.toFixed(2)*100+"%"
let countDownDate = currentDays - today.getDate()
let monthP = document.querySelector(".month p")
monthP.textContent = `这个月只剩下${countDownDate}天，
                        已经过去了${cdDatePercent}的时间!`

/* 先完成第一个功能吧，获取一天内还剩下多少时间（精确到分钟）

*/

