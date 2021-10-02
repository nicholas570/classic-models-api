<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#routes">Routes</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This application is an Express starter, configured with TypeScript/Eslint/Prettier, a precommit hook and the MVC architecture

### Built With

- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
- node > 12
  ```sh
  npm install node@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/nicholas570/express-ts-eslint-prettier-starter-classes.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the server
   ```sh
   npm run start:dev
   ```

<!-- ENV -->

### Env sample

```
#DATABASE
DB_HOST=<YOUR_HOST>
DB_NAME=<YOUR_DB_NAME>
DB_USER=<YOUR_DB_USER>
DB_PASSWORD=<YOUR_DB_PASSWORD>
...
```

<!-- ROUTES -->

### API Routes:

| Method |   Path    |    Purpose    |
| :----: | :-------: | :-----------: |
|  GET   | /api/test | fake endpoint |

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Eslint](https://eslint.org/)
- [Ts](https://www.typescriptlang.org/)
- [Husky](https://github.com/typicode/husky)
