# Dev machine preparation

1. Install Docker that can run linux containers.
2. CD to `react-app` directory
3. run `npm install` in a container with NodeJS installed:

In Windows, `docker run --rm -it --entrypoint="" -v ${PWD}:/usr/src/app -w /usr/src/app -w /usr/src/app node:12.18.3 npm install`

# Debug

`npm start`:

In Windows, `docker run --rm -it -v ${PWD}:/usr/src/app -w /usr/src/app -w /usr/src/app -p 3000:3000 node:12.18.3 npm start`

Open http://localhost:3000 in your favorite browser

# Build for publishing

`npm run build`:

In Windows, `docker run --rm -v ${PWD}:/usr/src/app -w /usr/src/app node:12.18.3 npm run build`
