class Usuario {

  constructor () {
    this.nome = '';
    this.sobrenome = '';
  }

  set setNome(nome) {
    this.nome = nome;
  }

  get getNome() {
    return this.nome;
  }

}