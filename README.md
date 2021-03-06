
FSA Pattern Library UI
======================

### About this application

This application is written using the [Node.js](https://nodejs.org/en/) JavaScript runtime and the [Express.js](https://expressjs.com/) JavaScript web framework.

### The purpose

The application is an implementation of the [FSA Pattern Library](https://github.com/methods/fsa-pl) and provides a user interface for facilitating a consistent look and feel between the Food Standards Agency's websites and food.gov.uk. 

![screenshot](https://github.com/methods/fsa-pl-ui/blob/master/screenshot.png "Pattern Library Screenshot")

### Prerequisites

In order to run the tool locally in development you'll need the following :

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/downloads) 

### Key Dependencies

This application is dependent on the [FSA Pattern Library](https://github.com/methods/fsa-pl) and pulls in assets from that repository as part of it's build process.

This application serves pages from the `build` folder with rendering being delegated to the following [metalsmith](http://www.metalsmith.io/) plugins:

- [metalsmith-markdown](https://github.com/segmentio/metalsmith-markdown)
- [metalsmith-templates](https://github.com/segmentio/metalsmith-templates)
- [metalsmith-collections](https://github.com/segmentio/metalsmith-collections)
- [metalsmith-permalinks](https://github.com/segmentio/metalsmith-permalinks)

[Handlebars](http://handlebarsjs.com/) is also used to render partials and provide in-page helpers.

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

To run the application type the following command in your terminal

```bash
npm run dev
```

The above command will trigger a script which pulls in and installs the required updated dependencies(if required), copies the required files into the `src` folder and triggers a new build.


The application will then be running on [localhost:3000](http://localhost:3000), or another port if you have a env.PORT environment variable set.

### Adding new patterns

New patterns are added to the pattern library via the `src` folder.

For example adding a new button to the library would require adding a new .md file to the `/src/buttons/partials/` folder. This file should include a template heading section and html snippet matching the format used in the other components.

### Deployment

The pattern library is currently hosted on heroku at [fsa-pl-ui.herokuapp.com](http://fsa-pl-ui.herokuapp.com).

