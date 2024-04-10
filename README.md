# Quizmo

## Changelog

### 11 April 2024

- While testing the Open Trivia DB API again, I noticed responses containing HTML entities
  - To resolve this issue, I installed the [html-entities](https://www.npmjs.com/package/html-entities) package to assist in replacing HTML entities with their corresponding symbol
  - I created a `convertHtmlEntities()` function which takes a string and decodes HTML entities contained within it
  - Additionally, I developed a unit test for `convertHtmlEntities()` to ensure its expected functionality
- Set up Vitest for unit testing

### 10 April 2024

- Designed basic mock up of application layout

### 7 April 2024

- Created `Navbar` component
- Created `Home`, `Play`, and `Profile` pages, and created corresponding links in `Navbar` component
- Testing Open Trivia DB API data fetching

### 6 April 2024

- Set up default Next.js application

### 29 March 2024

- Researched inspiration for mockup and logo designs
