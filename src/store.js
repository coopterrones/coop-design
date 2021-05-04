import create from "zustand";

export const useStore = create((set) => ({
  work: [
    {
      id: 1,
      name: "Canoe Club",
      slug: "canoe-club",
      description:
        "At Canoe Club I was fortunate enough to wear a lot of hats. The experience has allowed me to learn the in's and out's that go into starting a small business. I've seen and been apart of the growth of in-store and online sales. This website uses Shopfiy and Shipstation. Our small team handled everything including in-store sales, customer service, online-order fulfillment, producing content for social media and E-Commerce platform, and everything in between.",
      theProblem:
        "Men's clothing was lacking. There are very few options for men to find unique quality in their clothing / style online nor in-person. There is no place for the cold customer service that exists in the industry.",
      methodology:
        "Menswear of Appreciation. Provide a curated selection for customers looking for unique quality from all over the world. Provide the best customer service possible replicating the one of a kind in store experience that provides a new light to the old and cold ways of shopping for nice clothing.",
      services:
        "Many things, but mainly; Customer Relations Manager, Asst. Producer for social and E-Commerce Platform, Social Media Personality.",
      image: "https://media.giphy.com/media/EM7wPHa22dW0H1KMfY/giphy.mp4",
      production: false,
      link: "https://www.shopcanoeclub.com",
      instagram: "https://www.instagram.com/shopcanoeclub/?hl=en",
      youtube: "https://www.youtube.com/channel/UCTVB69BO5zH1DuS9oUPM3Nw",
    },
    {
      id: 2,
      name: "Poppn Co.",
      slug: "poppn-co",
      description:
        "Poppn Co. provides a new way to pay your tab. The Poppn Co. is a startup looking to be the future of payment processing for your favorite venues.",
      theProblem:
        "Openning a tab at your favorite venue is a drag. This system has not seen an update in far too long and the convenience is lacking.",
      methodology:
        "Let's let the bartenders get back to their main focus of creating well-crafted cocktails. Never forget to close out. Never go back the next morning to retreive your card. Order ahead or order as you go. Close your tab when you are ready to head to your next adventure for the night. Close out with the Poppn Payment system.",
      services:
        "Creation early stage marketing landing page. Creation of business marketing website as the startup and app grow. Advising client app creation in React Native.",
      image: "https://media.giphy.com/media/QWvyIFeWnI2bTnTmlL/giphy.mp4",
      production: true,
      link: "https://poppn-web-app.netlify.app/",
      instagram: null,
      youtube: null,
    },
    {
      id: 3,
      name: "Highland Style",
      slug: "highland-style",
      description: "",
      theProblem: "",
      methodology: "",
      services: "",
      image: "",
      production: true,
      links: "",
    },
  ],
  sandbox: [
    {
      id: 1,
      name: "Cappua",
      description:
        "Cappua was an app made with the music industry in mind. The idea was to try and serve the ever frustrating music industry a product that would allow users, to connect and make music together. The MVP existed as a deliverable battle rap app where beats would be featured each month. Users would download the monthly insturmental and upload their verse to the competition page. This project was completed over a 1.5 week sprint.",
      tech: "React, Sass, AWS, GraphQL, Apollo Client, Rails Server",
      link: "https://github.com/coopterrones/cappua-fe",
      gif: "https://media.giphy.com/media/E8Euga0BKRNdN3GScy/source.mp4",
    },
    {
      id: 2,
      name: "Favo",
      description: "asdf",
      tech:
        "React, Hooks, ExpressJS, Cypress, Sass, ASYNC, React Testing Library, Jest",
      link: "https://github.com/coopterrones/favo",
      gif: "https://media.giphy.com/media/ZNhpv0kXXeU3Y4fnuv/source.mp4",
    },
    {
      id: 3,
      name: "Intention Timer",
      description: "asdf",
      tech: "Vanilla JavaScript, HTML, CSS",
      link: "https://github.com/coopterrones/intention-timer",
      gif: "https://media.giphy.com/media/8Ca6pTdQsuqSQSiigx/source.mp4",
    },
    {
      id: 4,
      name: "What's Cookin",
      description: "",
      tech: "Vanilla JavaScript, HTML, CSS, mocha, chai",
      link: "https://github.com/coopterrones/whats-cookin",
      gif: "https://media.giphy.com/media/rh80oLhh9IFPo6Xh8m/source.mp4",
    },
    {
      id: 5,
      name: "Slapjack",
      description: "asdf",
      tech: "Vanilla JavaScript, HTML, CSS",
      link: "https://github.com/coopterrones/slapjack",
      gif: "https://media.giphy.com/media/NZ0TAOxwrj5RSDtUfV/source.mp4",
    },
    {
      id: 6,
      name: "Overlook",
      description: "asdf",
      tech: "Vanilla JavaSript, HTML, CSS, ASYNC JS, Mocha, Chai",
      link: "https://github.com/coopterrones/Overlook",
      gif: "https://media.giphy.com/media/2aadUZzLa8sp5K8diw/source.mp4",
    },
    {
      id: 7,
      name: "Rancid Tomatillos",
      description: "asdf",
      tech: "React, Hooks, Sass, ASYNC, Cypress, React Testing Library, Jest",
      link: "https://github.com/coopterrones/rancid-tomatoes",
      gif: "https://media.giphy.com/media/FGP88kzB6HMpD3uQNG/source.mp4",
    },
  ],
}));
