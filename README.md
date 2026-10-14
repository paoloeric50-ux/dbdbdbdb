# EduXplore

**An Interactive Web-Based Computer Hardware Learning Guide**

EduXplore is a frontend web application created by Group 28 for MO-IT161 Web Systems and Technology. It is designed to help junior and senior high school students, especially ICT students and beginners, identify and understand basic computer hardware.

The application provides categorized lessons, computer-part references, lesson videos, and short topic quizzes. Students receive immediate feedback and can review their quiz scores, status, and retake count in the same browser.

## Milestone 1 Status

The Milestone 1 frontend version includes the main HTML pages, shared CSS styling, responsive layouts, and JavaScript interactions. The team is currently completing its final review, documentation, and link checks before submission.

The lesson video popup is already implemented. Reviewing the current video links and finding more reliable and learner-appropriate educational sources has been identified as a possible improvement for a later milestone.

## Main Features

- Categorized lessons for internal components, input devices, output devices, and storage devices
- Computer-part pictures, descriptions, functions, and basic specifications
- Live Computer Parts search with a Clear button and result counter
- Lesson videos displayed through a popup window
- Short quizzes for individual hardware topics
- Immediate answer feedback and quiz results
- Quiz status, scores, and retake tracking using browser `localStorage`
- Responsive layout for desktop and smaller screens

## Application Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Introduces EduXplore and provides access to its learning features. |
| `lessons.html` | Displays categorized hardware lessons, videos, and topic quizzes. |
| `components.html` | Provides detailed hardware references and the Computer Parts search. |
| `quiz.html` | Displays quiz history, scores, status, and retake counts. |
| `about.html` | Explains the project purpose, target users, features, and group information. |

## Technologies Used

- HTML5 for webpage structure and learning content
- CSS3 for shared styling and responsive layouts
- JavaScript for videos, quizzes, search, feedback, and progress tracking
- Browser `localStorage` for saving quiz results on the same browser and device

No API, database, user login, or backend framework is used in the Milestone 1 version.

## How to Use the Application

1. Download or clone the repository.
2. Open `index.html` in a web browser.
3. Use the navigation menu to open the Lessons, Computer Parts, Quiz, or About page.
4. Select a hardware category and study its lesson content.
5. Use **Watch Video**, **Read More**, or **Take Quiz** for additional learning activities.
6. Open the Quiz page to review saved results and retake a topic quiz.

## Project Structure

```text
Web_System_Group-28/
├── index.html
├── lessons.html
├── components.html
├── quiz.html
├── about.html
├── styles.css
├── script.js
└── README.md
```

## Milestone 1 Documentation

- [Browser-Based Application Development Workflow Worksheet](https://docs.google.com/spreadsheets/d/10Rh_oHCJGaDs-8cfMLEl7meDu0ndk5jpZmbqjAfwmuU/edit?usp=sharing)
- [AI Use Statement](https://docs.google.com/document/d/1rvmMHryl3yYhevG8d83DOrMTR-XaBjohv9LhZdnnBlY/edit?usp=sharing))


## Repository

[GitHub Repository – Web System Group 28](https://github.com/Kenzojae/Web_System_Group-28)

## Group Members

| Member | Main Contribution |
| --- | --- |
| Lawrence Malasa | Home page, shared styling, Computer Parts search, review, and workflow documentation |
| John Carlo Rendon | Quiz and About pages, quiz interactions, and progress tracking |
| Eric Paolo Mempin | Lessons and Computer Parts content and page structure |

Additional work was completed collaboratively through testing, review, scope discussions, documentation, and GitHub updates.

## Current Scope and Future Improvements

Milestone 1 focuses on manageable frontend features that directly support learning. The group removed the proposed 3D models and other advanced features to keep the project realistic for the course timeline.

Possible improvements for later milestones include:

- Reviewing and replacing lesson videos with more reliable educational sources
- Adding more hardware topics and quiz questions
- Adding quiz difficulty levels and lesson completion indicators
- Supporting user accounts and cross-device progress when backend development is introduced
- Creating teacher-managed lesson content or a progress dashboard

## AI Use Disclosure

The group used AI tools to support selected development, review, testing, explanation, and documentation tasks. AI-assisted suggestions were reviewed by the members before they were incorporated into the project. The complete description of the group's AI use is provided in the linked AI Use Statement.

## Educational Use

EduXplore was developed for educational purposes as part of MO-IT161 Web Systems and Technology.
