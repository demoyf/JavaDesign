/**
 * Created by alone on 2017/5/14.
 */
$(function () {
    var type_list = getTypeList();
    $(window).scroll(function () {
        var temp = $(this).scrollTop();
        if (temp>100) {
            $('.my_type_div').css({"margin-top":"8%"});
            $('.particular_type_div').css({"margin-top":"8%"});
        }else{
            $('.my_type_div').css({"margin-top":"15%"});
            $('.particular_type_div').css({"margin-top":"15%"});
        }
    });
    $('.my_type_div ul li').hover(function () {
        var temp_class = $(this).attr("class");
        if (temp_class == 'type_1') {
            addList(0);
        } else if (temp_class == 'type_2') {
            addList(1);
        } else if (temp_class == 'type_3') {
            addList(2);
        } else if (temp_class == 'type_4') {
            addList(3);
        } else if (temp_class == 'type_5') {
            addList(4);
        } else if (temp_class == 'type_6') {
            addList(5);
        }
        function addList(id) {
            var which = type_list[id];
            var my_string = "";
            for (j = 0; j < which.length; j++) {
                var type_i = which[j];
                var arr = type_i.content;
                var a_list = "";
                for (i = 0; i < arr.length; i++) {
                    a_list += "<a id = '" + arr[i].id + "' href='#'>" + arr[i].name + "</a>";
                }
                my_string += "<div class='one_part'><div class='type_title_div'>" +
                    "<span class='type_border_span'>1</span><h3>" + type_i.name + "</h3></div><div " +
                    "class='type_goods_list'>" + a_list + "</div></div>";
            }
            $('.particular_type_div').html(my_string);
        }
        $('.particular_type_div').show(0);
    });
    $('header').click(function () {
        hideParticular();
    });

    //new
    bindClick();
    //  直接点击页数
    function bindClick() {
        $('.pagination_div ul li').click(function () {
            var cur = $(".pagination_div ul li.current_page").children("a").html();
            $(".pagination_div ul li.current_page").removeClass("current_page");
            $(this).addClass("current_page");
            //  点击的页数
            var which_click = $(this).children("a").html();
            //  在if里面处理
            if (cur!=which_click) {

            }
        });
    }

    //  上一页
    $('.pagination_lt').click(function () {
        var current = $('.pagination_div ul li.current_page');
        var temp = current.children("a").html();
        //  已经达到最左边，再点无反应
        if (temp==1) {
            return false;
        }
        updateCurrent(current,1,temp);
        //      这个就是当前的页数
        var current_page = $('.pagination_div ul li.current_page').children("a").html();

    });
    //下一页
    $('.pagination_gt').click(function () {
        var current = $('.pagination_div ul li.current_page');
        var temp = current.children("a").html();
        // 到达最右边
        if (temp==99) {
            return false;
        }
        updateCurrent(current,2,temp);
        var current_page = $('.pagination_div ul li.current_page').children("a").html();
        //      通过这个current_page 来获取数据

    });

    // temp 当前的值（1,2,3,4...）
    function updateCurrent(current,to,temp) {
    //    1左，2右
        var num = current.nextAll().length;
        if (to==1) {
            if (num==4) {
                current.siblings(":last").remove();
                current.before("<li><a>"+(temp-1)+"</a></li>");
            }
            if (num==3) {
                if (!(temp-2<1)) {
                    current.siblings(":last").remove();
                    current.siblings(":first").before("<li><a>"+(temp-2)+"</a></li>");
                }
            }
            current.removeClass("current_page");
            current.prev().addClass("current_page");
        }else {
            if (num==0) {
                current.siblings(":first").remove();
                current.after("<li><a>"+(parseInt(temp)+1)+"</a></li>");
            }
            if (num==1) {
                current.siblings(":first").remove();
                current.siblings(":last").after("<li><a>"+(parseInt(temp)+2)+"</a></li>");
            }
            current.removeClass("current_page");
            current.next().addClass("current_page");
        }
        bindClick();
    }
});
function hideParticular() {
    if ($('.particular_type_div').is(":visible")) {
        $('.particular_type_div').hide(0);
    }
}