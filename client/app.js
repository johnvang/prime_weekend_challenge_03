$(document).ready(function() {

    $.ajax({
        url: "/classdata"
    }).done(function (classData) {
        console.log(classData);

        var jcarousel = $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        var setup = function (classData) {
            var html = '<ul>';

            $.each(classData, function () {
                //html += '<li><img src="' + this.src + '" alt="' + this.title + '"></li>';
                html += "<li><p>" + this.name.bold() + "</p>" + "<p>" + this.description + "</p>" + "<p>" + "\"" + this.shoutout + "\"" + "</p></li>";
                //html += '<li class="name" >' + this.name + '</li>';
                //html += '<li class="description" >' + this.description + '</li>';
                //html += '<li class="shoutout" >' + this.shoutout + '</li>';
            });

            html += '</ul>';

            // Append items
            jcarousel.html(html);

            // Reload carousel
            jcarousel.jcarousel('reload');
        };

        $.getJSON('classData', setup);
    });
});