import { SectionWrapper } from "../../hoc";
import { vmix } from "../../assets";

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const techCategories = [
  {
    label: "Languages",
    color: "#915EFF",
    items: [
      { name: "Java", icon: `${D}/java/java-original.svg` },
      { name: "Python", icon: `${D}/python/python-original.svg` },
      { name: "JavaScript", icon: `${D}/javascript/javascript-original.svg` },
      { name: "TypeScript", icon: `${D}/typescript/typescript-original.svg` },
      { name: "C#", icon: `${D}/csharp/csharp-original.svg` },
      { name: "SQL", icon: `${D}/mysql/mysql-original.svg` },
    ],
  },
  {
    label: "Frameworks & Runtime",
    color: "#915EFF",
    items: [
      { name: "Spring Boot", icon: `${D}/spring/spring-original.svg` },
      { name: "Django", icon: `${D}/django/django-plain.svg` },
      { name: ".NET", icon: `${D}/dot-net/dot-net-original.svg` },
      { name: "Node.js", icon: `${D}/nodejs/nodejs-original.svg` },
      { name: "Express.js", icon: `${D}/express/express-original.svg` },
      { name: "React", icon: `${D}/react/react-original.svg` },
    ],
  },
  {
    label: "Cloud & DevOps",
    color: "#915EFF",
    items: [
      { name: "Docker", icon: `${D}/docker/docker-original.svg` },
      { name: "Linux", icon: `${D}/linux/linux-original.svg` },
      { name: "GitHub Actions", icon: `${D}/github/github-original.svg` },
      { name: "Git", icon: `${D}/git/git-original.svg` },
    ],
  },
  {
    label: "Databases & Tools",
    color: "#915EFF",
    items: [
      { name: "MongoDB", icon: `${D}/mongodb/mongodb-original.svg` },
      { name: "Postman", icon: `${D}/postman/postman-original.svg` },
      { name: "MySQL", icon: `${D}/mysql/mysql-original.svg` },
      { name: "Figma", icon: `${D}/figma/figma-original.svg` },
      { name: "PostgreSQL", icon: `${D}/postgresql/postgresql-original.svg` },
      { name: "Vmix", icon: vmix },
    ],
  },
];

const TechCard = ({ name, icon }: { name: string; icon: string }) => (
  <div
    className="flex flex-col items-center justify-center gap-3 rounded-xl p-4 transition-transform hover:-translate-y-1"
    style={{ background: "#0d1117", border: "1px solid #1e2433", minWidth: 120 }}
  >
    <img src={icon} alt={name} className="h-12 w-12 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.opacity = "1"; }} />
    <p className="text-center text-[13px] text-white">{name}</p>
  </div>
);

const Tech = () => {
  return (
    <div className="flex flex-col gap-10">
      {techCategories.map((cat) => (
        <div key={cat.label}>
          <p className="mb-4 text-[21px] font-extrabold uppercase tracking-widest font-syne" style={{ color: cat.color }}>
            {cat.label}
          </p>
          <div className="grid grid-cols-3 gap-4 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6">
            {cat.items.map((tech) => (
              <TechCard key={tech.name} {...tech} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
