function book(title, author) {
	this.title = title;
	this.author = author;
}

const book1 = new book('The way of kings', 'Jared Dunn');
const book2 = new book('Harry potter and the chamber of Secrets', 'J.K. Rowling');

var library = {
 	form : document.querySelector('.Form'),
 	inputs : document.getElementsByTagName('input'),
	submitButton : document.getElementById('add-book'),
	shelf : document.getElementById('shelf'),

	collection : [book1, book2],
	


	init: function() {
		this.render();
		this.submitButton.addEventListener('click', this.addBook)
	},

	addBook : function() {
			
			params = library.buildParams();
			
			newBook = new book(params['title'], params['author']);
			library.collection.push(newBook);
			library.render();
		},

		

	buildParams : function() {
		let Param = [];

		for( let input of this.inputs ){
			Param[input.name] = input.value;
		}

		return Param;
	},




	render : function(){

	var html = '';
	this.shelf.innerHTML = '';

	this.collection.forEach(function(book) {
		html += `<div class='book'>
                        <p class="title">Title: ${book.title}</p>
                        <p class="author">Author: ${book.author}</p>
                 </div>`
	});

	this.shelf.innerHTML = html;
},

};

library.init();
