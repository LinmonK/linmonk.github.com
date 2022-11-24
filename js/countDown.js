
let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31]
let today = new Date()
let year = today.getFullYear()
let month = today.getMonth()
let day = today.getDate()
/*  先完成第二功能，实现获取这个月还剩下多少天的功能 */
if((year%4==0 && year%100 != 0)||year % 400 == 0){
    monthDays[1] = 29  //如果是闰年的话，将2月修改为29天
}

let currentDays = monthDays[month]
let cdDatePercent = (day/currentDays).toFixed(3)*100+"%"//toFIxed 将number类型保留n位小数四舍五入
let countDownDate = currentDays - day
let monthP = document.querySelector(".month p")
monthP.textContent = `这个月只剩下${countDownDate}天，
                        已经过去了${cdDatePercent}的时间!`

/* 再完成第三个功能吧，获取一年内还剩下多少时间（精确到天数）*/
// 先获取过去的那些月过去的天数
let lastDays = 0
for(let i = 0;i < month;i ++){
    lastDays +=monthDays[i]
}
lastDays += day
let currentYearDays = monthDays[1] == 28?365:366
let cdYearDays = currentYearDays - lastDays
let cdYearPercent = (lastDays/currentYearDays).toFixed(3)*100+"%"

let yearP = document.querySelector(".year p")
yearP.textContent = `今年只剩下${cdYearDays}天，
                        已经过去了${cdYearPercent}的时间!`


/* 再完成第四个功能吧，获取人生还剩下多少天（考虑之后通过设置生日和预期寿命来修改）*/

let currentAge = 19
let prospectiveAge = 80
let remainDays = (prospectiveAge-currentAge)*365
let remainDaysPercent = (currentAge/prospectiveAge).toFixed(3)*100+"%"
let lifeP = document.querySelector(".life p")
lifeP.textContent = `人生只剩下${remainDays}天，
                        已经过去了${remainDaysPercent}的时间!`


setTimeout(function dayTimeout(){
    let remainHour = 23-today.getHours()
    let remainMinute = 59-today.getMinutes()
    let dayP = document.querySelector(".day p")
    dayP.textContent = `今天只剩下${remainHour}时，${remainMinute}分钟！`
    console.log(remainHour,remainMinute)
    setTimeout(dayTimeout,1000)
},1000)



