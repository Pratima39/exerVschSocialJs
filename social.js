var socialBook = {
    name:"Paul",
    age: 30,
    city: "Utah",
    cars: ["BMW", "Mercedes", "Toyota","Mustang"],
    introduceMyself: function() {
        return "Hi my name is" + this.name + " and I'm from" + this.city;
    },
    education: [
        {
            school:" Harward College",
            degree: "IT programming",
            startingYear: 2004,
            finishingYear: 2009,
            teachers: [
                {
                    name: "John",
                    age:47,
                    specialty: "Database"
                },
                {
                    name: "Josh",
                    age:45,
                    specialty: "Networks"
                }
            ]
        },
        {
            school:" Oxford College",
            degree: "Bachelor in Computer Science",
            startingYear: 2008,
            finishingYear: 2013,
            teachers: [
                {
                    name: "Maya",
                    age:37,
                    specialty: "English"
                },
                {
                    name: "Charles",
                    age:42,
                    specialty: "Java Script"  
                }
            ]
        },
        {
            school:"Starford College",
            degree: "Masters in Computer Science",
            startingYear: 2010,
            finishingYear: 2015,
            teachers: [
                {
                    name: "Meghan",
                    age:34,
                    specialty: "Machine Learning"
                },
                {
                    name: "Madeline",
                    age:39,
                    specialty: "Game development"  
                }
            ]
        },
    ]
}