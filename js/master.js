var ismobile = $(window).width() < 1010; var istablet = ismobile && $(window).width() >= 768;

/* mobile */
if (ismobile) {
    
    $("#flip").click(function () {
        if ($('#panel').hasClass('on')) { $('.site-wrap, footer').show(0, function () { $('body').scrollTop($('body').data('scroll')); $("#panel").hide().removeClass('on').css('margin-top', ''); }); }
        else { $('body').data('scroll', $('body').scrollTop()); $('.site-wrap, footer').hide(); $('#panel').addClass('on').css('margin-top', '45px').show(); }
    });
    $('#accordion .nav-heading').click(function (e) {
        if ($(e.target).is('i.fa.fa-chevron-down')) {
        }else  {
            e.preventDefault(); e.stopPropagation(); var newloc = $(this).attr('catehref');
            //console.log(newloc); 
            if (newloc.indexOf('http') >= 0 && newloc.indexOf('thanhnien.vn')  < 0) {
                window.open(newloc, '_blank');
            } else {
                window.location = newloc;
            }
        }
    });
    $('img[msrc]').each(function () {
        $(this).hide(0).attr('src', $(this).attr('msrc')).show(0);
    });
    $('.simplebanner.banner:not([position$="Mobile"])').remove();
}
/* desktop */
if(!ismobile){
    if ($(window).height() < 830) {
        $('#navleft').on('affix.bs.affix', function () { $('#navleft').removeClass('forcehidden'); }).on('affix-top.bs.affix', function () { $('#navleft').addClass('forcehidden'); });
        $('#navright').on('affix.bs.affix', function () { $('#navright').removeClass('forcehidden'); }).on('affix-top.bs.affix', function () { $('#navright').addClass('forcehidden'); });
    } else {
        $('#navleft').removeClass('forcehidden');
        $('#navright').removeClass('forcehidden');
    }
    $.ajax({
        type: "GET",
        url: "/ajax/menu.aspx"
    }).done(function (msg) {
        $("<html/>").html(msg).find('div.zonemenu').each(function () {
            $('#mainmenu' + $(this).attr('zone')).append($(this).html());
        });
    });
    $('.simplebanner.banner[position$="Mobile"]').remove();
}
/* common */
$('.search-area').click(function (e) {
    e.preventDefault();
    $('.mega-search').toggle(); $('.mega-search:visible .txtsearch').focus();
});
$('.summary, .comment span').click(function (e) {
    if (e.target.nodeName.toLowerCase() != 'a') {
        e.preventDefault();
        var link = $(this).parents('article:first').find('h2 a');
        if (link.length == 0) { link = $(this).parents('article:first').find('header a'); }
        if (link.length == 0 && $(this).parents('.comment').length > 0) {
            link = $(this).parents('.comment').parents('article:first').find('h2 a');
            if (link.length == 0) { link = $(this).parents('.comment').parents('article:first').find('header a'); }
        }
        if (link.length > 0) {
            var loc = link.attr('href') + ($(this).hasClass('summary') ? '' : '#bl');
            if (loc.indexOf('http://thanhnien.vn/') == 0 || loc.indexOf('http') == 0) {
                if (link.attr('target') == '_blank') window.open(loc, '_blank');
                else window.location = loc;
            }
        }
    }
});
if ($('#breadcrumb').length > 0) {
    $('#breadcrumb li:not(:first) a').each(function () {
        var zid = $(this).attr('rel');
        $('#mainmenu a[rel=' + zid + ']').addClass("selected");
    });
}
$('#btnfbsend').click(function (e) {
    e.preventDefault();
    var name = $('#txtfbname').val();
    var email = $('#txtfbemail').val();
    var address = $('#txtfbaddress').val();
    var content = $('#txtfbcontent').val();
    if (name == '' || email == '' || content == '') {
        alert('Bạn chưa nhập đủ thông tin');
        return false;
    }
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
        alert('Địa chỉ email không hợp lệ.');
        return false;
    }
    $.ajax({
        type: "POST",
        url: "/ajax/feedback.aspx",
        data: { name: name, email: email, address: address, content: content, link: window.encodeURIComponent(window.location.toString()) }
    }).done(function (msg) {
        switch (msg) {
            case "invalid":
                alert("Bạn vui lòng nhập đủ các trường."); break;
            case "invalidemail":
                alert("Email không đúng."); break;
            case "soon":
                alert("Bạn vừa gửi góp ý ít phút trước đây. Xin vui lòng nghỉ ngơi một chút."); $('.md-overlay').click(); break;
            case "success":
                alert("Góp ý của bạn đã được ghi nhận. Xin cảm ơn bạn đã đóng góp.");
                $('#txtfbname,#txtfbemail,#txtfbaddress,#txtfbcontent').val('');
                $('.md-overlay').click();
                break;
            default:
                alert("Có lỗi xảy ra. Xin vui lòng thử lại.");
                break;
        }
    });
});
$('#btnerrsend').click(function (e) {
    e.preventDefault();
    var name = $('#txterrname').val();
    var email = $('#txterremail').val();
    var address = $('#txterraddress').val();
    var content = $('#txterrcontent').val();
    if (name == '' || email == '' || content == '') {
        alert('Bạn chưa nhập đủ thông tin');
        return false;
    }
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
        alert('Địa chỉ email không hợp lệ.');
        return false;
    }
    $.ajax({
        type: "POST",
        url: "/ajax/reportstory.aspx",
        data: { name: name, email: email, address: address, content: content, link: window.encodeURIComponent(window.location.toString()), id: $('#hdCurrentContent').val() }
    }).done(function (msg) {
        switch (msg) {
            case "invalid":
                alert("Bạn vui lòng nhập đủ các trường."); break;
            case "invalidemail":
                alert("Email không đúng."); break;
            case "soon":
                alert("Bạn vừa gửi báo lỗi ít phút trước đây. Xin vui lòng nghỉ ngơi một chút."); $('.md-overlay').click(); break;
            case "success":
                alert("Thông báo lỗi của bạn đã được ghi nhận. Xin cảm ơn bạn đã góp ý.");
                $('#txterrname,#txterremail,#txterraddress,#txterrcontent').val('');
                $('.md-overlay').click();
                break;
            default:
                alert("Có lỗi xảy ra. Xin vui lòng thử lại.");
                break;
        }
    });
});

