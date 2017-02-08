
FSA Pattern Library UI
======================

### About this application

This application is written using the [Node.js](https://nodejs.org/en/) JavaScript runtime and the [Express.js](https://expressjs.com/) JavaScript web framework.

### The purpose

The application provides a pattern library to ensure a consistent look and feel between the Food Standards Agency's websites and food.gov.uk. 

![screenshot](https://github.com/methods/fsa-pl-ui/blob/master/screenshot.png "Pattern Library Screenshot")

### Prerequisites

In order to run the tool locally in development you'll need the following :

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/downloads) 

### Key Dependencies

This application serves pages from the `build` folder with rendering being delegated to the following [metalsmith](http://www.metalsmith.io/) plugins:

- [metalsmith-markdown](https://github.com/segmentio/metalsmith-markdown)
- [metalsmith-templates](https://github.com/segmentio/metalsmith-templates)
- [metalsmith-collections](https://github.com/segmentio/metalsmith-collections)
- [metalsmith-permalinks](https://github.com/segmentio/metalsmith-permalinks)

[Handlebars]() is also used to render partials and provide in-page helpers.

### Getting Started

Run the following from the command line to download the repository and change into the directory:

```
git clone git@github.com:methods/fsa-pl-ui.git

cd fsa-pl-ui
```

### Running the development server

First install the dependencies:

```bash
npm install

```

To run the server type the following command in your terminal

```bash
node server.js
```

The application will then be running on [localhost:3000](http://localhost:3000), or another port if you have a env.PORT environment variable set.

