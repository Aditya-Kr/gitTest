document.addEventListener('DOMContentLoaded', function() {
   loadFruit();
});

function loadFruit(){
	//debugger;
	const fruitContainer = document.querySelector('#fruitcontainer');
   const fruitURL = "http://localhost:3000/fruits";
   fetch(`${fruitURL}`)
    .then( response => response.json() )
    .then( fruitData => fruitData.forEach(function(fruit) {
      fruitContainer.innerHTML += `
      <div id=${fruit.id}>
        <h4>${fruit.name}
        <button data-id="${fruit.id}" id="delete-${fruit.id}" data-action="delete">Delete</button> </h4>
      </div>`
    })) // end of fruit fetch
};
fruitform.addEventListener('submit', (e) => {
	e.preventDefault();
     const fruitInput = fruitform.querySelector('#fruit').value;
	 var count=10;
	 var expiryDate="22-june-2022";
	 const fruitURL = "http://localhost:3000/fruits";
	 fetch(`${fruitURL}`, {
      method: 'POST',
      body: JSON.stringify({
        name: fruitInput,
        count: count,
        expiryDate: expiryDate
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
});

document.querySelector('#fruitcontainer').addEventListener('click', (e) => {
    if (e.target.dataset.action === 'delete') {
	 const fruitURL = "http://localhost:3000/fruits";
        fetch(`${fruitURL}/${e.target.dataset.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then( response => response.json())
    }
  })