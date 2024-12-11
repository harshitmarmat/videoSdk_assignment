/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(319.22deg, rgba(195, 41, 190, 0.624) 30.52%, rgba(85, 104, 254, 0.56) 60.7%)",
        'inner-gradient':
          'linear-gradient(78.09deg, rgba(174, 73, 176, 0.04) 12.19%, rgba(73, 59, 185, 0.2) 87.03%, rgba(73, 59, 185, 0.04) 87.03%)',
          "globe-outer": "linear-gradient(180deg,rgba(52, 32, 52, 1) 66%,rgba(0, 0, 0, 1) 100%)",
          "vertical-gradient" : "linear-gradient(90deg, rgba(174,73,176,1) 26%, rgba(73,59,185,1) 55%, rgba(203,67,113,1) 79%)",
          "horizontal-gradient" : "linear-gradient(180deg, rgba(203,67,113,1) 25%, rgba(73,59,185,1) 54%, rgba(174,73,176,1) 79%)"
        },
      boxShadow: {
        "inner-bottom":
          "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'], 
      },
      fontSize: {
        heading: [
          "45px",
          {
            fontWeight: "800",
            lineHeight: "55px",
          },
        ],
        "sub-heading": [
          "16px",
          {
            fontWeight: "500",
            lineHeight: "16px",
          },
        ],
        desc: [
          "20px",
          {
            fontWeight: "600",
            lineHeight: "30px",
          },
        ],
        para: [
          "13px",
          {
            fontWeight: "500px",
            lineHeight: "12px",
          },
        ],
        btn: [
          "16px",
          {
            fontWeight: "600",
            lineHeight: "22px",
          },
        ],
        "sub-heading2": [
          "14px",
          {
            fontWeight: "600",
            lineHeight: "20px",
          },
        ],
        "heading2" :[
          "36px", {
            fontWeight: '700',
            lineHeight: '44px'
          }
        ],
        "heading3" :[
          "26px", {
            fontWeight: '700',
            lineHeight: '31px'
          }
        ],
        "sub-heading3" : [
          "18px",{
            fontWeight: '600',
            lineHeight: '22px'
          }
        ]
      },
      colors: {
        primary_vsdk: "#D64E5F",
        secondary_vsdk: "#5568FE",
        grey_vsdk: "#A8A8A8",
        grey_vsdk_variant2: "#B2B2B2",
        grey_vsdk_variant3: "#D0D4DD",
        grey_vsdk_variant4: "#7D7D7D",
        grey_vsdk_variant5: "#848484",
        black_vsdk : "#161616",
        white_20: "#FFFFFF33",
        grey_20: "#E6E6E633",
      },
    },
  },
  plugins: [],
};
