var jquery = require('jquery');

module.exports = {

    re: /http:\/\/www\.collegehumor\.com\/(video|embed)\.*/,

    // TODO: add predefined size for og-image: 640x360.

    mixins: [
        "oembed-title",
        "oembed-site",
        "oembed-thumbnail"
    ],

    getLink: function(oembed) {

        var $container = jquery('<div>');
        try{
            $container.html(oembed.html);
        } catch(ex) {}

        var src = $container.find('object').attr('data');

        if (src) {
            return [{
                href: src,
                type: CONFIG.T.flash,
                rel: CONFIG.R.player,
                "aspect-ratio": oembed.width / oembed.height
            }, {
                href: "//www.collegehumor.com/favicon.ico?v=2",
                type: CONFIG.T.image,
                rel: CONFIG.R.icon
            }];
        }
    },

    tests: [{
        pageWithFeed: "http://www.collegehumor.com/videos"
    },
        "http://www.collegehumor.com/video/6853117/look-at-this-instagram-nickelback-parody"
    ]
};