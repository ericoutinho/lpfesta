const scroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        $(".navbar-brand img").css("height","44");
        $(".navbar").css("background-color","rgba(0,0,0,0.8)");
    } else {
        $(".navbar-brand img").css("height","64");
        $(".navbar").css("background-color","rgba(0,0,0,0.1)");
    }
}

window.onscroll = () => {scroll()};

