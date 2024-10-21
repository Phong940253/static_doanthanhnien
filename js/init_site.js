
    var td_blocks = []; //here we store all the items for the current page

    //td_block class - each ajax block uses a object of this class for requests
    function td_block() {
        this.id = '';
        this.block_type = 1; //block type id (1-234 etc)
        this.atts = '';
        this.td_cur_cat = '';
        this.td_column_number = '';
        this.td_current_page = 1; //
        this.post_count = 0; //from wp
        this.found_posts = 0; //from wp
        this.max_num_pages = 0; //from wp
        this.is_ajax_running = false;
        this.header_color = '';
    }


    var td_ad_background_click_link = "";
    var td_ad_background_click_target = "";
    var td_ajax_url = "http://demo.tagdiv.com/newspaper/wp-admin/admin-ajax.php";
    var td_get_template_directory_uri = "http://demo.tagdiv.com/newspaper/wp-content/themes/008";
    var tds_snap_menu = "smart_snap_always";
    var tds_header_style = "";
    var tds_mobile_swipe = "";
    var td_search_url = "~/Category/Search";
    var td_please_wait = "Bạn đợi chút nhé...";
    var td_email_user_pass_incorrect = "Tài khoản hoặc mật khẩu của bạn không đúng!";
    var td_email_user_incorrect = "Email hoặc Tài khoản của bạn không đúng!";
    var td_email_incorrect = "EMail của bạn không đúng!";
    var tds_more_articles_on_post_enable = "";
    var tds_more_articles_on_post_time_to_wait = "";
    var tds_more_articles_on_post_pages_distance_from_top = "0";


    //themeforest iframe removal code - used only on demo
    var td_is_safari = false;
    var td_is_ios = false;
    var td_is_windows_phone = false;



    var ua = navigator.userAgent.toLowerCase();

    var td_is_android = ua.indexOf('android') > -1;

    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {

        } else {
            td_is_safari = true;
        }
    }

    if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
        td_is_ios = true;
    }

    if (navigator.userAgent.match(/Windows Phone/i)) {
        td_is_windows_phone = true;
    }

    if (td_is_ios || td_is_safari || td_is_windows_phone || td_is_android) {
        if (top.location != location) {
            top.location.replace('');
        }
    }

    $(document).ready(function () {
        
        $('.news-title-clamp').each(function (index, element) {
            $clamp(element, { clamp: 3, useNativeClamp: false });
        });
        $('#td-top-search').click(function () {
            $(this).children().children().addClass('open');
        });
        $('#td-header-search-top').click(function () {
            window.location = "<%= Url.Action('Search', 'Category', new { searchString=$('#td-header-search').val()})%>";
        });
       
        
    });
    


