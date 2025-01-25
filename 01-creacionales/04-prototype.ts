/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */


class Document {

    public title:string;
    public content:string;
    public author:string;



    clone():Document{
        return new Document(this.title,this.content,this.author)
    }
    constructor(title:string,content:string,author:string){
        this.title = title;
        this.content = content;
        this.author = author;
    }


     displayInfo(){
        console.log(`
            title: ${this.title}
            content: ${this.content}
            author: ${this.author}
            `);
    }
}


function main(){
    const document1 = new Document('Cotización','500 Dólares','Fernando')

    console.log({document1});
    document1.displayInfo();

// const document2 = { ...document }
const document2 = document1.clone();
document2.title = 'Nuevo título'
console.log({document2});
document2.displayInfo();


}

main();