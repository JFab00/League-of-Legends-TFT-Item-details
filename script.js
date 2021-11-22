$(document).ready(function(){
    $('#items td').hover(function(){
        var colIndex = $(this).parent().children().index($(this));
        var rowIndex = $(this).parent().parent().children().index($(this).parent());
        var td = $("#items tr:nth-child("+(rowIndex+1)+") td:nth-child("+(colIndex+1)+")");
        var img = td.children().attr("src");
        var text = td.children().text();
        $(".details img").attr("src",img);
        $(".details p").html(text);
    });
    $('#items td').mouseover(function(){
        var colIndex = $(this).parent().children().index($(this));
        var rowIndex = $(this).parent().parent().children().index($(this).parent());
        var td = $("#items tr td:nth-child("+(colIndex+1)+")");
        var td2 = $("#items tr:nth-child("+(rowIndex+1)+")");
        var img = td.children().attr("src");
        var text = td.children().text();
        td.toggleClass("row");
        td2.toggleClass("row");
    });
    
    $('#items td').mouseout(function(){
        var colIndex = $(this).parent().children().index($(this));
        var rowIndex = $(this).parent().parent().children().index($(this).parent());
        var td = $("#items tr td:nth-child("+(colIndex+1)+")");
        var td2 = $("#items tr:nth-child("+(rowIndex+1)+")");
        var img = td.children().attr("src");
        var text = td.children().text();
        td.toggleClass("row");
        td2.toggleClass("row");
    });
    
});