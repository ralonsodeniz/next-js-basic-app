# Meetup app

## Info

Basic app to add meetups as playground to test [Next.js](https://nextjs.org)

You can visit the app [here](https://next-js-basic-app-orcin.vercel.app/).

## Technologies used

### Front-End

- [React](https://es.reactjs.org/) - JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org) - The React Framework for Production.
- [Styled Components](https://styled-components.com/) - Utilising tagged template literals and the power of CSS, allows you to write actual CSS code to style your components.
- [Material UI](https://material-ui.com/) - React components for faster and easier web development.

### Back-End

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - MongoDB Atlas is the global cloud database service for modern applications.

## Local configuration

- Clone the project
- Create a Mongo Atlas DB
    - Create a cluster
    - Create a user in database access tab
    - Allow connections for any ip address in network access tab  
    - Get the connection driver to connect the application under the connect button in the cluster tab
- Create an .env.local file in your root with the following variable
    - DB_CONNECTION_STRING which has to have the connection driver obtained from Mongo Atlas
- Launch the app in dev mode using `next dev` (or dev npm script)
- Alternatively you can launch the app in production with `next build && next start` (or production npm script)
