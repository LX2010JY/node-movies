$(function () {
    $('.del').click(function (e) {
        var id = $(this).attr('target');
        alert('Delete Success !');
        var tr = $('.item-id-'+id);
        $.ajax({
            type:'DELETE',
            url:'/admin/list?id='+id
        }).done(function (results) {
            if(results.success === 1){
                if(tr.length>0) {
                    tr.remove();
                }
            }

        })
    })
})