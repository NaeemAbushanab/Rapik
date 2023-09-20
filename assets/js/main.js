
var nav_link = document.querySelectorAll('.navbar .nav-link');
for(var i = 0; i < nav_link.length; i++){
  nav_link[i].addEventListener('click', function(){
    var current = document.querySelectorAll('.navbar .active');
    if(current.length>0){
        current[0].classList.remove('active');
    }
    this.classList.add('active');
  })
}
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var header_contnet = document.getElementById('header-contnet');
var header_offsetTop = header_contnet.offsetTop+100;
var isEnter=false;
function myFunction() {
  if (window.scrollY >= 50 && window.matchMedia("(min-width: 992px)").matches) {
    navbar.classList.add('fixed-top')
    header_contnet.style.paddingTop=`${header_offsetTop}px`;
  } 
  else if(window.matchMedia("(min-width: 992px)").matches) {
    navbar.classList.remove("fixed-top");
    header_contnet.style.paddingTop=`100px`;
  }

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var progress = document.getElementById("progress");
  var scrolled = (winScroll / height) * 100;
  if(document.documentElement.scrollTop >= 200){
    progress.style.cssText=`
    display: block;
    background: conic-gradient(rgb(18, 165, 117) ${scrolled}%, rgb(215, 215, 215) ${scrolled}%);
    `
  }
  else{
    document.getElementById("progress").style.cssText=`
    display: none;
    `
  }
    var current = document.querySelectorAll('.navbar .active');
    if(current.length>0 ){
        if(current[0].classList.contains('dropdown-toggle')){
            document.querySelector('.overview-btn').style.cssText=`
            color: var(--main-color);
            `
        }
        else{
            document.querySelector('.overview-btn').style.cssText=`
            color: black;
            `
        }
        
    }
    

    if(isEnter == false){
      if(current.length>0){
        if(current[0].innerHTML == 'Faq’s'){
          isEnter=true;
          var count_style = document.querySelectorAll('.count-style h4');
          var arr_count=[];
          for(var i=0;i<count_style.length;i++){
            arr_count.push(Number(count_style[i].innerHTML))
          }
          
          for(var i=0;i<count_style.length;i++){
            (function(i){
              var start = 0;
              setInterval(function(){
                if(start == arr_count[i]+1){
                  clearInterval();
                }
                else{
                  count_style[i].innerHTML=start
                  start++
                }
              },(4000/arr_count[i]))
            })(i);
          }
        }
      }
    }
}

dropdown_item = document.querySelectorAll('.dropdown-item');
for(var i=0;i<dropdown_item.length;i++){
    dropdown_item[i].addEventListener('click',function(){
        if(this.classList.contains('overview-btn')){
            window.location.href ='index.html#services'
        }
        else{
            window.location.href = `service.html?ser=${this.innerHTML}`
        }
    })
}
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
      body.style.cssText=`
          overflow:hidden;          
          `;
          document.querySelector(".cont-loader").style.cssText=`
          padding-right:10px; 
            `;
      }
  else {
      document.querySelector(
          ".cont-loader").style.cssText=`
          animation: naeem 1s cubic-bezier(0.86, 0, 0.09, 1);
          -webkit-animation: naeem 1s cubic-bezier(0.86, 0, 0.09, 1);
          display: none;
          `
          document.querySelector(
            "#loader").style.cssText=`
            display: none;
            `
        document.querySelector(
          "body").style.cssText=`
          overflow:visible;
          
          `;
  }
};

