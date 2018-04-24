$(".searcher-tab").click(function(){
    $(".searcher-tab.searcher-tab-is-active").toggleClass("searcher-tab-is-active");
    $(this).toggleClass("searcher-tab-is-active");
})

// slider 1
var range_1 = -520;
setInterval(function(){
    $(".slider-1").css("transform", "translate3d(" + range_1 + "px,0px,0px)");
    range_1 -= 520;
    if(range_1 == -2600){
        range_1 = 0;
    }
}, 5000);

//slider-2
var range_2 = -520;
var index = 2;
var pre_index = 1;
var prefix = "slider-bar-";
setInterval(function(){
    // picture
    $(".slider-2").css("transform", "translate3d(" + range_2 + "px,0px,0px)");
    range_2 -= 520;
    if(range_2 == -3120){
        range_2 = 0;
    }
    var id = prefix + index.toString();
    $("#" + id).toggleClass("slider-bar-active");
    index++;
    if(index == 7){
        index = 1;
    }
    // slider-bar
    id = prefix + pre_index.toString();
    $("#" + id).toggleClass("slider-bar-active"); 
    pre_index++;
    if(pre_index == 7){
        pre_index = 1;
    }

    //counter
    var count = index - 1;
    if(count == 0){
        count = 6;
    }
    $(".counter").text(count.toString() + "/6");
}, 5500);

// slider-3
var range_3 = -67;
setInterval(function(){
    $(".slider-3").css("transform", "translate3d(0px," + range_3 + "px,0px)");
    range_3 -= 67;
    if(range_3 == -201){
        range_3 = 0;
    }
}, 3000)

$(".enter").hover(function(){
    
    $(".enter.selected").toggleClass("selected");
    $(".mod").toggleClass("hidden");
    index = $(this).index();

    $(this).toggleClass("selected");
    var ul = $(".mod.hidden").eq(0);
    alert(ul.count());

    $(ul).toggleClass("hidden");
    var range = index * 50;
    $(ul).css("transform", "translate3d(0px," + range + "px, 0px)");
});