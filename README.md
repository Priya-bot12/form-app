# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Testing Guidance
To test the application:

Adding Tasks:

Try adding a task by typing in the input field and clicking "Add" or pressing Enter

Verify that empty tasks are not allowed (should show an alert)

Completing Tasks:

Check the checkbox next to a task to mark it as completed

Verify the task gets strikethrough styling

Uncheck to mark as active again

Deleting Tasks:

Click the × button to remove a task

Verify the task disappears from the list

Filtering:

Use the filter buttons to show All/Active/Completed tasks

Verify only the correct tasks are displayed for each filter

Sorting:

Use the sort dropdown to change the order of tasks

Verify tasks are sorted correctly by date or name

Persistence:

Refresh the page and verify your tasks are still there (localStorage)

Clear completed tasks and verify they're removed from localStorage

Responsiveness:

Test on different screen sizes to ensure the layout adapts properly
