//regular function

let obj = {

    name: "shashank",

    later: function () {

        console.log(this)

        console.log(this.getaddress());

        console.log(`$(this.name}`);

    },

    getaddress: function () {

        return "bangalore";

    }

};



obj.later();



//flat arrow function

let obj1 = {

    name: "priya",

    later: () => {

        console.log(this)

        console.log(this.getaddress());

        console.log(`$(this.name}`);

    },

    getaddress: function () {

        return "shimoga";

    }

};