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
      image: "https://media.giphy.com/media/1XbpNpnoPHZOxAtdy0/giphy.mp4",
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
      description:
        "Highland brings to the market a toughtfully crafted hair product meant to style, cleanse, and condition your hair. Rethink your hair care routine with sustainably crafted and health-conscious products that deliver on the promise of style",
      theProblem:
        "The abundance of hair products in the world today not only makes it tough to decide, but additionally makes for a surplus of products and ingredients that are harmful to our environment.",
      methodology:
        "Develop a simple product made with simple ingredients and built on a foundation of values that are for humanity and our planet. Oh yeah, it also makes your hair super healthy and handsome.",
      services:
        "Brand Consulting. Early brand establishment. Landing page and website creation as the brand develops. Producing -- photo and video production shoots for early brand content.",
      image: "https://media.giphy.com/media/QKndZxdjBsOh0fKG19/giphy.mp4",
      production: true,
      links: "https://www.highland.style/",
      instagram: "https://www.instagram.com/stylewithhighland/",
      youtube: null,
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
      description:
        "Favo is a volunteer app that allowed users to browse available volunteer opportunities and sign up. This small MVP was created over a weeks period and used a lot of new technology.",
      tech:
        "React, Hooks, ExpressJS, Cypress, Sass, ASYNC, React Testing Library, Jest",
      link: "https://github.com/coopterrones/favo",
      gif: "https://media.giphy.com/media/ZNhpv0kXXeU3Y4fnuv/source.mp4",
    },
    {
      id: 3,
      name: "Intention Timer",
      description:
        "The Intention Timer was created as a Timer application that would allow users to set a specified time and work through a task. This project was created in Javascript.",
      tech: "Vanilla JavaScript, HTML, CSS",
      link: "https://github.com/coopterrones/intention-timer",
      gif: "https://media.giphy.com/media/8Ca6pTdQsuqSQSiigx/source.mp4",
    },
    {
      id: 4,
      name: "What's Cookin",
      description:
        "What's cookin is a Turing School project that is intended to practice working with a database and more specifcally working with multiple datasets while practicing with Array prototype methods. ",
      tech: "Vanilla JavaScript, HTML, CSS, mocha, chai",
      link: "https://github.com/coopterrones/whats-cookin",
      gif: "https://media.giphy.com/media/rh80oLhh9IFPo6Xh8m/source.mp4",
    },
    {
      id: 5,
      name: "Slapjack",
      description:
        "The game is slapjack. This project is from Turing School and is intended to practice game creation and behavior. This project was created in Javascript.",
      tech: "Vanilla JavaScript, HTML, CSS",
      link: "https://github.com/coopterrones/slapjack",
      gif: "https://media.giphy.com/media/NZ0TAOxwrj5RSDtUfV/source.mp4",
    },
    {
      id: 6,
      name: "Overlook",
      description:
        "Overlook hotel is a project from Turing School. This app was created with Javascript and was intended to practice ASYNC and Network Requests. The app was intended to mimic a hotel booking application. My UI / UX were me testing out the use of neumorphism and could use some small updates to represent a hotel booking application.",
      tech: "Vanilla JavaSript, HTML, CSS, ASYNC JS, Mocha, Chai",
      link: "https://github.com/coopterrones/Overlook",
      gif: "https://media.giphy.com/media/2aadUZzLa8sp5K8diw/source.mp4",
    },
    {
      id: 7,
      name: "Rancid Tomatillos",
      description:
        "Rancid Tomatillos was a React project from Turing school. This project was created with the goal of becoming fluent in ASYNC and network requests in a react app. The app is a movie watch list app that allows the user to view movies with information. The user can then add to their watch list. ",
      tech: "React, Hooks, Sass, ASYNC, Cypress, React Testing Library, Jest",
      link: "https://github.com/coopterrones/rancid-tomatoes",
      gif: "https://media.giphy.com/media/FGP88kzB6HMpD3uQNG/source.mp4",
    },
    {
      id: 8,
      name: "Gatsby Blog",
      description:
        "Experimenting with the Gatsby library. This project was created to practice with Gatsby plugins allowing the user to create a blog.",
      tech: "React, Hooks, CSS Modules, Gatsby, Contentful Plugin",
      link: "https://github.com/coopterrones/gatsby-practice",
      gif: "https://media.giphy.com/media/youuECxZne5aViZ20h/giphy.mp4",
    },
  ],
}));
