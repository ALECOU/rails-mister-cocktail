import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Martini", "Moscow Mule", "Sex on the beach", "Have a drink ..."],
    typeSpeed: 100,
    loop: true
  });
};

export { loadDynamicBannerText };
