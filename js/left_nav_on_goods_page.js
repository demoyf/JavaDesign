/**
 * Created by alone on 2017/5/14.
 */
var pingguo = createObject(1, '苹果');
var sanxing = createObject(2, '三星');
var xiaomi = createObject(3, '小米');
var huawei = createObject(4, '华为');
var zhongxing = createObject(5, '中兴');
var lianxiang = createObject(6, '联想');
var meizhu = createObject(7, '魅族');
var qitas = createObject(8, '其他');
var erjis = createObject(9, '耳机');
var shouji = new Object();
shouji.name = '手机';
shouji.content = [pingguo, sanxing, xiaomi, huawei, zhongxing, lianxiang, meizhu, qitas, erjis];
var putongxiangji = createObject(10, '普通相机');
var danfan = createObject(11, '单反');
var qitax = createObject(12, '其他');
var content = [putongxiangji, danfan, qitax];
var xiangji = createType('相机', content);
var bijiben = createObject(13, '笔记本');
var pingban = createObject(14, '平板电脑');
var taishi = createObject(15, '台式电脑');
var xianshiqi = createObject(16, '显示器');
var shubiao = createObject(17, '鼠标');
var yingpan = createObject(18, '硬盘');
var upan = createObject(19, 'U盘');
var yidongyingpan = createObject(20, '移动硬盘');
var qitad = createObject(21, '其他');
var content1 = [bijiben, pingban, taishi, xianshiqi, shubiao,
    yingpan, upan, yidongyingpan, qitad];
var diannao = createType('电脑', content1);
var xiyiji = createObject(22, '洗衣机');
var yinshuiji = createObject(23, '饮水机');
var chuifengji = createObject(24, '吹风机');
var tixudao = createObject(25, '剃须刀');
var fengshan = createObject(26, '风扇');
var zhudanqi = createObject(27, '煮蛋器');
var diancilu = createObject(28, '电磁炉');
var dianfanbao = createObject(29, '电饭煲');
var qitaj = createObject(30, '其他');
var content2 = [xiyiji, yinshuiji, chuifengji, tixudao,
    fengshan, zhudanqi, diancilu, dianfanbao, qitaj];
