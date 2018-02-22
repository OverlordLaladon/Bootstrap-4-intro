$(document).ready(function(){
    $("#mycarousel").carousel({interval: 2000});
    $("#carousel-button").click(function(){
        if($("#carousel-button").children("span").hasClass('fa-pause'))
        {
        $("#mycarousel").carousel('pause');
        $("#carousel-button").children("span").removeClass('fa-pause');
        $("#carousel-button").children("span").addClass('fa-play');
        }
        else if($("#carousel-button").children("span").hasClass('fa-play'))
        {
        $("#mycarousel").carousel('cycle');
        $("#carousel-button").children("span").removeClass('fa-play');
        $("#carousel-button").children("span").addClass('fa-pause');
        }
    });
    $('#loginModallink').click(function(){
        $('#loginModal').modal('show');
    })
    ;
    $('#loginModalclose').click(function(){
        $('#loginModal').modal('hide');
    })
    ;
    $('#loginModalCancel').click(function(){
        $('#loginModal').modal('hide');
    })
    ;
    $('#reserveModalBtn').click(function(){
        $('#reserveModal').modal('show');
    })
    ;
    $('#reserveModalClose').click(function(){
        $('#reserveModal').modal('hide');
    })
    ;
    $('#reserveModalCancel').click(function(){
        $('#reserveModal').modal('hide');
    })
    ;
});


/* teszt
$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-pause").click(function(){
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });
});

$('#loginModal').click(function(){
    $('#loginModal').modal(options)
})
;
*/