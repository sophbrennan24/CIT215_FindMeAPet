const allDogs = [
    {
        dogName: "Anthony",
        breed: "Terrier Pit Bull Mix",
        age: 6
    },
    {
        dogName: "Axel",
        breed: "Terrier Pit Bull Mix",
        age: 2
    },
    {
        dogName: "Baluna",
        breed: "Terrier Pit Bull Mix",
        age: 1
    },
    {
        dogName: "Barry",
        breed: "Australian Cattle Dog",
        age: 5
    },
    {
        dogName: "Beanie",
        breed: "Terrier Pit Bull Mix",
        age: 2
    },
    {
        dogName: "Bebe",
        breed: "Terrier Pit Bull Mix",
        age: 6
    },
    {
        dogName: "Boo Boo",
        breed: "American Eskimo",
        age: 9
    },
    {
        dogName: "Bowser",
        breed: "Mastiff Mix",
        age: 3
    },
    {
        dogName: "Brutus Xavier",
        breed: "Terrier Pit Bull Mix",
        age: 5
    },
    {
        dogName: "Buddy",
        breed: "Terrier Pit Bull Mix",
        age: 2
    }
];

function findDogs() {
    
    const minAge = document.querySelector('#minAge').value;
    
    if (minAge !== '' && !isNaN(minAge) && minAge >= 0) {
        const selectedDogs = [];

        allDogs.forEach(dog => {
            if (dog.age > minAge) {
                selectedDogs.push(dog);
            }
        });

        displayDogs(selectedDogs);
    } else {
        alert("Please enter a valid age.");
    }
}

function displayDogs(dogs) {
    const dogList = document.querySelector('.dog-list');
    dogList.innerHTML = ''; 

    if (dogs.length > 0) {
        dogs.forEach(dog => {
            const dogDiv = document.createElement('div');
            dogDiv.innerHTML = `<p>${dog.dogName} is ${dog.age} years old and is a ${dog.breed}.</p>`;
            dogList.appendChild(dogDiv);
        });
    } else {
        dogList.innerHTML = '<p>No dogs found older than the entered age.</p>';
    }
}
