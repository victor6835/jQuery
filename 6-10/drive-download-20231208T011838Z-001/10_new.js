$(function () {
    //偵測div的font-size
    let currentSize = parseInt($("div").css("font-size"))
    // alert(currentSize)

    $("#shrink").click(function () {
        changeSize('small')  //呼叫
    })
    $("#enlarge").click(function () {
        changeSize('big')       //呼叫
    })

    function changeSize(size) {//宣告；定義
        let currentSize = parseInt($("div").css("font-size"))

        if(size == 'small'){
            newSize = currentSize -2 
        }else{
            newSize = currentSize +2
        }
        $('div').css('font-size', newSize)
    }
});
/*
// 函數三部曲:宣告；定義；呼叫
1. 不傳參數，沒有傳回值
function action() {//宣告；定義
    console.log(100);
}

action()//呼叫
2. 有傳參數，沒有傳回值
function action(n) {//宣告；定義
    console.log(100 * n);
}
action()//呼叫

3. 有傳參數，有傳回值
function action(n) {//宣告；定義
    console.log(100 * n);
}
action()//呼叫

4. 不傳參數，有傳回值
function action(n) {//宣告；定義
    console.log(100 * n);
}
action()//呼叫
*/