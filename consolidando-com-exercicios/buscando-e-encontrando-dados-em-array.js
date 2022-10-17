/*
    # Buscando e encontrando dados em Array

    - Baseado no Array de livros por categoria abaixo, faça os seguintes convites 

        * Contar o número de categoria e o número de livros em cada categoria
        * Contar o número de autores
        * Mostrar livors do autor Augusto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: " T. Harv Eker",
            },
            {
                tiitle: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                titlle: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ] 
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Voce é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                titlle: "OS sete hábitos das pessoas altamente eficazes",
                author: "Sthphen R. Covey",
            },
        ] 
    }
]

const totalCategorys = booksByCategory.length
console.log(totalCategorys)

for(let category of booksByCategory) {
    console.log('Total de livros na categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author) 
            }
        }
    }
    console.log("total de autores: ", authors.length)
}

countAuthors()

function booksOfAugustoCury() {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === 'Augusto Cury') {
                books.push(book.title) 
            }
        }
    }
    console.log("Livros do autor: ", books)
}

booksOfAugustoCury()

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title) 
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor("Augusto Cury")