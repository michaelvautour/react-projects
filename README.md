# React Projects

####

- Each project to make it TypeScript:

  1. Navigate to setup folder in project folder
  2. Delete pack-lock.json
  3. Rename all .js files to .tsx
  4. from /setup level run npm install
  5. Then run npm install typescript --save-dev
  6. Sometimes you need to run npx tsc --init to get tsconfig.json file created (not sure why it's only sometimes)
  7. Replace tsconfig.json with following:

  {
  "compilerOptions": {
  "target": "es5",
  "lib": [
  "dom",
  "dom.iterable",
  "esnext"
  ],
  "allowJs": true,
  "skipLibCheck": true,
  "esModuleInterop": true,
  "allowSyntheticDefaultImports": true,
  "strict": true,
  "forceConsistentCasingInFileNames": true,
  "module": "esnext",
  "moduleResolution": "node",
  "resolveJsonModule": true,
  "isolatedModules": true,
  "noEmit": true,
  "jsx": "react"
  },
  "include": [
  "src"
  ]
  }

#### React Course

[My React Course](https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF)

#### Support

Find the Content Useful? [You can always buy me a coffee](https://www.buymeacoffee.com/johnsmilga)

#### Tutorial Video

[React Tutorial](https://youtu.be/iZhV0bILFb0)

#### All Projects

[Projects Site](https://react-projects.netlify.app/)

## Corresponding Tutorial Topics

#### useState

1. Birthday Reminder

#### useEffect and Conditional Rendering

2. Tours
3. Reviews
4. Questions
5. Menu
6. Tabs
7. Slider

#### Forms

8. Lorem Ipsum Generator
9. Color Shades Generator
10. Grocery Bud

#### useRef

11. Navbar

#### useContext

12. Modal And Sidebar
13. Stripe Submenus

#### useReducer and useContext

14. Cart

#### React Router and useCallback

15. Cocktails

## Advanced Projects (Course Exclusive)

[My React Course](https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF)

16. Markdown Preview
17. Random Person
18. Pagination
19. Stock Photos
20. Dark Mode
21. Movie DB
22. Hacker News
23. Quiz