if ($('.tuyensinh').length > 0) {
    $('.tuyensinh').click(function(e) {
        if ($(e.target).is('input') || $(e.target).is('button')) {
            //do nothing
        } else {
            e.preventDefault();
            $(this).find('button').click();
        }
    });
    $('.tuyensinh input').keypress(function(e) {
        if (e.which == 13) {
            e.preventDefault();
            $(this).parent().find('button').click();
        }
    });
    $('.tuyensinh button').click(function(e) {
        e.preventDefault();
        
        var $parent = $(this).parents('.tuyensinh:first');
        var keyword = $parent.find('input:text').val();
        //if (keyword == '') {
        //    window.alert('Bạn chưa nhập tên hoặc SBD!');
        //    return;
        //}
        var kythi = $parent.hasClass('lop10') ? "lop-10" : "thpt-quoc-gia";
        var nam = $parent.attr('rel');
        var loc = '/giao-duc/tuyen-sinh/' + nam + '/tra-cuu-diem-thi-' + kythi + '.html';
        if (window.location.toString().toLowerCase().indexOf(loc) >= 0) {
            $('#txtkeyword').val(keyword);
            $('#btnresult').click();
        } else {
            if (keyword != '') {
                loc = loc + '#' + window.encodeURIComponent(keyword);
            }
            window.location = loc;
        }
        
    });
}

if (ismobile) {
    if ($('#adsctl00_AdsHome12').children().length > 0) {
        $('#topbanner-mobile').css('position', '');
        var topadsheight = $('#adsctl00_AdsHome12').height() + 15;
        function scrollmenu() {
            var top = $(window).scrollTop();
            if (top < topadsheight) {
                $('#header_menu').css('top', (topadsheight - top) + 'px').addClass('done1').removeClass('done2'); //.addClass('done1');
            } else {
                if (!$('#header_menu').hasClass('done2')) $('#header_menu').css('top', '').addClass('done2');//.removeClass('done1');
            }
        }
        $(window).scroll(function () { scrollmenu(); });
        $(document).ready(function() { scrollmenu(); });
        if ($(window).scrollTop() > topadsheight) {
            $('#header_menu').hide().removeClass('done2');
        }
    }
}
