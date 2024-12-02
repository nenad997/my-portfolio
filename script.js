const toolsContainer = document.querySelector("#tools");
const projectsContainer = document.querySelector("#projects-list");
const contactsContainer = document.querySelector("#contacts");
const yearSpanElement = document.querySelector("#year");
const navLinks = document.querySelectorAll("#nav a");
const navList = document.getElementById("nav-list");
const sections = document.querySelectorAll(".section");
const hamburgerElement = document.getElementById("hamburger");

const myEmail = "nenad.matijevic97@hotmail.com";

const typed = new Typed("#typed-element", {
  strings: ["Frontend,", "Backend,", "Mobile apps development"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  startDelay: 500,
  loop: true,
});

particlesJS.load(
  "particles-home-js",
  "./assets/particles-home.json",
  function () {}
);

particlesJS.load(
  "particles-about-js",
  "./assets/particles-about.json",
  function () {}
);

particlesJS.load(
  "particles-contact-js",
  "./assets/particles-contact.json",
  function () {}
);

particlesJS.load(
  "particles-projects-js",
  "./assets/particles-projects.json",
  function () {}
);

function toggleLinkClass(sectionId) {
  history.replaceState(null, null, `#${sectionId}`);
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${sectionId}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("load", () => {
  toggleLinkClass("home");
});

function activateSection() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const sectionId = section.getAttribute("id");

    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
      toggleLinkClass(sectionId);
    }
  });
}

window.addEventListener("scroll", activateSection);

window.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

hamburgerElement.addEventListener("click", () => {
  navList.classList.toggle("show");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    if (navList.classList.contains("show")) {
      navList.classList.remove("show");
    }
  });
});

class Tool {
  constructor(title, src, alt) {
    this.title = title;
    this.src = src;
    this.alt = alt;
  }
}

function getLogoPath(logo) {
  if (!logo) {
    throw new Error('"logo" param should be defined!');
  }

  let extension;

  switch (logo) {
    case "reactjs":
    case "csharp": {
      extension = "png";
      break;
    }
    case "sql": {
      extension = "webp";
      break;
    }
    default: {
      extension = "svg";
      break;
    }
  }

  return `./assets/tool-logos/${logo}.${extension}`;
}

const tools = [
  new Tool("HTML5", getLogoPath("html-5"), "HTML Logo"),
  new Tool("CSS3", getLogoPath("css-3"), "CSS Logo"),
  new Tool("Bootstrap", getLogoPath("bootstrap"), "Bootstrap Logo"),
  new Tool("JavaScript", getLogoPath("javascript"), "JS Logo"),
  new Tool("TypeScript", getLogoPath("typescript"), "TS Logo"),
  new Tool("React", getLogoPath("reactjs"), "React Logo"),
  // new Tool("Next.js", getLogoPath("nextjs"), "NextJS Logo"),
  new Tool("React Native", getLogoPath("reactnative"), "React Native Logo"),
  new Tool("Redux.js", getLogoPath("redux"), "Redux.js Logo"),
  new Tool("NodeJS", getLogoPath("nodejs"), "NodeJS Logo"),
  new Tool("Express.js", getLogoPath("express"), "Express.js Logo"),
  new Tool("NestJS", getLogoPath("nestjs"), "NestJS Logo"),
  new Tool("SQL", getLogoPath("sql"), "SQL Logo"),
  new Tool("MongoDB", getLogoPath("mongodb"), "MongoDB Logo"),
  // new Tool("C#", getLogoPath("csharp"), "C# Logo"),
  // new Tool("Java", getLogoPath("java"), "Java Logo"),
  // new Tool("ASP.NET", getLogoPath("dotnet"), ".Net Logo"),
  new Tool("Jest Testing Library", getLogoPath("jest"), "Jest Logo"),
];

tools.forEach((tool) => {
  const toolElement = document.createElement("p");
  toolElement.classList.add("tool");
  toolElement.innerHTML = `
    <img
      class="logo"
      title="${tool.title}"
      src="${tool.src}"
      alt="${tool.alt}"
    />
  `;

  toolsContainer.appendChild(toolElement);
});

class Project {
  constructor(title, summary, url) {
    this.title = title;
    this.summary = summary;
    this.url = url;
  }
}

