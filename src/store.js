import create from "zustand";

export const useStore = create((set) => ({
  work: [
    { name: "Canoe Club", description: "asdf", image: "placeholder" },
    { name: "Poppn Co.", description: "asdf", image: "placeholder" },
    { name: "Highland Style", description: "asdf", image: "placeholder" },
  ],
  sandbox: [
    {
      name: "Cappua",
      description:
        "Cappua was an app made with the music industry in mind. The idea was to try and serve the ever frustrating music industry a product that would allow users, to connect and make music together. The MVP existed as a deliverable battle rap app where beats would be featured each month. Users would download the monthly insturmental and upload their verse to the competition page. This project was completed over a 1.5 week sprint.",
      tech: "React, Sass, AWS, GraphQL, Apollo Client, Rails Server",
      link: "https://github.com/coopterrones/cappua-fe",
      image: "placeholder",
    },
    {
      name: "Intention Timer",
      description: "asdf",
      tech: "Vanilla JavaScript, HTML, CSS",
      link: "https://github.com/coopterrones/intention-timer",
      image: "placeholder",
    },
    {
      name: "Slapjack",
      description: "asdf",
      tech: "Vanilla JavaScript, HTML, CSS",
      link: "https://github.com/coopterrones/slapjack",
      image: "placeholder",
    },
    {
      name: "Overlook",
      description: "asdf",
      tech: "Vanilla JavaSript, HTML, CSS, ASYNC JS, Mocha, Chai",
      link: "https://github.com/coopterrones/Overlook",
      image: "placeholder",
    },
    {
      name: "Rancid Tomatillos",
      description: "asdf",
      tech: "React, Hooks, Sass, ASYNC, Cypress, React Testing Library, Jest",
      link: "https://github.com/coopterrones/rancid-tomatoes",
      image: "placeholder",
    },
    {
      name: "Favo",
      description: "asdf",
      tech:
        "React, Hooks, ExpressJS, Cypress, Sass, ASYNC, React Testing Library, Jest",
      link: "https://github.com/coopterrones/favo",
      image: "placeholder",
    },
  ],
}));
