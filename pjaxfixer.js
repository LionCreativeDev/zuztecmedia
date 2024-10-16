(function () {

    function VariableInjector(url) {
        if (url.includes("uxui.html")) {
            window.ASSETS = [
                'img/Portfolio-Page-img/AI-Influencer.webp',
                'img/Portfolio-Page-img/HomePage-1-NFT-Nexo.webp',
                'img/Portfolio-Page-img/XSport-Sneacker.webp',
                'img/Portfolio-Page-img/Sarrbet-Home.webp',
                'img/Portfolio-Page-img/Yoh-Sweet.webp',
                'img/Portfolio-Page-img/Seo-Landing-Page.webp',
            ]

            window.SLIDETITLE = [
                "<a href='uxui/ai-influencer.html' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>AI Influencer<\/a>",
                "<a href='uxui/xchain-nft.html' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Xchain Nft<\/a>",
                "<a href='uxui/xsport.html' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Xsport Sneakers<\/a>",
                "<a href='uxui/sarbett.html' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Sarbett<\/a>",
                "<a href='uxui/yoh-sweet.html' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Yoh Sweets<\/a>",
                "<a href='uxui/seo.html' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>SEO Landing Page<\/a>",
            ]

            window.SLIDESERVICE = [
                '<li>AI Influencer</li><li>Xchain Nft</li><li>Xsport Sneakers</li><li>Sarbett</li><li>Yoh Sweets</li><li>Seo Landing Page</li>',
                '<li>Xchain Nft</li><li>Xsport Sneakers</li><li>Sarbett</li><li>Yoh Sweets</li><li>Seo Landing Page</li><li>AI Influencer</li>',
                '<li>Xsport Sneakers</li><li>Sarbett</li><li>Yoh Sweets</li><li>Seo Landing Page</li><li>AI Influencer</li><li>Xchain Nft</li>',
                '<li>Sarbett</li><li>Yoh Sweets</li><li>Seo Landing Page</li><li>AI Influencer</li><li>Xchain Nft</li><li>Xsport Sneakers</li>',
                '<li>Yoh Sweets</li><li>Seo Landing Page</li><li>AI Influencer</li><li>Xchain Nft</li><li>Xsport Sneakers</li><li>Sarbett</li>',
                '<li>Seo Landing Page</li><li>AI Influencer</li><li>Xchain Nft</li><li>Xsport Sneakers</li><li>Sarbett</li><li>Yoh Sweets</li>',
            ]
        }
        else if (url.includes("webdevelopment.html")) {
            window.ASSETS = [
                'img/Portfolio-Page-img/modelcitizenfl-min.webp',
                'img/Portfolio-Page-img/irishealing-min-2.webp',
                'img/Portfolio-Page-img/brandnorth-min.webp',
                'img/Portfolio-Page-img/maazproperties-min.webp',
                'img/Portfolio-Page-img/opioid-rehab-min.webp',
                'img/Portfolio-Page-img/ylangylangbeachresort-min.webp',
            ]

            window.SLIDETITLE = [
                "<a href='webdevelopment/modalcitizen.html' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Model Citizen<\/a>",
                "<a href='webdevelopment/irishealing.html' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Iris Healing<\/a>",
                "<a href='webdevelopment/brandnorth.html' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Brand North<\/a>",
                "<a href='webdevelopment/Maaz Properties.html' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Maaz Properties<\/a>",
                "<a href='webdevelopment/opioid-rehab.html' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Opioid Rehab<\/a>",
                "<a href='webdevelopment/YlangyLangBeachResort.html' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Ylang Ylang Hotel<\/a>",
            ]

            window.SLIDESERVICE = [
                '<li>Model Citizen</li><li>Iris Healing</li><li>Brand North</li><li>Maaz Properties</li><li>Opioid Rehab</li><li>Ylang Ylang Hotel</li>',
                '<li>Iris Healing</li><li>Brand North</li><li>Maaz Properties</li><li>Opioid Rehab</li><li>Ylang Ylang Hotel</li><li>Model Citizen</li>',
                '<li>Brand North</li><li>Maaz Properties</li><li>Opioid Rehab</li><li>Ylang Ylang Hotel</li><li>Model Citizen</li><li>Iris Healing</li>',
                '<li>Maaz Properties</li><li>Opioid Rehab</li><li>Ylang Ylang Hotel</li><li>Model Citizen</li><li>Iris Healing</li><li>Brand North</li>',
                '<li>Opioid Rehab</li><li>Ylang Ylang Hotel</li><li>Model Citizen</li><li>Iris Healing</li><li>Brand North</li><li>Maaz Properties</li>',
                '<li>Ylang Ylang Hotel</li><li>Model Citizen</li><li>Iris Healing</li><li>Brand North</li><li>Maaz Properties</li><li>Opioid Rehab</li>',
            ]
        }
        else if (url.includes("branding.html")) {
            window.ASSETS = [
                'img/Portfolio-Page-img/DMotel-min.webp',
                'img/Portfolio-Page-img/irishealing-min.webp',
                'img/Portfolio-Page-img/beehealth-min.webp',
            ]

            window.SLIDETITLE = [
                "<a href='branding/dmotel.html' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>D Motel<\/a>",
                "<a href='branding/irisHealing.html' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Iris Healing<\/a>",
                "<a href='branding/beehealth.html' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Bee Health<\/a>",
            ]

            window.SLIDESERVICE = [
                '<li>D Motel</li><li>Iris Healing</li><li>Bee Health</li>',
                '<li>Iris Healing</li><li>Bee Health</li><li>D Motel</li>',
                '<li>Bee Health</li><li>D Motel</li><li>Iris Healing</li>',
            ]
        }
        else if (url.includes("work.html")) {
            window.ASSETS = [
                'img/work/moderncitizen.webp',
                'img/work/ylangylang.webp',
                'img/work/Iris-Healing.webp',
                'img/work/brand-north.webp',
                'img/work/maazproperies.webp',
            ]

            window.SLIDETITLE = [
                "<a target='_blank' href='https://modelcitizenfl.com' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Model Citizen<\/a>",
                "<a target='_blank' href='https://ylangylangbeachresort.com' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Ylang Ylang Hotel<\/a>",
                "<a target='_blank' href='https://irishealing.com' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Iris Healing<\/a>",
                "<a target='_blank' href='https://www.brandnorth.com' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Brand North<\/a>",
                "<a target='_blank' href='https://www.maazproperties.com' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Maaz Properties<\/a>",
            ]

            window.SLIDESERVICE = [
                '<li>Website Design<\/li><li>Animations<\/li><li>Creative Development<\/li><li>SEO<\/li>',
                '<li>Website Design<\/li><li>Animations<\/li><li>Creative Development<\/li><li>SEO<\/li>',
                '<li>Website Design<\/li><li>Development<\/li><li>Shopify<\/li><li>SEO<\/li>',
                '<li>Website Design<\/li><li>Animations<\/li><li>Creative Development<\/li><li>SEO<\/li>',
                '<li>Website Design<\/li><li>Animations<\/li><li>Creative Development<\/li><li>Marketing<\/li>',
                '<li>Website Design<\/li><li>Development<\/li><li>SEO<\/li>',
                '<li>Website Design<\/li><li>Animations<\/li>',
                '<li>Website Design<\/li><li>Animations<\/li><li>Creative Development<\/li><li>Shopify<\/li>',
                '<li>Website Design<\/li><li>Development<\/li><li>Marketing<\/li><li>SEO<\/li>',
            ]
        }
        else {
            window.ASSETS = [
                'img/work/moderncitizen.webp',
                'img/work/ylangylang.webp',
                'img/work/Iris-Healing.webp',
                'img/work/brand-north.webp',
                'img/work/maazproperies.webp',
            ]

            window.SLIDETITLE = [
                "<a target='_blank' href='https://modelcitizenfl.com' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Model Citizen<\/a>",
                "<a target='_blank' href='https://ylangylangbeachresort.com' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Ylang Ylang Hotel<\/a>",
                "<a target='_blank' href='https://irishealing.com' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Iris Healing<\/a>",
                "<a target='_blank' href='https://www.brandnorth.com' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Brand North<\/a>",
                "<a target='_blank' href='https://www.maazproperties.com' class='circle-link'><div class='circle-icon'><i><\/i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'><\/span><\/div>Maaz Properties<\/a>",
            ]

            window.SLIDESERVICE = [
                '<li>Website Design<\/li><li>Animations<\/li><li>Creative Development<\/li><li>SEO<\/li>',
                '<li>Website Design<\/li><li>Animations<\/li><li>Creative Development<\/li><li>SEO<\/li>',
                '<li>Website Design<\/li><li>Development<\/li><li>Shopify<\/li><li>SEO<\/li>',
                '<li>Website Design<\/li><li>Animations<\/li><li>Creative Development<\/li><li>SEO<\/li>',
                '<li>Website Design<\/li><li>Animations<\/li><li>Creative Development<\/li><li>Marketing<\/li>',
                '<li>Website Design<\/li><li>Development<\/li><li>SEO<\/li>',
                '<li>Website Design<\/li><li>Animations<\/li>',
                '<li>Website Design<\/li><li>Animations<\/li><li>Creative Development<\/li><li>Shopify<\/li>',
                '<li>Website Design<\/li><li>Development<\/li><li>Marketing<\/li><li>SEO<\/li>',
            ]
        }
    }

    // Save the original XMLHttpRequest open and send methods
    var originalOpen = XMLHttpRequest.prototype.open;
    var originalSend = XMLHttpRequest.prototype.send;

    // Global event handlers
    window.ajaxStartHandlers = [];
    window.ajaxCompleteHandlers = [];

    // Function to trigger ajaxStart events
    function triggerAjaxStart() {
        window.ajaxStartHandlers.forEach(function (handler) {
            handler();
        });
    }

    // Function to trigger ajaxComplete events
    function triggerAjaxComplete(xhr) {
        window.ajaxCompleteHandlers.forEach(function (handler) {
            handler(xhr);
        });
    }

    // Override the open method to add tracking
    XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
        console.log("Open before", window.ASSETS);
        console.log("url", url);
        VariableInjector(url);
        console.log("Open after", window.ASSETS);
        // setTimeout(() => {
            this._startTime = Date.now(); // Track start time
            triggerAjaxStart(); // Trigger global start handlers
            return originalOpen.apply(this, arguments);
        // }, 200)
    };

    // Override the send method to add tracking
    XMLHttpRequest.prototype.send = function (body) {
        console.log("Send", window.ASSETS);
        var xhr = this;
        var originalOnLoadEnd = this.onloadend;

        // Override onloadend to trigger the complete event
        this.onloadend = function () {
            if (originalOnLoadEnd) {
                originalOnLoadEnd.apply(this, arguments);
            }
            triggerAjaxComplete(xhr); // Trigger global complete handlers
        };

        return originalSend.apply(this, arguments);
    };

    // Add global event listener functions
    window.addGlobalAjaxStartListener = function (handler) {
        window.ajaxStartHandlers.push(handler);
    };

    window.addGlobalAjaxCompleteListener = function (handler) {
        window.ajaxCompleteHandlers.push(handler);
    };
})();

// Example usage:
addGlobalAjaxStartListener(function () {
    console.log("Global AJAX request started.");
});

addGlobalAjaxCompleteListener(function (xhr) {
    console.log("Global AJAX request completed.");
    // console.log("Status: " + xhr.status);
    // console.log("Response: " + xhr.responseText);
});