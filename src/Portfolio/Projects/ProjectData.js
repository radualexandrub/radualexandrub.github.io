import ProjectBlog01 from "../../img/Projects/CodingTranquillity/CodingTranquillity.webp";
import AndroidDB01 from "../../img/Projects/Project_Database_MultipleTables1.webp";
import AgeClass01 from "../../img/Projects/ProjectAgeClassification/PicDemo1.webp";
import AndroidToDo01 from "../../img/Projects/Project_ToDoQuiz.webp";

const ProjectData = [
  {
    id: 1,
    title:
      "Django Blog with Authentication, Coding-Articles, Likes and Comments",
    category: "Python",
    img: ProjectBlog01,
    imgAlt: "Django Blog with Users",
  },
  {
    id: 2,
    title: "Database Management with Multiple Tables and Authentication",
    category: "Android",
    img: AndroidDB01,
    imgAlt: "Android Database Management SQLite",
  },
  {
    id: 3,
    title: "Real-Time Age and Gender Classification on Raspberry Pi 4",
    category: "Python",
    img: AgeClass01,
    imgAlt: "Age and Gender Classification Raspberry Pi MobileNet",
  },
  {
    id: 4,
    title: "ToDo-Journal-Timer-Quiz App",
    category: "Android",
    img: AndroidToDo01,
    imgAlt: "Android ToDo Journal Quiz App",
  },
];

export default ProjectData;
