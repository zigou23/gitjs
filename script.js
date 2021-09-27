let darkMode = localStorage.getItem("darkMode");

function enableDarkMode() {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
  enableDarkMode();
}

// Listeners

const darkModeToggle = document.querySelector("#dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "enabled" ? enableDarkMode() : disableDarkMode();
});

//运行时间
function show_date_time(){
  window.setTimeout("show_date_time()", 1000);
  var OpenDay=new Date("09-01-2021 10:00:00");//建站日期 月日年 & month dd,yyyy hh:mm:ss & yyyy,mth,dd,hh,mm,ss
  var today=new Date();
  var timeold=(today.getTime()-OpenDay.getTime());
  var sectimeold=timeold/1000
  var secondsold=Math.floor(sectimeold);
  var msPerDay=24*60*60*1000
  var e_daysold=timeold/msPerDay
  var daysold=Math.floor(e_daysold);
  var e_hrsold=(daysold-e_daysold)*-24;
  var hrsold=Math.floor(e_hrsold);
  var e_minsold=(hrsold-e_hrsold)*-60;
  var minsold=Math.floor((hrsold-e_hrsold)*-60);
  var seconds=Math.floor((minsold-e_minsold)*-60);
  document.getElementById("momk").innerHTML=daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒" ;
}
show_date_time();
//Google translate
