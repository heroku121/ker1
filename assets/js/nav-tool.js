"use strict";
jQuery, jQuery(document).ready(function(e) {
    0 < e(".close-side-widget").length && e(".close-side-widget").on("click", function(i) {
        i.preventDefault(), e(".cart-group").removeClass("isActive")
    }), 0 < e(".navSidebar-button").length && e(".navSidebar-button").on("click", function(i) {
        i.preventDefault(), i.stopPropagation(), e(".info-group").addClass("isActive")
    }), 0 < e(".close-side-widget").length && e(".close-side-widget").on("click", function(i) {
        i.preventDefault(), e(".info-group").removeClass("isActive")
    }), e(".off-canvas-overlay").on("click", function(i) {
        e(".info-group").removeClass("isActive"), e(".cart-group").removeClass("isActive")
    })
});