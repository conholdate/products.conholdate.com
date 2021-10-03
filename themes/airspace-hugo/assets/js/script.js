$(document).ready(function () {
	'use strict';

	$('.testimonial-slider').slick({
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});

	// Turn cloaked e-mail addresses into clickable mailto links
    let emailSpans = document.getElementsByClassName("cloaked-e-mail");

    for (let emailSpan of emailSpans) {
        let emailLink = document.createElement("a");
        let emailAddress = emailSpan.attributes.getNamedItem("data-user").value.split('').reverse().join('') + "@" + emailSpan.attributes.getNamedItem("data-domain").value.split('').reverse().join('');
        emailLink.href = "mailto:" + emailAddress;
        emailLink.innerText = emailAddress;
        emailSpan.parentElement.insertBefore(emailLink, emailSpan);
        emailSpan.parentElement.removeChild(emailSpan)
    }
});
