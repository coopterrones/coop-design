import create from "zustand";

export const useStore = create((set) => ({
  work: [
    { name: "Canoe Club", description: "asdf", image: "placeholder" },
    { name: "Poppn Co.", description: "asdf", image: "placeholder" },
    { name: "Highland Style", description: "asdf", image: "placeholder" },
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
