type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Bùi Quang Minh Hiếu — 3D Portfolio",
    fullName: "Bùi Quang Minh Hiếu",
    email: "thanhhieu16082004@gmail.com",
  },
  hero: {
    name: "Bùi Quang Minh Hiếu",
    p: ["I develop web, game and", "Operation Technical at Garena Viet Nam"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm Minh Hiếu — a passionate developer and Broadcast & Operation Technician at Garena Viet Nam.
      I specialize in building web applications, designing UX/UI, and developing games using technologies like
      ReactJS, Node.js, Python, and Java. At Garena, I handle real-time Esports broadcast systems, signal
      transmission, broadcast graphics, and live game data integration. I love turning complex ideas into
      clean, impactful solutions — both on screen and behind the scenes.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories. It reflects my ability to solve complex
    problems, work with different technologies, and manage projects effectively.`,
    },
  },
};
