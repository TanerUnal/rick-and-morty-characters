# Rick and Morty Characters API-Frontend

This is a simple Angular project prepared for a coding challenge.
It is basically a frontend for [Rick and Morty API](https://rickandmortyapi.com/documentation/).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.10.

## How to Install

Run `npm install` in project folder to install node modules.

## Development Server

Run `npm run start` or `ng serve` for a dev server. Navigate to http://localhost:4200/. The application will
automatically reload if you
change any of the source files.

## Node Version and Tests

The node version used during development was **18.16.0**.
There also shouldn't be a problem with node version 16 (it isn't tested.)

Tests were **not** in the scope of the task description; therefore they were not implemented.
But Jest packages are included in `package.json` and Jest is set correctly.

Once tests are ready just run  `npm run test` or `jest`.

## Lint Commands

- Run `npm run lint` to check lint.
- To fix linting issues run `ng lint --fix` or `npm run lint -- --fix`.

## Potential Enhancements

For a list of potential refactorings have a look
at [Milestone-5](https://github.com/TanerUnal/rick-and-morty-characters/milestone/5).

- Currently, to facilitate "**< Back to the list**" operation query parameters from main page(/or query result page) are
  preserved in the URL even in **character details page**. This is not a beautiful -yet hacky- solution. This could be
  enhanced by introducing a **Navigation Service**, which is injected into all relevant pages or simply just using some
  external package.
- Web page is not responsive. It could be ideally solved by adding Bootstrap into the project and making relevant
  changes.
- Use of Angular Material UI components.

  ...

## Extra Ideas

- **Search bar** to query characters based on their names.
- Filtering logic could be improved through **checkbox lists on filters**; so multiple features on the same filter could
  be queried at the same time (API does not support it, but it could be emulated.) There was no detailed description
  about this in the problem description; therefore, I assumed it as an optional feature.
- **Filter design** with checkbox could be some dropdown menu which lists checkboxes when clicked. So the filter won't
  occupy much space. And it's a better design decision when there is many filters.
- **Responsiveness**...

## Final Notes

- Please check open and **also closed** issues and milestones.
- Every page contains max. 20 characters.
