module.exports = {

    re: [
        /^https?:\/\/storify\.com\/([a-zA-Z0-9\-]+)\/([a-zA-Z0-9\-]+)/i
    ],

    mixins: [
        "og-title",
        "og-site",
        "favicon"
    ],

    getMeta: function(meta) {

        if (meta.storifyapp) return {
            "author_url": meta.storifyapp.author
        }
    },

    // TODO: add max-width.
    // TODO: add iframe event to parent: update size.

    getLink: function(meta) {

        var src = meta.canonical.replace('http:', '') + '.js';

        return {
            type: CONFIG.T.text_html,
            rel: CONFIG.R.reader,
            template: "embed-html",
            template_context: {
                title: meta.og.title,
                html: '<script type="text/javascript" src="' + src + '"></script>'
            },
            "orientation": 'portrait',
            "min-width": 320
        };
    },

    tests: [{
        feed: "http://storify.com/rss/featured"
    },
        "https://storify.com/miniver/our-leaders-willfully-wrong-response-to-the-econom/"
    ]
};