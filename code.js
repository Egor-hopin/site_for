"use strict";
document.addEventListener("DOMContentLoaded", allJS);
function allJS() {
    let nav_button = document.querySelector(".nav_button");
    let time = document.querySelector(".time");
    let line1 = document.querySelector(".nav_button .line:nth-child(1)");
    let line2 = document.querySelector(".nav_button .line:nth-child(2)");
    let line3 = document.querySelector(".nav_button .line:nth-child(3)");
    let line4 = document.querySelector(".nav_button .line:nth-child(4)");
    nav_button.addEventListener("click", toCross);
    function toCross () {
        line1.classList.toggle("line_1");
        line2.classList.toggle("line_2");
        line3.classList.toggle("line_3");
        line4.classList.toggle("line_4");
        time.classList.toggle("time_now");
        time.classList.toggle("time_1");
    }
    function changeTime () {
        let date = document.querySelector(".date");
        let now_date = document.querySelector(".now_date");
        const d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth();
        let day = d.getDate();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();
        if (month < 10) {month = `0${month + 1}`;}
        if (day < 10) {day = `0${day}`;}
        if (hours < 10) {hours = `0${hours}`;}
        if (minutes < 10) {minutes = `0${minutes}`;}
        if (seconds < 10) {seconds = `0${seconds}`;}
        date.innerHTML = `${day}:${month}:${year}`;
        now_date.innerHTML = `${hours}:${minutes}:${seconds}`;
        setTimeout(changeTime, 1000); 
    }
    changeTime();

    //Функция для таймера

    let href_1 = document.querySelector(".nav_menu ul li:nth-child(1)");
    let href_2 = document.querySelector(".nav_menu ul li:nth-child(2)");
    let href_3 = document.querySelector(".nav_menu ul li:nth-child(3)");
    let href_4 = document.querySelector(".nav_menu ul li:nth-child(4)");
    let href_5 = document.querySelector(".nav_menu ul li:nth-child(5)");
    let for_menu = document.querySelector(".for_menu");
    let for_contacts = document.querySelector(".for_contacts");
    let for_links = document.querySelector(".for_links");
    let for_services = document.querySelector(".for_services");
    let for_more = document.querySelector(".for_more");
        href_1.addEventListener("click", check1); 
        function check1 () {
            if (href_1.classList.contains("href_1")) {
                href_1.classList.remove("href_1");
                for_menu.classList.remove("for_menu_after");
            } else {
                href_1.classList.toggle("href_1");
                for_menu.classList.toggle("for_menu_after");
                href_2.classList.remove("href_2");
                for_contacts.classList.remove("for_contacts_after");
                href_3.classList.remove("href_3");
                for_links.classList.remove("for_links_after");
                href_4.classList.remove("href_4");
                for_services.classList.remove("for_services_after");
                href_5.classList.remove("href_5");
                for_more.classList.remove("for_more_after");
            }
        }
        href_2.addEventListener("click", check2);
        function check2 () {
            if (href_2.classList.contains("href_2")) {
                href_2.classList.remove("href_2");
                for_contacts.classList.remove("for_contacts_after");
            } else {
                href_2.classList.toggle("href_2");
                for_contacts.classList.toggle("for_contacts_after");
                href_1.classList.remove("href_1");
                for_menu.classList.remove("for_menu_after");
                href_3.classList.remove("href_3");
                for_links.classList.remove("for_links_after");
                href_4.classList.remove("href_4");
                for_services.classList.remove("for_services_after");
                href_5.classList.remove("href_5");
                for_more.classList.remove("for_more_after");
            }
        }
        href_3.addEventListener("click", check3);
        function check3 () {
            if (href_3.classList.contains("href_3")) {
                href_3.classList.remove("href_3");
                for_links.classList.remove("for_links_after");
            } else {
                href_3.classList.toggle("href_3");
                for_links.classList.toggle("for_links_after");
                href_1.classList.remove("href_1");
                for_menu.classList.remove("for_menu_after");
                href_2.classList.remove("href_2");
                for_contacts.classList.remove("for_contacts_after");
                href_4.classList.remove("href_4");
                for_services.classList.remove("for_services_after");
                href_5.classList.remove("href_5");
                for_more.classList.remove("for_more_after");
            }
        }
        href_4.addEventListener("click", check4);
        function check4 () {
            if (href_4.classList.contains("href_4")) {
                href_4.classList.remove("href_4");
                for_services.classList.remove("for_services_after");
            } else {
                href_4.classList.toggle("href_4");
                for_services.classList.toggle("for_services_after");
                href_3.classList.remove("href_3");
                for_links.classList.remove("for_links_after");
                href_1.classList.remove("href_1");
                for_menu.classList.remove("for_menu_after");
                href_2.classList.remove("href_2");
                for_contacts.classList.remove("for_contacts_after");
                href_5.classList.remove("href_5");
                for_more.classList.remove("for_more_after");
            }
        }
        href_5.addEventListener("click", check5);
        function check5 () {
            if (href_5.classList.contains("href_5")) {
                href_5.classList.remove("href_5");
                for_more.classList.remove("for_more_after");
            } else {
                href_5.classList.toggle("href_5");
                for_more.classList.toggle("for_more_after");
                href_4.classList.remove("href_4");
                for_services.classList.remove("for_services_after");
                href_3.classList.remove("href_3");
                for_links.classList.remove("for_links_after");
                href_1.classList.remove("href_1");
                for_menu.classList.remove("for_menu_after");
                href_2.classList.remove("href_2");
                for_contacts.classList.remove("for_contacts_after");
            }
        }

        //Функции для навигации

        let learn_more = document.getElementById("learn_more");
        let params = "width=800,height=400,left=100,top=200";
        learn_more.addEventListener("click", toOpenMore);
        function toOpenMore () {
            window.open("https://en.wikipedia.org/wiki/Libertarianism", "form_for_learn", params);
            learn_more.style.backgroundColor = "pink";
            learn_more.style.color = "black";

        }

        //Функция для поппапа

        let html = document.documentElement;
        let sun_switch = document.querySelector(".switch");
        sun_switch.addEventListener("click", switchStyle);
        function switchStyle() {
            sun_switch.classList.toggle("moon_switch");
            let main = document.querySelector("main");
            let aside = document.querySelector("aside");
            let header = document.querySelector("header");
            html.style.transition = "0.5s";
            main.style.transition = "0.5s";
            aside.style.transition = "0.5s";
            header.style.transition = "0.5s";
            if (html.style.backgroundColor == "black") {
                html.style.backgroundColor = "white";
            } else {
                html.style.backgroundColor = "black";
            }
            if (main.style.backgroundColor == "black") {
                main.style.backgroundColor = "white";
            } else {
                main.style.backgroundColor = "black";
            }
            if (aside.style.backgroundColor == "black") {
                aside.style.backgroundColor = "white";
            } else {
                aside.style.backgroundColor = "black";
            }
            if (header.style.backgroundColor == "black") {
                header.style.backgroundColor = "white";
            } else {
                header.style.backgroundColor = "black";
            }
        }

        //Функция для перключателя стилей

        let preloader = document.querySelector(".preloader");
        function removePreloader () {
            preloader.remove();
        }
        setTimeout(removePreloader, 3000);

        //Функция для удаления прелоадера

        let upper = document.querySelector(".upper");
        upper.addEventListener("click", toUpp);
        function toUpp () {
            window.scrollTo(0, 0);
        }

        window.addEventListener("scroll", showUp);
        function showUp () {
        if (document.documentElement.scrollTop < 30) {
            upper.classList.remove("upper_after");
        } else {
            upper.classList.add("upper_after");
        }
    }

    //Функции для стрелки

}