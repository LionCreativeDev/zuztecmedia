// Select the elements
var uxui = document.querySelector(".uxui-hover-assets");
var webDevelopment = document.querySelector(".webdevelopment-hover-assets");
var branding = document.querySelector(".branding-hover-assets");

// Define the data for UX/UI
const uxuiAssets = [
    'img/Portfolio-Page-img/AI-Influencer.webp',
    'img/Portfolio-Page-img/HomePage-1-NFT-Nexo.webp',
    'img/Portfolio-Page-img/XSport-Sneacker.webp',
    'img/Portfolio-Page-img/Sarrbet-Home.webp',
    'img/Portfolio-Page-img/Yoh-Sweet.webp',
    'img/Portfolio-Page-img/Seo-Landing-Page.webp',
];

const uxuiSlideTitle = [
    "<a href='uxui/ai-influencer.html' class='circle-link'><div class='circle-icon'><i></i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'></span></div>AI Influencer</a>",
    "<a href='uxui/xchain-nft.html' class='circle-link'><div class='circle-icon'><i></i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'></span></div>Xchain Nft</a>",
    "<a href='uxui/xsport.html' class='circle-link'><div class='circle-icon'><i></i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'></span></div>Xsport Sneakers</a>",
    "<a href='uxui/sarbett.html' class='circle-link'><div class='circle-icon'><i></i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'></span></div>Sarbett</a>",
    "<a href='uxui/yoh-sweet.html' class='circle-link'><div class='circle-icon'><i></i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'></span></div>Yoh Sweets</a>",
    "<a href='uxui/seo.html' class='circle-link'><div class='circle-icon'><i></i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'></span></div>SEO Landing Page</a>",
];

const uxuiSlideService = [
    '<li>AI Influencer</li><li>Xchain Nft</li><li>Xsport Sneakers</li><li>Sarbett</li><li>Yoh Sweets</li><li>Seo Landing Page</li>',
    '<li>Xchain Nft</li><li>Xsport Sneakers</li><li>Sarbett</li><li>Yoh Sweets</li><li>Seo Landing Page</li><li>AI Influencer</li>',
    '<li>Xsport Sneakers</li><li>Sarbett</li><li>Yoh Sweets</li><li>Seo Landing Page</li><li>AI Influencer</li><li>Xchain Nft</li>',
    '<li>Sarbett</li><li>Yoh Sweets</li><li>Seo Landing Page</li><li>AI Influencer</li><li>Xchain Nft</li><li>Xsport Sneakers</li>',
    '<li>Yoh Sweets</li><li>Seo Landing Page</li><li>AI Influencer</li><li>Xchain Nft</li><li>Xsport Sneakers</li><li>Sarbett</li>',
    '<li>Seo Landing Page</li><li>AI Influencer</li><li>Xchain Nft</li><li>Xsport Sneakers</li><li>Sarbett</li><li>Yoh Sweets</li>',
];

// Define the data for Web Development
const webDevelopmentAssets = [
    'img/Portfolio-Page-img/modelcitizenfl-min.webp',
    'img/Portfolio-Page-img/irishealing-min-2.webp',
    'img/Portfolio-Page-img/brandnorth-min.webp',
    'img/Portfolio-Page-img/maazproperties-min.webp',
    'img/Portfolio-Page-img/opioid-rehab-min.webp',
    'img/Portfolio-Page-img/ylangylangbeachresort-min.webp',
];

const webDevelopmentSlideTitle = [
    "<a href='webdevelopment/modalcitizen.html' class='circle-link'><div class='circle-icon'><i></i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'></span></div>Model Citizen</a>",
    "<a href='webdevelopment/irishealing.html' class='circle-link'><div class='circle-icon'><i></i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'></span></div>Iris Healing</a>",
    "<a href='webdevelopment/brandnorth.html' class='circle-link'><div class='circle-icon'><i></i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'></span></div>Brand North</a>",
    "<a href='webdevelopment/Maaz Properties.html' class='circle-link'><div class='circle-icon'><i></i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'></span></div>Maaz Properties</a>",
    "<a href='webdevelopment/opioid-rehab.html' class='circle-link'><div class='circle-icon'><i></i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'></span></div>Opioid Rehab</a>",
    "<a href='webdevelopment/YlangyLangBeachResort.html' class='circle-link'><div class='circle-icon'><i></i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'></span></div>Ylang Ylang Hotel</a>",
];

