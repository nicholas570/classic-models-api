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

This is a basic CRUD implementation

### Built With

- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeOrm](https://typeorm.io/#/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You need to install this Mysql database: https://www.mysqltutorial.org/mysql-sample-database.aspx

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
   git clone https://github.com/nicholas570/TypeOrm-MySql.git
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

```sh
PORT=8080

TYPEORM_CONNECTION = <mysql>
TYPEORM_HOST = <localhost>
TYPEORM_PORT = <3306>
TYPEORM_USERNAME = <username>
TYPEORM_PASSWORD = <pwd>
TYPEORM_DATABASE = <db>
TYPEORM_SYNCHRONIZE = <true>
TYPEORM_LOGGING = <false>
TYPEORM_ENTITIES = <src/entity/**/*.ts>

JWT_PRIVATE_KEY = <private key>
...
```

<!-- ROUTES -->

### API Routes:

| Method |              Path              |        Purpose         |
| :----: | :----------------------------: | :--------------------: |
|  GET   |   /api/employees?officeCode    | Retrieve all employees |
|  GET   | /api/employees/:employeeNumber | Retrieve one employee  |
|  POST  |         /api/employees         |  Create one employee   |
|  PUT   | /api/employees/:employeeNumber |  Update one employee   |
| DELETE | /api/employees/:employeeNumber |  Delete one employee   |
|  GET   |          /api/offices          |  Retrieve all offices  |
|  GET   |    /api/offices/:officeCode    |  Retrieve one office   |
|  POST  |          /api/offices          |   Create one office    |
|  PUT   |    /api/offices/:officeCode    |   Update one office    |
| DELETE |    /api/offices/:officeCode    |   Delete one office    |
