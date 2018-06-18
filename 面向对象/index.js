window.onload = function () {
    function Tab(titleID,contentID) {
        //此时this指向Tab
        var list = document.getElementById(titleID).getElementsByTagName("li")
        var content = document.getElementById(contentID).getElementsByTagName("img")
        for(var i=0;i<list.length;i++){

            list[i].id = i
            content[i].id = i

            list[i].onmouseover=function () {
                // 此时this指向的是list[i]节点
                for (var j=0;j<list.length;j++) {
                    list[j].className=''
                    content[j].style.display='none'
                }
                list[this.id].className='select'
                content[this.id].style.display='block'
            }
        }
    }
    // window.Tab = Tab
    var myTab = new Tab("tab-list","content")
    var myTab2 = new Tab("tab-list2","content2")
}

