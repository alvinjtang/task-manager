# Task Manager

This application is a frontend only UI built with React and styled with TailwindCSS. It is loosely based off of the Google Keep UI. The user is able to add tasks, update tasks, delete tasks, and toggle tasks as completed or not.

Completed tasks are filtered and moved to a secondary list below where they can still be toggled or removed, but cannot be edited. Each list include a count of number of tasks in each list in the header. 

State is stored in a React Context file named TaskContext.tsx.

## To Start the Application

```
git clone https://github.com/alvinjtang/task-manager.git
cd task-manager
npm install
npm run dev
```

## Approach & Decisions

#### File structure and modularity

The files are bucketed in Containers, Components, and Contexts. This is so it's easy for developers to parse out which files are containers that wrap around components, which files are components that are built to be modular and reusable with dynamic props, and which files are state management under Contexts.

Modularity is very important especially at the early stages of building out a design system so for any large, complex product, it's smart to have a brand identity and build a design system around it with dynamic componentry that can be used throughout an application so that minimal to no styling is required. It should be as close to plug-and-play as possible. This is especially important for mtaintainability, consistency, and accessibility.

I used React Context here because it's a pretty simple, straight forward application with a simple state. For more complex applications that would involve a backend then we start to talk about REST APIs, potentially GraphQL, and potentially Redux or Recoil on the front end for state management.

## AI Tools

I decided to use AI tools in the interest of time to build something that would be I believe to be as presentable as possible within a 45 minute coding time frame.

### Tools used:

* Cursor
* ChatGPT

### How they were used:

No components were completely generated by AI and no styling was done by AI.

Cursor was used for typeahead, debugging, and prediction. Any suggestions were reviewed carefully before applying and corrected if necessary.

ChatGPT was only used for help creating the TaskContext scaffolding.

### Other References and Documentation used

* Markdown reference guide: https://markdownlivepreview.com/
* TailwindCSS documentation: https://tailwindcss.com/docs
* Stack Overflow
* Scaffolding Tutorial (React + Vite + Tailwind): https://medium.com/@akhshyganesh/the-right-way-to-setup-react-and-tailwind-css-with-vite-ae5027f57dda