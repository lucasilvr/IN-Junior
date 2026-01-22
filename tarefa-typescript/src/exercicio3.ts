interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

function resumirLivro(livro: Livro) {
  return `O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.anoPublicacao}.`;
}

const teste = {
  titulo: "1984",
  autor: "George Orwell",
  anoPublicacao: 1949,
};

console.log(resumirLivro(teste));
