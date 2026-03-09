import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  githubProject,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Design UX/UI",
    icon: mobile,
  },
  {
    title: "BroadCast Technician",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: "Broadcast & Operation Technician",
    companyName: "Garena Viet Nam",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2024 – Present",
    points: [
      "Vận hành kỹ thuật phát sóng các giải đấu Esports quy mô lớn, đảm bảo chất lượng truyền tải tín hiệu ổn định và liên tục.",
      "Xử lý tín hiệu video/audio và quản lý hạ tầng đường truyền mạng trong môi trường livestream chuyên nghiệp.",
      "Thiết kế và vận hành hệ thống đồ họa phát sóng (Broadcast Graphics) phục vụ chương trình trực tiếp.",
      "Tích hợp API dữ liệu real-time từ game vào hệ thống đồ họa chương trình, tự động hóa hiển thị thông tin trận đấu.",
      "Phát triển web tương tác người xem với trận đấu trực tiếp và ứng dụng mô hình LLM vào quy trình sản xuất Broadcast.",
    ],
  },
  {
    title: "Lập trình & Phát triển dự án cá nhân",
    companyName: "Personal Projects",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2020 – Present",
    points: [
      "Xây dựng các dự án cá nhân về AI, game và web.",
      "Liên tục học hỏi công nghệ mới qua GitHub và cộng đồng lập trình viên.",
      "Phát triển hệ thống nhận diện khuôn mặt, game 2D, ứng dụng quản lý.",
      "Sử dụng Python, Java, JavaScript và các framework hiện đại.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "FaceDetection by LBPH",
    description:
      "Hệ thống nhận diện khuôn mặt sử dụng thuật toán LBPH (Local Binary Patterns Histograms) với OpenCV, xử lý ảnh và huấn luyện model nhận diện theo thời gian thực.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "machine-learning",
        color: "pink-text-gradient",
      },
    ],
    image: githubProject,
    sourceCodeLink: "https://github.com/MinhHieuLiverpool",
  },
  {
    name: "Game Ninja 2D Platform",
    description:
      "Game platform 2D với nhân vật Ninja sử dụng Pygame. Thiết kế cơ chế va chạm, hệ thống điểm số, màn chơi nhiều cấp độ và quản lý trạng thái game hiệu quả.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
      {
        name: "game-dev",
        color: "pink-text-gradient",
      },
    ],
    image: githubProject,
    sourceCodeLink: "https://github.com/MinhHieuLiverpool",
  },
  {
    name: "Web Manager Audio Car",
    description:
      "Ứng dụng web quản lý cửa hàng thiết bị âm thanh xe hơi full-stack với ReactJS, Node.js, Express.js. Giao diện đáp ứng và hệ thống quản lý sản phẩm, đơn hàng.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: githubProject,
    sourceCodeLink: "https://github.com/MinhHieuLiverpool",
  },
  {
    name: "Puzzle Game AI",
    description:
      "Game xếp hình tích hợp AI tự giải bằng thuật toán BFS, A*. Trực quan hóa quá trình giải bài toán bằng hoạt ảnh từng bước.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "ai-algorithms",
        color: "green-text-gradient",
      },
      {
        name: "intellij",
        color: "pink-text-gradient",
      },
    ],
    image: githubProject,
    sourceCodeLink: "https://github.com/MinhHieuLiverpool",
  },
  {
    name: "BookStore Manager App",
    description:
      "Ứng dụng desktop quản lý cửa hàng sách bằng Java Swing, tích hợp MySQL để quản lý sách, khách hàng và đơn hàng. Giao diện đa cửa sổ với tìm kiếm, lọc, CRUD.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "swing",
        color: "pink-text-gradient",
      },
    ],
    image: githubProject,
    sourceCodeLink: "https://github.com/MinhHieuLiverpool",
  },
  {
    name: "Download Video from YouTube",
    description:
      "Công cụ tải video từ YouTube với giao diện đơn giản, dễ sử dụng. Hỗ trợ nhiều định dạng và chất lượng video, tải theo danh sách phát.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "yt-dlp",
        color: "green-text-gradient",
      },
      {
        name: "cli",
        color: "pink-text-gradient",
      },
    ],
    image: githubProject,
    sourceCodeLink: "https://github.com/MinhHieuLiverpool",
  },
  {
    name: "ToolDiscordVmix",
    description:
      "Công cụ tích hợp Discord với vMix, tự động hóa các tác vụ streaming và quản lý nội dung phát sóng trực tiếp.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "discord",
        color: "green-text-gradient",
      },
      {
        name: "vmix",
        color: "pink-text-gradient",
      },
    ],
    image: githubProject,
    sourceCodeLink: "https://github.com/MinhHieuLiverpool/ToolDiscordVmix",
  },
  {
    name: "BANPICKWEB",
    description:
      "Ứng dụng web Ban/Pick cho game, hỗ trợ chọn và cấm tướng trực tuyến với giao diện tương tác thời gian thực.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "web-app",
        color: "pink-text-gradient",
      },
    ],
    image: githubProject,
    sourceCodeLink: "https://github.com/MinhHieuLiverpool/BANPICKWEB",
  },
  {
    name: "Learning Center Management",
    description:
      "Hệ thống quản lý trung tâm học tập, quản lý học viên, khóa học, lịch học và theo dõi tiến độ học tập.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "fullstack",
        color: "green-text-gradient",
      },
      {
        name: "management",
        color: "pink-text-gradient",
      },
    ],
    image: githubProject,
    sourceCodeLink: "https://github.com/MinhHieuLiverpool",
  },
  {
    name: "GarenaInOutItem",
    description:
      "Công cụ quản lý và theo dõi vật phẩm trong hệ sinh thái Garena, hỗ trợ nhập/xuất item tự động.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "garena",
        color: "green-text-gradient",
      },
      {
        name: "automation",
        color: "pink-text-gradient",
      },
    ],
    image: githubProject,
    sourceCodeLink: "https://github.com/MinhHieuLiverpool",
  },
  {
    name: "SocialMicro",
    description:
      "Nền tảng mạng xã hội với kiến trúc microservices, hỗ trợ đăng bài, tương tác và quản lý người dùng.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "microservices",
        color: "green-text-gradient",
      },
      {
        name: "social",
        color: "pink-text-gradient",
      },
    ],
    image: githubProject,
    sourceCodeLink: "https://github.com/MinhHieuLiverpool",
  },
];

export { services, technologies, experiences, testimonials, projects };
