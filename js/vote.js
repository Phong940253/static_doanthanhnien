function buttonSubmitAjax() {
    $("#btnSubmit").click(function () {
        var url = $("#vote-ajax").data('url');
        var itemId = $("input:checked").val();
        $.ajax({
            url: url,
            type: 'Get',
            async: false,
            cache: false,
            timeout: 20000,
            data: { itemID: itemId },
            beforeSend: function () {
                $('.vote-item-list').append('<img class="td-loader-gif td-loader-animation-start" style="height:64px" src="/Content/images/AjaxLoader.gif" alt=""/>');
            },

            success: function (data) {
                $('.vote-item-list').html('');
                $('.vote-item-list').append(data);
                $('.format-number').each(function () {
                    $(this).html(addCommas($(this).html()));
                });
            },
            error: function () {
            }
        }).done(function () {
            buttonSubmitAjax();

        });
    });
}

$('.format-number').each(function () {
    $(this).html(addCommas($(this).html()));
});
function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

