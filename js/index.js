//模糊查询
let keyword = document.querySelector('.keyword');

let searchHelper = document.querySelector('.search-helper');

let searchArr = ['纯情猫娘杯','柔情猫娘卜够爽杯','网易春风杯','傻杯'];

keyword.oninput = function(){
    searchHelper.innerHTML = '';
    for(let i = 0;i < searchArr.length;i++){
        if(searchArr[i].indexOf(keyword.value)!=-1){
            searchHelper.innerHTML += '<p>'+ searchArr[i] +'</p>';
            searchHelper.style.display = 'block';
        }
    } 
}
keyword.onblur = function(){
    searchHelper.style.display = 'none';
}

// 轮播图切换

let img = document.querySelector('.img')

let imgArr = ['银花1.png','银花2.png','银花3.png','银花4.png']

let next = document.querySelector('.next')

let prev = document.querySelector('.prev')

let slide = document.querySelector('.slide')

let lis = document.querySelectorAll('.banner-btn li')
let count = 0

function cutImg(){
    img.src = './image/' + imgArr[count];
    for(i=0;i<lis.length;i++){
        lis[i].className = '';
    }
    lis[count].className = 'active';
}

let timer = setInterval(function(){
count++;
if(count>imgArr.length-1){
    count= 0;
}
cutImg();
},3000)

// 左右切图
next.onclick = function(){
    img.src = './image/' + imgArr[count++];
    if(count>imgArr.length-1){
    count= 0;
}
cutImg();
}

prev.onclick = function(){
    img.src = './image/' + imgArr[count--];
    if(count<0){
    count= 0;
}
cutImg();
}


slide.onmouseover = function(){
    clearInterval(timer);
}

slide.onmouseout = function(){
    timer = setInterval(function(){
count++;
if(count>imgArr.length-1){
    count= 0;
}
cutImg();
},3000)
}

// li摁扭点击
for(let i =0;i<lis.length;i++)
[
    lis[i].onclick = function(){
        count = i;
        cutImg();
    }
]

// 滚动条
let header = document.querySelector('.header')

let banner = document.querySelector('.banner')

let elevtor = document.querySelector('.elevtor')

let headerHeight = header.offsetHeight;

let bannerHeight = banner.offsetHeight;

document.onscroll = function(){
    let top = document.documentElement.scrollTop;
    // 判断是否变成固定定位
if (top>= headerHeight + bannerHeight){
   elevtor.className = 'elevtor elevtor-fix';
}else{
    elevtor.className = 'elevtor';
}
}







