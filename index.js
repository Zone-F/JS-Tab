//ID选择器函数
function $(id) {
    return typeof id==='string'?document.getElementById(id):id
}
window.onload = function () {
    //获取操作目标
    var list = $('tab-list').getElementsByTagName("li")
    var content = $('content').getElementsByTagName("img")
    window.nowId =3 //tab当前索引
    //自动切换定时器
    var time = setInterval(autoChange,3000)
    //自动切换函数
    function autoChange() {
        window.nowId +=1
        if(window.nowId>=4){window.nowId = 0}
        changeStyle()
    }
    // 设置定时器
    for(var i=0;i<list.length;i++){
        list[i].id = i
        content[i].id = i
        //为每个TAB选项卡添加鼠标移入事件
        list[i].onmouseover=function () {
            window.clearInterval(time)  //停止tab自动切换
            window.nowId= parseInt(this.id)
            //延迟半秒执行
            setTimeout(function (){
                changeStyle()
            },500)
        }
        list[i].onmouseout=function () {
            //鼠标移出，自动切换继续
            time=setInterval(autoChange,3000)
        }
    }
    //更换样式的函数
    function changeStyle() {
        for (var j=0;j<list.length;j++) {
            list[j].className=''
            content[j].style.display='none'
        }
        list[window.nowId].className='select'
        content[window.nowId].style.display='block'
    }
}