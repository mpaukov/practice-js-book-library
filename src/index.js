const books = [
	{
		id: '1',
		title: `Apple. Эволюция компьютера`,
		author: `Владимир Невзоров`,
		img: `https://bukva.ua/img/products/449/449532_200.jpg`,
		plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
	},
	{
		id: '2',
		title: `Как объяснить ребенку информатику`,
		author: `Кэрол Вордерман`,
		img: `https://bukva.ua/img/products/480/480030_200.jpg`,
		plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
    оставаясь в безопасности. 
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
    объясняются наглядно с помощью иллюстраций и схем.`,
	},
	{
		id: '3',
		title: `Путь скрам-мастера. #ScrumMasterWay`,
		author: `Зузана Шохова`,
		img: `https://bukva.ua/img/products/480/480090_200.jpg`,
		plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
    какими инструментами ему нужно пользоваться.`,
	},
];

const divRoot = document.getElementById('root');

const leftDiv = document.createElement('div');
const rightDiv = document.createElement('div');
const titleDiv = document.createElement('h1');
const ulDiv = document.createElement('ul');
const btnDiv = document.createElement('button');
titleDiv.textContent = 'Library';
btnDiv.textContent = 'Add';


leftDiv.classList.add('leftDiv');
rightDiv.classList.add('rightDiv');


divRoot.append(leftDiv, rightDiv);
leftDiv.append(titleDiv, ulDiv, btnDiv);

btnDiv.addEventListener('click', addBook)

function renderList() {
	const markup = books.map(({ title, id }) => `<li id='${id}'><p class="title">${title}</p><button  class="delete">Delete</button><button  class="edit">Edit</button></li>`).join('');
	ulDiv.insertAdjacentHTML('afterbegin', markup);
	const linkTitle = document.querySelectorAll('.title');
	const linkDelete = document.querySelectorAll('.delete')
		const linkEdit = document.querySelectorAll('.edit')

	linkTitle.forEach(title => title.addEventListener('click', renderPreview));
	linkDelete.forEach(delete2 => delete2.addEventListener('click', deleteBook));
	linkEdit.forEach(edit => edit.addEventListener('click', editBook));
}

renderList()

function createPreviewMarkup({title, author, img, plot}) {
	return `<h2>${title}</h2><p>${author}</p><img src='${img}'><p>${plot}</p>`;
}

function renderPreview(event) {
	const book = books.find(book => book.title === event.target.textContent);

	const markup = createPreviewMarkup(book);
	rightDiv.innerHTML = ''
	rightDiv.insertAdjacentHTML('afterbegin', markup);
}

function deleteBook(even) {
	const constId = even.target.parentNode.id;
}

function editBook() {
	console.log('edit');
}

function renderForm() {
	const elementForm = `<form>
    <label>
    Title
    <input type="text" name="title" required minlength="6" />
  </label>
	<label>
    Author
    <input type="text" name="author" required />
  </label>
<label>
    Img
    <input type="text" name="img" required minlength="6" />
  </label>
	<label>
    Plot
    <input type="text" name="plot" required minlength="6" />
  </label>
  <button type="submit">Save</button>
</form>`
	return elementForm;
}

function addBook() {
	const markup = renderForm()
	rightDiv.innerHTML = '';
	rightDiv.insertAdjacentHTML('afterbegin', markup);
	const newBook = {
		title: '',
		author: '',
		img: '',
		plot: '',
		id: `${Date.now()}`,
	};
}

renderForm()