const webDevelopmentSlideService = [
    '<li>Model Citizen</li><li>Iris Healing</li><li>Brand North</li><li>Maaz Properties</li><li>Opioid Rehab</li><li>Ylang Ylang Hotel</li>',
    '<li>Iris Healing</li><li>Brand North</li><li>Maaz Properties</li><li>Opioid Rehab</li><li>Ylang Ylang Hotel</li><li>Model Citizen</li>',
    '<li>Brand North</li><li>Maaz Properties</li><li>Opioid Rehab</li><li>Ylang Ylang Hotel</li><li>Model Citizen</li><li>Iris Healing</li>',
    '<li>Maaz Properties</li><li>Opioid Rehab</li><li>Ylang Ylang Hotel</li><li>Model Citizen</li><li>Iris Healing</li><li>Brand North</li>',
    '<li>Opioid Rehab</li><li>Ylang Ylang Hotel</li><li>Model Citizen</li><li>Iris Healing</li><li>Brand North</li><li>Maaz Properties</li>',
    '<li>Ylang Ylang Hotel</li><li>Model Citizen</li><li>Iris Healing</li><li>Brand North</li><li>Maaz Properties</li><li>Opioid Rehab</li>',
];

// Define the data for Branding
const brandingAssets = [
    'img/Portfolio-Page-img/DMotel-min.webp',
    'img/Portfolio-Page-img/irishealing-min.webp',
    'img/Portfolio-Page-img/beehealth-min.webp',
];

const brandingSlideTitle = [
    "<a href='branding/dmotel.html' class='circle-link'><div class='circle-icon'><i></i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'></span></div>D Motel</a>",
    "<a href='branding/irisHealing.html' class='circle-link'><div class='circle-icon'><i></i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'></span></div>Iris Healing</a>",
    "<a href='branding/beehealth.html' class='circle-link'><div class='circle-icon'><i></i><span><img src='img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='img/svg/arrow-hex.svg'></span></div>Bee Health</a>",
];

const brandingSlideService = [
    '<li>D Motel</li><li>Iris Healing</li><li>Bee Health</li>',
    '<li>Iris Healing</li><li>Bee Health</li><li>D Motel</li>',
    '<li>Bee Health</li><li>D Motel</li><li>Iris Healing</li>',
];

// Function to update the global variables
function updateData(assets, slideTitles, slideServices) {
    var assetsScript = document.getElementById('assets-script');
    var slideTitleScript = document.getElementById('slidetitle-script');
    var slideServiceScript = document.getElementById('slideservice-script');
    // Convert arrays to string with each element on a new line
    const assetsString = assets.map(item => `'${item}'`).join(',\n');
    const slideTitlesString = slideTitles.join(',\n');
    const slideServicesString = slideServices.join(',\n');

    // Update the script tag contents
    assetsScript.textContent = `window.ASSETS = [\n${assetsString}\n];`;
    slideTitleScript.textContent = `window.SLIDETITLE = [\n${slideTitlesString}\n];`;
    slideServiceScript.textContent = `window.SLIDESERVICE = [\n${slideServicesString}\n];`;

    window.ASSETS = assets;
    window.SLIDETITLE = slideTitles;
    window.SLIDESERVICE = slideServices;
    console.log("window.ASSETS", window.ASSETS)
}

// Event listeners
if (uxui) {
    uxui.addEventListener('mouseover', () => updateData(uxuiAssets, uxuiSlideTitle, uxuiSlideService));
}

if (webDevelopment) {
    webDevelopment.addEventListener('mouseover', () => updateData(webDevelopmentAssets, webDevelopmentSlideTitle, webDevelopmentSlideService));
}

if (branding) {
    branding.addEventListener('mouseover', () => updateData(brandingAssets, brandingSlideTitle, brandingSlideService));
}