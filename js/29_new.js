$(function () {
    let divWidth = $("#sliderBoard").width()
    let imgCount = $("#content li").length

    // alert(imgCount)知道li數量
    for(let i = 0; i < imgCount; i++){
        $("contentButton").append(`<li></li>`)
    }
    $("#contentButton li:first").addClass("clicked")
    $("#content li").width(divWidth)//li寬度
    $("#content").width(divWidth * imgCount)//ul寬度

    let index = 0;
    setInterval(moveToNext, 5000)/*物件=setInterval(函數,毫秒) */

    $("#contentButton li").click(function(){
        clearInterval(timer)
        index = $(this).index()

        $("#content").animate({
        left: divWidth * index * -1,
    })
        $(this).addClass("clicked")
        $("#contentButton li").not(this).removeClass("clicked")

        timer = setInterval(moveToNext, 5000)
    })

    function moveToNext(){
        if(index < imgCount - 1){
            index++
        }else{
            index = 0
        }

        $("#content").animate({
            left: divWidth * index * -1,
        })
        $(`#contentButton li:eq(${index})`).addClass("clicked")
        $("#contentButton li").not(`eq(${index})`).removeClass("clicked")
    }

    
});