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
      description:
        "Favo was created with volunteers in mind. The goal was to create an MVP that existed as a React app where users could browse volunteer opportunities and sign up. This project was completed over a 1 week sprint.",
      tech:
        "React, Hooks, ExpressJS, Cypress, Sass, ASYNC, React Testing Library, Jest",
      link: "https://github.com/coopterrones/favo",
      gif: "https://media.giphy.com/media/ZNhpv0kXXeU3Y4fnuv/source.mp4",
    },
    {
      id: 3,
      name: "Intention Timer",
      description:
        "Intenion timer is a vanilla JS exercise where users are able to set a category specific timer to block out time for task completion. This project was completed over a 5 day sprint.",
      tech: "Vanilla JavaScript, HTML, CSS",
      link: "https://github.com/coopterrones/intention-timer",
      gif: "https://media.giphy.com/media/8Ca6pTdQsuqSQSiigx/source.mp4",
    },
    {
      id: 4,
      name: "What's Cookin",
      description:
        "What's Cooking was an exercise using Vanilla JS. The main focus was to become confident in using network requests handling multiple datasets. Additionally, the practice was focused on using prototype iterator methods to handle those datasets.",
      tech: "Vanilla JavaScript, HTML, CSS, mocha, chai",
      link: "https://github.com/coopterrones/whats-cookin",
      gif: "https://media.giphy.com/media/rh80oLhh9IFPo6Xh8m/source.mp4",
    },
    {
      id: 5,
      name: "Slapjack",
      description:
        "The Slapjack game was my first game development practice using vanilla JS. The focus was learning how to interact with the DOM and a big win was the use of local storage.",
      tech: "Vanilla JavaScript, HTML, CSS",
      link: "https://github.com/coopterrones/slapjack",
      gif: "https://media.giphy.com/media/NZ0TAOxwrj5RSDtUfV/source.mp4",
    },
    {
      id: 6,
      name: "Overlook",
      description:
        "Overlook is a project that was intended to mimic the behavior of a hotel booking application. Although my UI is not traditional, my goal was to experiement with Neumorphism to see if it were a viable to use in a production type environment. Major wins on this project were the completion of functionality allowing users to login in as either admin or guests (not using real auth), and view their bookings, create and canel bookings for said user.",
      tech: "Vanilla JavaSript, HTML, CSS, ASYNC JS, Mocha, Chai",
      link: "https://github.com/coopterrones/Overlook",
      gif: "https://media.giphy.com/media/2aadUZzLa8sp5K8diw/source.mp4",
    },
    {
      id: 7,
      name: "Rancid Tomatillos",
      description:
        "The rancid tomatillos app was a project that allowed users to browse a movie watch list and add to their watch list. This project was created using create-react-app . This project was intended to practice react, ASYNC JS, Cypress, and TDD. This project was completed over a 5 day sprint. ",
      tech: "React, Hooks, Sass, ASYNC, Cypress, React Testing Library, Jest",
      link: "https://github.com/coopterrones/rancid-tomatoes",
      gif: "https://media.giphy.com/media/FGP88kzB6HMpD3uQNG/source.mp4",
    },
  ],
}));
