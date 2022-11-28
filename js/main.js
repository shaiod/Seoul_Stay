window.addEventListener('load',()=>{

// 헤더 내려오게 하기

const gnbMenu = document.querySelectorAll(".gnb>ul>li");
const headerWrap = document.querySelector(".header_wrap");
var subMenu = document.querySelectorAll('.gnb>ul>li>ul');


for(var i=0; i<gnbMenu.length;i++){
    gnbMenu[i].addEventListener('mouseover',()=>{
       headerWrap.classList.add("on");
       subMenu.forEach(item=>{
       item.classList.add("on");
       })
    }); //mouseover
    gnbMenu[i].addEventListener('mouseout', () =>{
        headerWrap.classList.remove("on");
        subMenu.forEach(item=>{
        item.classList.remove("on");
      })
    });
    gnbMenu[i].children[0].addEventListener('focus', () =>{
        headerWrap.classList.remove("on");
        subMenu.forEach(item=>{
        item.classList.remove("on");
      })
    });
    gnbMenu[i].children[0].addEventListener('blur', () =>{
        headerWrap.classList.remove("on");
        subMenu.forEach(item=>{
        item.classList.remove("on");
      })
    });
};

//스크롤시 헤더색상 변경
const header_head = document.querySelector("nav.gnb");
const headerlogo = document.querySelector("nav.gnb>h3 img");
const header_color = document.querySelector("nav.gnb>ul>li>a")
const header_color2 = document.querySelector("nav.gnb>ul>li:nth-child(2)>a")
const header_color3 = document.querySelector("nav.gnb>ul>li:nth-child(3)>a")
const header_color4 = document.querySelector("nav.gnb>ul>li:nth-child(4)>a")
const header_color5 = document.querySelector("nav.gnb>ul>li:nth-child(5)>a")
const headerHeight = headerWrap.getBoundingClientRect().height;
 
window.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
      header_head.setAttribute("style", "background: white;");
      headerlogo.setAttribute("style","content: url(../img/logo_on.png);");
      headerWrap.setAttribute("style","box-shadow: 1px 2px 4px #222;");
      header_color.setAttribute("style", "color: black;");
      header_color2.setAttribute("style", "color: black;");
      header_color3.setAttribute("style", "color: black;");
      header_color4.setAttribute("style", "color: black;");
      header_color5.setAttribute("style", "color: black;");
   } else {
      
    header_head.setAttribute("style", "background: transparent;");
    headerlogo.setAttribute("style","background:;");
    headerWrap.setAttribute("style","box-shadow: transparent;");
    header_color.setAttribute("style","color:;");
    header_color2.setAttribute("style", "color: ;");
    header_color3.setAttribute("style", "color: ;");
    header_color4.setAttribute("style", "color: ;");
    header_color5.setAttribute("style", "color: ;");
    header_menu.setAttribute("style","background: ;");
     }
});

// 한꺼번에 적용하는 법 찾아보기

// 공지사항 부분


const btnTop = document.querySelector('.btn_top');
const btnBottom = document.querySelector('.btn_bottom');
const InfoPlus = document.querySelector('.info_plus');
const InfoSection = document.querySelectorAll('.info_plus>li');

let bnnW = document.querySelector('.info_plus>li').offsetHeight;
window.addEventListener('resize',()=>{
    bnnW = document.querySelector('.info_plus>li').offsetHeight;
})

let bnnNum = 0;
let lastNum = InfoSection.length -1;


// top 버튼
btnTop.addEventListener('click',e=>{
    e.preventDefault();
    bnnNum--;
    if(bnnNum<0) bnnNum=lastNum;
    InfoPlus.style.top = `${-bnnNum * bnnW}px`;
});

// bottom 버튼

btnBottom.addEventListener('click',e=>{
    e.preventDefault();
    bnnNum++;
    if(bnnNum>lastNum) bnnNum = 0;
    InfoPlus.style.top = `${-bnnNum * bnnW}px`;
});

});