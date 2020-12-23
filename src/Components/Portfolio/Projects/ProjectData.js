import ProjectBlog01 from "../../../img/Projects/CodingTranquillity/CodingTranquillity.webp";
import ProjectBlog02 from "../../../img/Projects/CodingTranquillity/CodingTranquillity2.webp";
import ProjectBlog04 from "../../../img/Projects/CodingTranquillity/CodingTranquillity4.webp";
import AndroidDB01 from "../../../img/Projects/Project_Database_MultipleTables1.webp";
import AndroidDB02 from "../../../img/Projects/Project_Database_MultipleTables2.webp";
import AndroidDB03 from "../../../img/Projects/Project_Database_MultipleTables3.jpg";
import AgeClass01 from "../../../img/Projects/ProjectAgeClassification/PicDemo1.webp";
import AgeClass02 from "../../../img/Projects/ProjectAgeClassification/PicDemo2.webp";
import AgeClass03 from "../../../img/Projects/ProjectAgeClassification/VideoDemo.gif";
import AndroidToDo01 from "../../../img/Projects/Project_ToDoQuiz.webp";
import AndroidToDo02 from "../../../img/Projects/Project_ToDoQuiz2.webp";
import AndroidToDo03 from "../../../img/Projects/Project_ToDoQuiz3.webp";
import AndroidAge01 from "../../../img/Projects/Project_AndroidAge01.webp";
import AndroidAge02 from "../../../img/Projects/Project_AndroidAge02.webp";
import AndroidAge03 from "../../../img/Projects/Project_AndroidAge03.webp";

const ProjectData = [
  {
    id: 1,
    title:
      "Django Blog with Authentication, Coding-Articles, Likes and Comments",
    category: "Python",
    img: [ProjectBlog01, ProjectBlog02, ProjectBlog04],
    imgAlt: "Django Blog with Users",
    tags: ["Python", "Django", "Heroku"],
    description:
      "Application Main Features:\n- Responsive UI for desktop and mobile using Bootstrap4\n- Registered users can leave likes and comments on each blog article\n- Rich Text-Editor for blog articles and comments (with text formatting, code snippets, and more using CKEditor)\n- Media Files are stored using Google Drive Storage (free alternative to Amazon S3 Bucket)",
    github: "https://github.com/radualexandrub/CodingTranquillity-DjangoBlog",
    livelink: "https://codingtranquillity.herokuapp.com/",
  },
  {
    id: 2,
    title: "Database Management with Multiple Tables and Authentication",
    category: "Android",
    img: [AndroidDB01, AndroidDB02, AndroidDB03],
    imgAlt: "Android Database Management SQLite",
    tags: ["Android", "Java", "SQLite"],
    description:
      "Android App for managing a Database with 5 tables (Doctors, Patients, Medicines and their corresponding association tables Sections and Consultations). The DB is stored locally using SQLite and permits CRUD operations, as well as accesing the app by logging in either as a Client user or as an Administrator.",
    github:
      "https://github.com/radualexandrub/Android-SQLite-Database-MultipleTables",
    livelink: "",
  },
  {
    id: 3,
    title: "Real-Time Age and Gender Classification on Raspberry Pi 4",
    category: "Python",
    img: [AgeClass01, AgeClass02, AgeClass03],
    imgAlt: "Age and Gender Classification Raspberry Pi MobileNet",
    tags: ["Python", "Keras", "OpenCV"],
    description:
      "Automatic age and gender classification in real-time, using Convolutional Neural Networks (based on MobileNet v1), optimized for Raspberry Pi 4 system using a .tflite model. The application is wrapped in a simple and modern UI using PyQt5.",
    github:
      "https://github.com/radualexandrub/Age-Gender-Classification-on-RaspberryPi4-with-TFLite-PyQt5",
    livelink: "",
  },
  {
    id: 4,
    title: "Age Classification Android App",
    category: "Android",
    img: [AndroidAge01, AndroidAge02, AndroidAge03],
    imgAlt: "Android ToDo Journal Quiz App",
    tags: ["TensorFlow Lite", "Android", "Python"],
    description:
      "Age Classification App using Native Android. The quantized .tflite model was trained and generated using TensorFlow Lite Model Maker. Face databases used: UTKFace combined with Appa-Real.",
    github: "https://github.com/radualexandrub/Android-Age-Classification",
    livelink: "",
  },
  {
    id: 5,
    title: "ToDo-Journal-Timer-Quiz App",
    category: "Android",
    img: [AndroidToDo01, AndroidToDo02, AndroidToDo03],
    imgAlt: "Android ToDo Journal Quiz App",
    tags: ["Android", "Java"],
    description:
      "Android App with multiple features such as ToDo List, Journal (with titles, entries and time stamps), Countdown timer, and a Quiz that generates different responses based on question answers (like a Personality test).",
    github:
      "https://github.com/radualexandrub/AndroidApp-ToDo-Journal-Timer-Quiz",
    livelink: "",
  },
];

export default ProjectData;