var jiadian = createType('家电', content2);
var erjiy = createObject(31, '耳机');
var yinxiang = createObject(32, '音响');
var gongfang = createObject(33, '功放');
var diyingpao = createObject(34, '低音炮');
var maikefeng = createObject(35, '麦克风');
var content3 = [erjiy, yinxiang, gongfang, diyingpao, maikefeng];
var yingyin = createType('影音', content3);
var shangyi = createObject(36, '上衣');
var kuzi = createObject(37, '裤子');
var qunzi = createObject(38, '裙子');
var qitan = createObject(39, '其他');
var content4 = [shangyi, kuzi, qunzi, qitan];
var nvzhuang = createType('女装', content4);
var shangyin = createObject(40, '上衣');
var kuzin = createObject(41, '裤子');
var qitanan = createObject(42, '其他');
var content5 = [shangyin, kuzin, qitanan];
var nanzhuang = createType('男装', content5);
var yundongxie = createObject(43, '运动鞋');
var pixie = createObject(44, '皮鞋');
var fanbuxie = createObject(45, '帆布鞋');
var qiuxie = createObject(46, '球鞋');
var banxie = createObject(47, '板鞋');
var qitaxie = createObject(48, '其他');
var content6 = [yundongxie, pixie, fanbuxie, qiuxie, banxie, qitaxie];
var nvxie = createType('女鞋', content6);
var yundongxienan = createObject(49, '运动鞋');
var pixienan = createObject(50, '皮鞋');
var fanbuxienan = createObject(51, '帆布鞋');
var qiuxienan = createObject(52, '球鞋');
var banxienan = createObject(53, '板鞋');
var qitaxienan = createObject(54, '其他');
var content7 = [yundongxienan, pixienan, fanbuxienan, qiuxienan, banxienan, qitaxienan];
var nanxie = createType('男鞋', content7);
var beibao = createObject(55, '背包');
var lvxingxiang = createObject(56, '旅行箱');
var qitaxiang = createObject(57, '其他');
var content8 = [beibao, lvxingxiang, qitaxiang];
var xiangbao = createType('箱包', content8);
var jixiebiao = createObject(58, '机械表');
var shiyingbiao = createObject(59, '石英表');
var dianzibiao = createObject(60, '电子表');
var qitabiao = createObject(61, '其他');
var content9 = [jixiebiao, shiyingbiao, dianzibiao, qitabiao];
var shoubiao = createType('手表', content9);
var zuqiu = createObject(62, '足球');
var yumaoqiupai = createObject(63, '羽毛球拍');
var wangqiupai = createObject(64, '网球拍');
var lanqiu = createObject(65, '篮球');
var lunhua = createObject(66, '轮滑');
var bingbangqiupai = createObject(67, '乒乓球拍');
var huaban = createObject(68, '滑板');
var qitaqixie = createObject(69, '其他');
var content10 = [zuqiu, yumaoqiupai, wangqiupai, lanqiu, lunhua, bingbangqiupai, huaban, qitaqixie];
var qicai = createType('器材', content10);
var zixingche = createObject(70, '自行车');
var diandongche = createObject(71, '电动车');
var qitadaibu = createObject(72, '其他');
var content11 = [zixingche, diandongche, qitadaibu];
var daibu = createType('代步', content11);
var wenxue = createObject(73, '文学');
var manhua = createObject(74, '漫画');
var xiaoshuo = createObject(75, '小说');
var qitaxiuyang = createObject(76, '其他');
var content12 = [wenxue, manhua, xiaoshuo, qitaxiuyang];
var xiuyang = createType('修养', content12);
var shengwu = createObject(77, '生物');
var huaxue = createObject(78, '化学');
var wuli = createObject(79, '物理');
var yuwen = createObject(80, '语文');
var waiyu = createObject(81, '外语');
var shuxue = createObject(82, '数学');
var zhengzhi = createObject(83, '政治');
var lishi = createObject(84, '历史');
var dili = createObject(85, '地理');
var jisuanji = createObject(86, '计算机');
var jixie = createObject(87, '机械');
var tumu = createObject(88, '土木');
var yishu = createObject(89, '艺术');
var qitashu = createObject(90, '其他');
var content13 = [shengwu, huaxue, wuli, yuwen, waiyu, shuxue, zhengzhi, lishi, dili,
    jisuanji, jixie, tumu, yishu, qitashu];
var zhuanye = createType('专业', content13);
var bi = createObject(91, '笔');
var qitawenju = createObject(92, '其他');
var content14 = [bi, qitawenju];
var wenju = createType('文具', content14);
var qitaqita = createObject(94, '其他');
var content15 = [qitaqita];
var qitaA = createType('其他', content15);
var type_list = [[shouji, xiangji, diannao], [jiadian, yingyin],
    [nvzhuang, nanzhuang, nvxie, nanxie, xiangbao, shoubiao], [qicai, daibu]
    , [xiuyang, zhuanye, wenju], [qitaA]];
function createObject(id, name) {
    var temp = new Object();
    temp.id = id;
    temp.name = name;
    return temp;
}
function createType(name, content) {
    var temp = new Object();
    temp.name = name;
    temp.content = content;
    return temp;
}
$(function () {
    $(window).scroll(function () {
        var temp = $(this).scrollTop();
        if (temp>100) {
            $('.type_content').css({"margin-top":"8%"});
        }else{
            $('.type_content').css({"margin-top":"15%"});
        }
    });
    $('.my_type_div ul li').hover(function () {
        var temp_class = $(this).attr("class")
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
});
function hideParticular() {
    if ($('.particular_type_div').is(":visible")) {
        $('.particular_type_div').hide(0);
    }
}