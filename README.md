# Getting Started with Create React App

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/055401594e754b83803150fc801d33f1)](https://app.codacy.com/gh/rudecat/jira-timelog-app?utm_source=github.com&utm_medium=referral&utm_content=rudecat/jira-timelog-app&utm_campaign=Badge_Grade)
![Docker Pulls](https://img.shields.io/docker/pulls/rudecat/timelog)
![Docker Image Size (tag)](https://img.shields.io/docker/image-size/rudecat/timelog/latest)
![Docker Image Version (tag latest semver)](https://img.shields.io/docker/v/rudecat/timelog/latest)

# Jira Timelog App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Docker Hub

You can access the packaged docker image from below link.

[Rudecat/Timelog](https://hub.docker.com/r/rudecat/timelog)

## Run the docker image

Due to the security measure put on javascript by Jira, this docker image includes NGINX as proxy, and insert Basic Token in the header along with some security check headers.

To run the application, please use below command

```
docker run --rm -p 443:443 -e BASICTOKEN="<username:password in base64>" -e JIRA_URL="<jira server url after https://>" rudecat/timelog
```

example: 

```
docker run --rm -p 443:443 -e BASICTOKEN="dXNlcm5hbWU6cGFzc3dvcmQ=" -e JIRA_URL="jira.atlassian.com" rudecat/timelog
```

Once it's started, you shall be able to access the app through the link https://localhost

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
