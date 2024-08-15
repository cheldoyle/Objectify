let contacts = {
    list: [
        {
            fName: "John",
            lName: "Doe",
            phoneNum: "000-000-0000",
            email: "johndoe@email.com"
        },
        {
            fName: "Funky",
            lName: "Monkey",
            phoneNum: "111-111-1111",
            email: "funkymonkey@email.com"
        },
        {
            fName: "Caroline",
            lName: "Meow",
            phoneNum: "228-257-0526",
            email: "caroline@cat.com"
        }
    ],

    addContact: function(first, last, num, mail) {
        this.list.push({
            fName: first,
            lName: last,
            phoneNum: num,
            email: mail
        });
    },

    viewContacts: function() {
        for (let i = 0; i < this.list.length; i++) {
            console.log(this.list[i]);
        }
    },

    searchContacts: function(name) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].fName === name) {
                console.log(this.list[i]);
            }
        }
    }
};


contacts.viewContacts();
contacts.addContact("Bingle", "Bangle", "999-999-9999", "bing@bong.com");
contacts.viewContacts();
contacts.searchContacts("Caroline");



let students = {
    list: [
        {
            studentName: "Alice",
            studentGrade: 85,
        },
        {
            studentName: "Bob",
            studentGrade: 76,
        },
        {
            studentName: "Charlie",
            studentGrade: 92,
        },
        {
            studentName: "David",
            studentGrade: 63,
        },
        {
            studentName: "Eve",
            studentGrade: 78,
        }
    ],
    classAverage: function() {
        let avg = 0;
        for(let i = 0; i < this.list.length; i++) {
            avg += this.list[i].studentGrade;
        }
        avg = avg / this.list.length;
        console.log(avg);
        return avg;
    },
    needyStudents: function() {
        avg = this.classAverage();
        for(let i = 0; i < this.list.length; i++) {
            if (this.list[i].studentGrade < avg) {
                console.log(this.list[i]);
            };
        };
    },
    displayStudents: function() {
        for(let i = 0; i < this.list.length; i++) {
            console.log(this.list[i]);
        }
    }
};

students.displayStudents();
students.classAverage();
students.needyStudents();



let movies = {
    list: [
        {
            title: "Monty Python's Meaning of Life",
            genre: "comedy",
            rating: 0
        },
        {
            title: "Toxic Avenger",
            genre: [
                "horror",
                "comedy"
            ],
            rating: 0
        },
        {
            title: "Akira",
            genre: [
                "sci-fi",
                "action"
            ],
            rating: 0
        }
    ],
    addMovie: function(movName, movGenre, movRating) {
        this.list.push({
            title: movName,
            genre: movGenre,
            rating: movRating
        });
    },
    rateMovie: function(titleName, titleRating) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].title == titleName) {
                this.list[i].rating = titleRating;
            };
        };
    },
    displayMovies: function() {
        for (let i = 0; i < this.list.length; i++) {
            console.log(this.list[i]);
        }
    }
};

movies.displayMovies();
movies.addMovie("Dorohedoro", ["fantasy", "sci-fi"], 10);
movies.rateMovie("Toxic Avenger", 10);
movies.displayMovies();


let books = {
    list: [
        { 
            title: "The Great Gatsby", 
            status: "available" },
        { 
            title: "1984", 
            status: "borrowed" },
        { 
            title: "To Kill a Mockingbird", 
            status: "available" },
        { 
            title: "The Catcher in the Rye", 
            status: "borrowed" },
        { 
            title: "Moby-Dick", 
            status: "available" }
    ],
    listAvailableBooks: function() {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].status == "available") {
                console.log(this.list[i]);
            }
        };
    },
    listBorrowedBooks: function() {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].status == "borrowed") {
                console.log(this.list[i]);
            }
        };
    }
};

books.listAvailableBooks();
books.listBorrowedBooks();


let recipes = {
    list: [
        { 
            title: "Pancakes", 
            ingredients: ["Flour", "Eggs", "Milk"], 
            instructions: "Mix and cook on a griddle." },
        { 
            title: "Salad", 
            ingredients: ["Lettuce", "Tomatoes", "Cucumbers"], 
            instructions: "Chop and toss with dressing." }
      ],
    addRecipe: function(recName, recIngs, recInstructs) {
        this.list.push({
            title: recName,
            ingredients: recIngs,
            instructions: recInstructs
        });
    },
    updateInstructs: function(recName, recInstructs) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].title == recName) {
                this.list[i].instructions = recInstructs;
            }
        }
    },
    displayRecipes: function() {
        for (let i = 0; i < this.list.length; i++) {
            console.log(this.list[i]);
        }
    }
};

recipes.displayRecipes();
recipes.addRecipe("Ramen", ["Noodles", "Broth", "Toppics"], "Boil noodles, heat broth, add noodles and broth to bowl, add toppings");
recipes.updateInstructs("Pancakes", "Skip eggs, make vegan");
recipes.displayRecipes();


// I added a car ID section for more realistic searches on specific items for updates. In cases where multiples can exist but only one price should update.
let cars = {
    list: [
        { 
            make: "Toyota", 
            model: "Camry", 
            year: 2020, 
            price: 24000,
            ID: 763887},
        { 
            make: "Honda", 
            model: "Civic", 
            year: 2019, 
            price: 22000,
            ID: 567343}
    ],
    addCar: function(carMake, carModel, carYear, carPrice, carID) {
        this.list.push({
            make: carMake,
            model: carModel,
            year: carYear,
            price: carPrice,
            ID: carID
        })
    },
    updatePrice: function(carID, newPrice) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].ID == carID) {
                this.list[i].price = newPrice;
            };
        };
    },
    displayCars: function() {
        for (let i = 0; i < this.list.length; i++) {
            console.log(this.list[i]);
        };
    }
};

cars.displayCars();
cars.addCar("Honda", "Trail 125", 2024, 4000, 582646);
cars.updatePrice(763887, 18000);
cars.displayCars();


let pets = {
    list: [
        {
            petName: "Caroline",
            petType: "cat",
            petAge: 8
        },
        {
            petName: "Chloe",
            petType: "dog",
            petAge: 12
        },
        {
            petName: "Gunner",
            petType: "dog",
            petAge: 10
        }
    ],
    addPet: function(petNameNew, petTypeNew, petAgeNew) {
        this.list.push ({
            petName: petNameNew,
            petType: petTypeNew,
            petAge: petAgeNew
        })
    },
    showOffPets: function() {
        for (let i = 0; i < this.list.length; i++) {
            console.log(this.list[i]);
        };
    }
};

pets.showOffPets();
pets.addPet("Dingo", "dog", 4);
pets.showOffPets();