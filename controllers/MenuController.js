const inquirer = require('inquirer');

module.exports = class MenuController {
    constructor(){
        this.mainMenuQuestions = [
            {
            type: "list",
            name: "mainMenuChoice",
            message: "Please choose from an option below: ",
            choices: [
                "Add new contact",
                "Exit",
                "Date"
            ]
        }
      ];
      this.contacts = [];
    }

    main(){
        console.log(`Welcome to AddressBloc!`);
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
            switch(response.mainMenuChoice){
                case "Add new contact":
                    this.addContact();
                    break;
                case "Exit":
                    this.exit();
                case "Date":
                    this.getDate();
                    break;
                default:
                    console.log("Invalid input");
                    this.main();
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

  clear(){
    console.log("\x1Bc");
    }

  addContact(){
    this.clear();
    console.log('addContact called');
    this.main();
    }

    exit(){
        console.log("Thanks for using AddressBloc!");
        process.exit();
    }

    getDate(){
        var time = new Date().getTime();
    var date = new Date(time);
    console.log(date.toString());
    this.main();   
    }
}