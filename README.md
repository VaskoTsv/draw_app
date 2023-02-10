## Drawing application

Small drawing application build with React and bundled with Vite. Global state management with Mobx, styling with Tailwind and dependency injection with Tsyringe.

The goal of the project was to practice some technologies I wanted to try for some time(Vite bundler, Tailwind for styling, Mobx for state management) and to experiment with entirely new React project architecture. I could of written the whole application without using global state manager and using only hooks and the standart React practices but wanted to create a Proof Of Concept for a new architecture, where all the business logic is moved out in services and they are integrated in the application with the help of dependency injection. By doing this I wanted to introduce more loosly coupled code and practice some SOLID principles and Design Patterns in the process.

Currently there are 3 separate layers in the application.
1. React components are responsible only for the UI part of the application
2. Mobx is responsible only for storing the application data and for giving access to the data needed by the UI(React components)
3. Business logic is moved out in an entirely new layer, controlled by services, which are initialized via IOC container library(Tsyringe) and injected whenever needed in the global store or the UI, depending on the solution we need.
To run the project:

```
npm install and npm run dev
```
