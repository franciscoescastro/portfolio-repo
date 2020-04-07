<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Challenge 02: Node.js Concepts
</h3>

## :rocket: About the challenge

This application will store repositories and allow operations create, list, update, delete and repository likes.

**[Full challenge description](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-nodejs)**

### Application routes

- **`POST /repositories`**: Add repository. The request body contains `title`, `url`, and `techs`, the `url` is a link to the repository. When adding a new project it should be stored in the format `{ id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }`; The ID is unique, and the likes start in 0. This route returns the repository stored.

- **`GET /repositories`**: Return all the repositories

- **`PUT /repositories/:id`**: Update repository. The request body contains `títle`, `url`, and `techs` and the url param is the unique ID stored when the repository was added. his route returns the repository updated.

- **`DELETE /repositories/:id`**: Delete a repository based on the given the repository ID in the route param. This route returns http code 204 and no body.

- **`POST /repositories/:id/like`**: Increase the number of likes by 1 given the repository ID in the route param. his route returns the repository updated.

### Setup

```shell
$ yarn
```

### Run server

```shell
$ yarn dev
```

### Run tests

```shell
$ yarn test
```

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**