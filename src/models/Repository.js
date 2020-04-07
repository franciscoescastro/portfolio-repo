class Repository {

  constructor(id, title, url, techs) {
    this.id = id
    this.title = title
    this.url = url
    this.techs = techs
    this.likes = 0
  }

  update(title, url, techs) {
    this.title = title
    this.url = url
    this.techs = techs
  }

  like() {
    this.likes++
  }
}

module.exports = Repository