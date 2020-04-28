# [Altra Project](https://reactjs.org/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)

Altra project made with React Hooks + Redux and Parcel.

- **React Hooks:** to define all styled components
- **Redux:** in order to create a store to locate all users and filter settings
- **Testing:** made with react testing library (unit, integration, snapshots)

## Installation

- npm install

## build

- npm run dev

## Test

- npm run test \*

## Design

[VIEW PROJECT DESIGN (made with Adobe XD)](https://xd.adobe.com/view/b3cdffca-50c1-43e8-5d16-e306f01f4eec-c5fc/).

You can interact with the app. If you click on a non-iteractable item all interactable items will be highlitedd

## Components Visual

[Componenent Visual](https://docs.google.com/document/d/1yhkQSvs2ZN7smfl4u6YX3mUsvsgUpfZDZGAywF4yHB4/edit#).

## Components

All components haves their own test. Unit, Integration and Snapshot.
Also commented its functionality in test file.
PropTypes included and default props.

## User Stories

User can load and view all data from url.
User can apply filters to data

- age filter (min and max)
- weight filter (min and max)
- height filter (min and max)
- hair color filter
- user can view number of filteres users

User can view user detailed info
User can click to a friend to see its detailed info
User can click to a profession to see all users with that profession
User can always back to home page

## Dev Dependencies

- **React Testing Library:** to test React Hooks Redux (unit testing and integration tests)
- **Enzyme:** to test some components using shallow, mount & render
- **Prettier:** to make styled code in a beautiful way
- **parcel-plugin-react-svg:** to load awesome svg files

### License

React is [MIT licensed](./LICENSE).
