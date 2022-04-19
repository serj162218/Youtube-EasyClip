// ==UserScript==
// @name         Youtube EasyClip
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description
// @author       MiyaMya
// @match        https://*.youtube.com/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    $(".ytp-gradient-top").css("display", "none");
    $(".ytp-chrome-top").css("display", "none");
    $(".ytp-chrome-bottom").css("display", "none");
    $(".ytp-gradient-bottom").css("display", "none");
    $(".ytp-ce-element").css("display", "none");
})();