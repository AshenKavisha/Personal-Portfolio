// Single source of truth for every project.
// featured: true  -> shown on the home page
// link: ""        -> hides the live-demo icon (add a real URL when you have one)
// github: ""      -> hides the GitHub icon
export const projects = [
  {
    title: "AssignmentService",
    description:
      "Full-stack assignment management platform with role-based dashboards for students, faculty, and administrators. Features include assignment creation/submission, automated handover notifications, grading workflows, and administrative controls for course management.",
    image: "/projects/project1.png",
    tags: ["Spring Boot", "React", "PostgreSQL", "REST API", "JWT Authentication"],
    link: "https://assignmentservice.net",
    github: "https://github.com/AshenKavisha/ASSIGNMENTNEW/tree/main",
    featured: true,
  },
  {
    title: "Bank Marketing – Term Deposit Prediction & Call Planner",
    description:
      "Group machine learning project that helps a bank call centre decide which customers to phone first. Predicts who is likely to subscribe to a term deposit and ranks customers into 10 priority groups, using the UCI Bank Marketing dataset (45,211 records). My part: feature engineering and preprocessing, creating 8 new features and narrowing 68 encoded columns down to the 30 most informative. Also deployed the live Streamlit app with demo customers and CSV upload.",
    image: "/projects/project10.png",
    tags: ["Python", "Machine Learning", "Feature Engineering", "Scikit-learn", "XGBoost", "Pandas", "Streamlit", "Git"],
    link: "https://ashenkavisha-bank-marketing-call-planner.streamlit.app",
    github: "https://github.com/IT24102228/Bank-and-Marketing-ML-Model",
    featured: true,
  },
  {
    title: "Dog Breed Classifier",
    description:
      "CNN-based image classifier distinguishing between 5 dog breeds (Golden Retriever, Labrador, German Shepherd, Poodle, Beagle) with 92% accuracy. Trained on 926 labeled images using transfer learning with MobileNetV2 architecture and data augmentation techniques.",
    image: "/projects/project3.png",
    tags: ["TensorFlow", "CNN", "Python", "Keras", "OpenCV"],
    link: "",
    github: "https://github.com/AshenKavisha/Image-Classification",
    featured: true,
  },
  {
    title: "E-Library Mobile App",
    description:
      "Cross-platform mobile e-library application for browsing, borrowing, and managing digital book collections. Features include user authentication, book search/filtering, digital checkout/return system, reading progress tracking, and admin dashboard for inventory management.",
    image: "/projects/project4.png",
    tags: ["React Native", "Node.js", "MongoDB", "Express", "JWT"],
    link: "",
    github: "https://github.com/AshenKavisha/E-LIBRARY-APPLICATION",
    featured: true,
  },
  {
    title: "NASA APOD Gallery",
    description:
      "Full-stack ASP.NET Core MVC web application that integrates NASA's Astronomy Picture of the Day (APOD) API to fetch and display astronomy images and videos. Features SQL Server database storage using raw ADO.NET, duplicate prevention, parameterized SQL queries, and a responsive Bootstrap gallery.",
    image: "/projects/project7.png",
    tags: ["ASP.NET Core", "C#", "SQL Server", "ADO.NET", "NASA API", "Bootstrap"],
    link: "",
    github: "https://github.com/AshenKavisha/nasa-apod-gallery",
    featured: true,
  },
  {
    title: "CI/CD Pipeline – React + Node.js on AWS",
    description:
      "End-to-end automated CI/CD pipeline for a full-stack React, Node.js, and PostgreSQL application deployed on AWS EC2. Integrated GitHub webhooks, Jenkins automation, SonarQube code quality analysis, Docker containerization, Docker Hub image publishing, and SSH-based deployment across three dedicated EC2 instances.",
    image: "/projects/project6.png",
    tags: ["AWS EC2", "Jenkins", "Docker", "SonarQube", "GitHub", "PostgreSQL", "React", "Node.js"],
    link: "",
    github: "https://github.com/AshenKavisha/CI-CD-pipeline-sample-project",
    featured: true,
  },
  {
    title: "IPO Listing Profitability Prediction",
    description:
      "A 5-layer feedforward neural network predicting IPO listing profitability on listing day, trained on 318 Indian IPOs from 2015-2023. Achieved 87% accuracy using technical indicators, market sentiment, and macroeconomic features as input variables.",
    image: "/projects/project2.png",
    tags: ["TensorFlow", "Keras", "Python", "Scikit-learn", "Pandas"],
    link: "",
    github: "https://github.com/AshenKavisha/IPO-Prediction-with-TensorFlow-Keras",
    featured: false,
  },
  {
    title: "Real-time Chat Application",
    description:
      "Full-featured real-time chat application with room-based messaging, user authentication, message persistence, and typing indicators. Built using WebSocket technology for low-latency communication and responsive design for mobile/desktop use.",
    image: "/projects/project5.png",
    tags: ["Socket.io", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "",
    github: "",
    featured: false,
  },
  {
    title: "Retail Banking Data Warehouse & BI Solution",
    description:
      "End-to-end retail banking data warehousing and business intelligence solution built using the Czech Financial Dataset. Features include ETL pipelines, a dimensional data warehouse with transaction and loan fact tables, incremental data loading, SQL-based data marts for financial analysis, data validation and reconciliation, and interactive Power BI dashboards for transaction trends, cash flow, and regional loan performance.",
    image: "/projects/project8.png",
    tags: ["SQL Server", "T-SQL", "Power BI", "ETL", "Data Warehousing", "Data Engineering", "Business Intelligence"],
    link: "",
    github: "https://github.com/AshenKavisha/Bank_Finance-DWBI-Solution",
    featured: false,
  },
  {
    title: "NEXTGENEDU AI – University Admission Analysis",
    description:
      "University admission analysis and decision-support application built using 400 graduate applicant records. Combines statistical testing, regression model comparison, PCA regression, and Naive Bayes classification. Features include individual predictions, bulk CSV uploads, adjustable feature weights, applicant ranking, percentage and seat-based interview shortlisting, radar profiles, downloadable reports, and visual explanations of analytical findings.",
    image: "/projects/project9.png",
    tags: ["R", "Python", "R Shiny", "Jupyter Notebook", "Statistical Modelling", "Predictive Analytics", "PCA", "Data Visualization"],
    link: "https://nextgenedu.shinyapps.io/nextgenedu/",
    github: "https://github.com/IT24102228/University-Admission-Analysis",
    featured: false,
  },
];