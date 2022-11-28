


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
const header_color = document.querySelector("nav.gnb>ul>li>a")
const headerHeight = headerWrap.getBoundingClientRect().height;
 
window.addEventListener("scroll", () => {
      if (window.scrollY > headerHeight) {
        header_head.setAttribute("style", "background: white;");
        headerWrap.setAttribute("style","box-shadow: 1px 2px 4px #222;");
   } else {
      
    header_head.setAttribute("style", "background: transparent;");
    headerWrap.setAttribute("style","box-shadow: 1px 2px 4px #222;");
    header_color.setAttribute("style","color:;");
     }
});