const projects = [
  new Project(
    "Airport traffic light system <br> - Frontend -",
    "The frontend of the airport management application is built with React and React Router, providing a smooth and dynamic user experience. The application connects seamlessly with a backend to manage data in real time, allowing users to view, add, edit, and delete flights. Authentication and authorization are implemented using localStorage, enabling secure user registration and login, with permissions tailored to user roles. The interface is designed to be user-friendly and responsive, making it accessible across different devices. With robust navigation and efficient data handling, the application empowers users to manage flight information effortlessly, enhancing operational efficiency for both airport staff and travelers.",
    "https://github.com/nenad997/airport-traffic-light-system-frontend"
  ),
  new Project(
    "Airport traffic light system <br> - Backend -",
    "The backend of the airport application is developed using Node.js, Express, GraphQL, and Mongoose, providing a robust and scalable foundation for managing airport-related data. The application supports secure user authentication and authorization with JSON Web Tokens (JWT), ensuring that only authorized users can access specific resources. Through GraphQL, the API allows efficient querying and mutation of entities such as User and Flight, enabling operations like user registration, flight management, and data retrieval. Mongoose simplifies interaction with MongoDB, ensuring data integrity and flexibility in handling complex relationships. This backend architecture prioritizes performance, security, and ease of data access, delivering a seamless experience for managing airport operations",
    "https://github.com/nenad997/airport-traffic-light-system-backend"
  ),
  new Project(
    "Web application for a rental car agency",
    "This vehicle rental application includes a user-friendly interface and a REST API backend, designed to streamline vehicle rental operations. The frontend is built with React and React Router, enabling smooth navigation and an interactive user experience. The backend, developed with Node.js, Express, and Mongoose, manages user and vehicle data securely with JSON Web Token (JWT) authentication. Users can register and log in, with authenticated users granted the ability to add new vehicles, edit existing ones, delete vehicles, rent vehicles, and return them to the fleet. Additional features include the ability to search users by their ID, while upcoming enhancements involve photo uploads via the Multer package, as well as automated updates on vehicle status and rental time tracking. This robust setup provides a comprehensive solution for efficient vehicle rental management",
    "https://github.com/nenad997/web-application-for-a-car-rental-agency"
  ),
  new Project(
    "Coffee Shop",
    "This coffee shop application, built with React Native CLI, provides an intuitive mobile experience for browsing and ordering specialty coffee. Leveraging Firebase as the backend database, users can securely register and log in to the app. Each coffee is detailed with a name, price, and list of ingredients, allowing users to explore the menu thoroughly. Users can mark coffees as favorites, add items to their cart, remove them, and place orders seamlessly. With the added functionality of Redux and Redux Actions, the app ensures smooth state management and efficient data handling across screens, delivering a reliable and enjoyable shopping experience",
    "https://github.com/nenad997/coffee-shop-reactnative"
  ),
];

projects.forEach((project) => {
  const projectElement = document.createElement("li");
  projectElement.classList.add("projects__list-item");
  projectElement.innerHTML = `
    <h4>${project.title}</h4>
    <p>${project.summary}</p>
    <a title="GitHub" href="${project.url}" target="_blank">
      Source Code
    </a>
  `;

  projectsContainer.append(projectElement);
});

class Contact {
  constructor(name, icon, url) {
    this.name = name;
    this.icon = icon;
    this.url = url;
  }
}

function getMediaLogoPath(media) {
  return `./assets/media/${media}.svg`;
}

const contacts = [
  new Contact(
    "Linkedin",
    getMediaLogoPath("linkedin"),
    "https://www.linkedin.com/in/nm97/"
  ),
  new Contact(
    "Github",
    getMediaLogoPath("github"),
    "https://github.com/nenad997"
  ),
  new Contact("CV", getMediaLogoPath("cv"), "./assets/CV.pdf"),
];

contacts.forEach((contact) => {
  const contactElement = document.createElement("li");
  contactElement.classList.add("contacts__item");
  contactElement.innerHTML = `
    <a title="${contact.name}" href="${contact.url}" target="_blank">
      <span class="media">
        <span class="icon">
          <img src="${contact.icon}" alt="${contact.name}-icon" />
        </span>
      </span>
    </a>
  `;

  contactsContainer.appendChild(contactElement);
});

yearSpanElement.textContent = `Nenad Matijević - @${new Date().getFullYear()}`;

function sendEmail(button) {
  const contactForm = button.closest("form");

  const subjectEl = contactForm.querySelector("#subject");
  const messageEl = contactForm.querySelector("#message");

  const enteredSubject = subjectEl.value;
  const enteredMessage = messageEl.value;

  if (!enteredSubject.trim() || !enteredMessage.trim()) {
    button.setAttribute("disabled", "true");
    button.classList.add("btn-disabled");

    Toastify({
      text: "Please fill out all the fields",
      duration: 3000,
      destination: "",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#af1c1c",
        fontSize: "1.8rem",
        color: "white",
      },
      onClick: function () {}, // Callback after click
    }).showToast();

    setTimeout(() => {
      button.removeAttribute("disabled");
      button.classList.remove("btn-disabled");
    }, 3000);

    return;
  }

  const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(
    enteredSubject
  )}&body=${encodeURIComponent(enteredMessage)}`;
  window.location.href = mailtoLink;
}

// window.scrollTo(0, document.body.scrollHeight);
