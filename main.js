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