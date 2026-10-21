import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "AssignmentService",
    description:
      "Full-stack assignment management platform with role-based dashboards for students, faculty, and administrators. Features include assignment creation/submission, automated handover notifications, grading workflows, and administrative controls for course management.",
    image: "/projects/project1.png",
    tags: ["Spring Boot", "React", "PostgreSQL", "REST API", "JWT Authentication"],
    link: "https://assignmentservice.net", // Example live demo link
    github: "https://github.com/AshenKavisha/ASSIGNMENTNEW/tree/main",
  },
  {
    title: "IPO Listing Profitability Prediction",
    description:
      "A 5-layer feedforward neural network predicting IPO listing profitability on listing day, trained on 318 Indian IPOs from 2015-2023. Achieved 87% accuracy using technical indicators, market sentiment, and macroeconomic features as input variables.",
    image: "/projects/project2.png",
    tags: ["TensorFlow", "Keras", "Python", "Scikit-learn", "Pandas"],
    link: "https://ipo-prediction-demo.streamlit.app", // Example live demo link
    github: "https://github.com/AshenKavisha/IPO-Prediction-with-TensorFlow-Keras",
  },
  {
    title: "Dog Breed Classifier",
    description:
      "CNN-based image classifier distinguishing between 5 dog breeds (Golden Retriever, Labrador, German Shepherd, Poodle, Beagle) with 92% accuracy. Trained on 926 labeled images using transfer learning with MobileNetV2 architecture and data augmentation techniques.",
    image: "/projects/project3.png",
    tags: ["TensorFlow", "CNN", "Python", "Keras", "OpenCV"],
    link: "https://dog-breed-classifier-demo.herokuapp.com", // Example live demo link
    github: "https://github.com/AshenKavisha/Image-Classification",
  },
  {
    title: "E-Library Mobile App",
    description:
      "Cross-platform mobile e-library application for browsing, borrowing, and managing digital book collections. Features include user authentication, book search/filtering, digital checkout/return system, reading progress tracking, and admin dashboard for inventory management.",
    image: "/projects/project4.png",
    tags: ["React Native", "Node.js", "MongoDB", "Express", "JWT"],
    link: "https://expo.dev/@ashenkavisha/e-library", // Example Expo link
    github: "https://github.com/AshenKavisha/E-LIBRARY-APPLICATION",
  },
  {
    title: "Real-time Chat Application",
    description:
      "Full-featured real-time chat application with room-based messaging, user authentication, message persistence, and typing indicators. Built using WebSocket technology for low-latency communication and responsive design for mobile/desktop use.",
    image: "/projects/project5.png", // Placeholder - would need actual image
    tags: ["Socket.io", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://chat-app-demo.vercel.app", // Example live demo link
    github: "https://github.com/AshenKavisha/realtime-chat-app", 
  },

{
  title: "NASA APOD Gallery",
  description:
    "Full-stack ASP.NET Core MVC web application that integrates NASA's Astronomy Picture of the Day (APOD) API to fetch and display astronomy images and videos. Features SQL Server database storage using raw ADO.NET, duplicate prevention, parameterized SQL queries, and a responsive Bootstrap gallery.",
  image: "/projects/project7.png",
  tags: ["ASP.NET Core", "C#", "SQL Server", "ADO.NET", "NASA API", "Bootstrap"],
  link: "", // Add live demo URL if deployed
  github: "https://github.com/AshenKavisha/nasa-apod-gallery",
},

{
  title: "CI/CD Pipeline – React + Node.js on AWS",
  description:
    "End-to-end automated CI/CD pipeline for a full-stack React, Node.js, and PostgreSQL application deployed on AWS EC2. Integrated GitHub webhooks, Jenkins automation, SonarQube code quality analysis, Docker containerization, Docker Hub image publishing, and SSH-based deployment across three dedicated EC2 instances.",
  image: "/projects/project6.png",
  tags: ["AWS EC2", "Jenkins", "Docker", "SonarQube", "GitHub", "PostgreSQL", "React", "Node.js"],
  link: "", 
  github: "https://github.com/AshenKavisha/CI-CD-pipeline-sample-project", 
},
{
  title: "Bank Marketing – Term Deposit Prediction & Call Planner",
  description:
    "Group machine learning project that helps a bank call centre decide which customers to phone first. Predicts who is likely to subscribe to a term deposit and ranks customers into 10 priority groups, using the UCI Bank Marketing dataset (45,211 records). My part: feature engineering and preprocessing, creating 8 new features and narrowing 68 encoded columns down to the 30 most informative. Also deployed the live Streamlit app with demo customers and CSV upload.",
  image: "/projects/project10.png",
  tags: ["Python", "Machine Learning", "Feature Engineering", "Scikit-learn", "XGBoost", "Pandas", "Streamlit", "Git"],
  link: "https://ashenkavisha-bank-marketing-call-planner.streamlit.app",
  github: "https://github.com/IT24102228/Bank-and-Marketing-ML-Model",
},

];

export const Projects = () => {
  // Filter out the chatbot project (Real-time Chat Application) for the home page
  const filteredProjects = projects.filter(project => project.title !== "Real-time Chat Application");

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white"> make an impact.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  ) : null}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <Link to="/all-projects">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </Link>
        </div>
      </div>
    </section>
  );
};