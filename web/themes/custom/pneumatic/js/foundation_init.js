/**
 * @file
 * Initializes foundation's JavaScript.
 *
 */
(function ($, Drupal) {

    /**
     * Initializes foundation's JavaScript for new content added to the page.
     */
    Drupal.behaviors.foundationInit = {
        attach: function (context, settings) {
            $(context).foundation();
        }
    };

    /**
     * Adds the "active" class to top bar <li> elements with active child links.
     */
    Drupal.behaviors.foundationTopBarActive = {
        attach: function (context, settings) {
            var $active_links = $(context).find('.top-bar .menu-item > a.is-active');
            if ($active_links.length) {
                $active_links.once('foundationTopBarActive').each(function() {
                    $(this).parent().addClass('active');
                });
            }
        }
    };

    /**
     * Displays status messages in a Foundation reveal modal.
     */
    Drupal.behaviors.foundationStatusInReveal = {
        attach: function (context, settings) {
            $('#status-messages').once('foundation-reveal').each(function() {
                // Move the status messages out of the highlighted region.
                var $messages = $(this);
                // var $region = $messages.parent();
                // $messages.appendTo('body');
                $messages.foundation('open');

                // This is required as this region will likely be empty after status
                // messages are removed.
                // $region.html($region.html().replace(/\n/g, ''));
            });
        }
    };

    Drupal.behaviors.common = {
        attach: function (context, settings) {
            var siteTitle = jQuery('.site-title__text-wrap');
            var siteImage = jQuery('.site-title__logo');
            if (siteTitle.length) {
              var rightEdge = siteTitle.position().left + siteTitle.width();
              siteImage.css({'position': 'absolute', 'left':rightEdge - 50 + 'px'});
            }

        }
    }

})(jQuery, Drupal);
