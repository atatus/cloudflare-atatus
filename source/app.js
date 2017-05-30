(function() {

    var options = INSTALL_OPTIONS;
    // var isPreview = INSTALL_ID == "preview";

    if (!options.apikey) {
        return;
    }

    window._atatusConfig = {
        apikey: options.apikey
    };

    var init = function() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.crossorigin = "anonymous";
        script.src = "https://dmc1acwvwny3.cloudfront.net/atatus.js";
        var node = document.getElementsByTagName("script")[0];
        node.parentNode.insertBefore(script, node);
    };

    init();

})();