(function ($, Drupal) {

    'use strict';

    Drupal.behaviors.messageAudio = {
        attach: function (context, settings) {
            $('audio').mediaelementplayer();
        }
    };

})(jQuery, Drupal);
