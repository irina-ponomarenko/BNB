// Helper function
let update_handle_track_pos;

update_handle_track_pos = function(slider, ui_handle_pos) {
    let fontSize, handle_track_xoffset, left, slider_range_inverse_width, top;
    handle_track_xoffset = -((ui_handle_pos / 100) * slider.clientWidth);
    $(slider).find(".handle-track").css("left", handle_track_xoffset);
    fontSize = ui_handle_pos / 5 + 5;
    top = -27 - (ui_handle_pos / 8);
    left = -3 - (ui_handle_pos / 75);
    console.log(ui_handle_pos, handle_track_xoffset);
    $(slider).find(".fire").css("fontSize", fontSize + "px").css("top", top + "px").css("left", left + "px");
    slider_range_inverse_width = (100 - ui_handle_pos) + "%";
    return $(slider).find(".slider-range-inverse").css("width", slider_range_inverse_width);
};

// Init slider
$("#js-slider").slider({
    range: "min",
    max: 100,
    value: 50,
    create: function(event, ui) {
        let slider;
        slider = $(event.target);

        // Append the slider handle with a center dot and it's own track
        slider.find('.ui-slider-handle').append('<span class="mark">20</span><span class="dot"><span class="handle-track"></span></span>');

        // Append the slider with an inverse range
        slider.prepend('<div class="slider-range-inverse"></div>');

        // Set initial dimensions
        slider.find(".handle-track").css("width", event.target.clientWidth);

        // Set initial position for tracks
        return update_handle_track_pos(event.target, $(this).slider("value"));
    },
    slide: function(event, ui) {
        // Update position of tracks
        return update_handle_track_pos(event.target, ui.value);
    }
});