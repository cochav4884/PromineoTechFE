//TODO: Create a menu app as seen in this week's video. What you creat is up to you as long as it meets the follwoing requirements:
// Use at least one array
// Use at least two classes
// Your menu should have the options to create, view, and delete element.

// YarnSkeins


//yarnSkeins array
    //material
    //color
class yarnSkeins {
    constructor(material, color, size) {
        this.material = material;
        this.color = color;
        this.size = size;
    }
}

//class menu
class Menu {
    constructor() {
        this.yarnSkeins = [];
    }

    //yarnSkeins array

   

    //add yarnSkeins
    //prompt for a material
    //prompt for a color
    //create new yarnSkein and push new yarnSkein into array
    addYarnSkeins() {
        let yarnSkeinMaterial = prompt("Enter yarn skein material:");
        let yarnSkeinColor = prompt("Enter the yarn skein color:");
        let yarnSkeinSize = prompt("Enter the yarn skein size:");
        this.yarnSkeins.push(new yarnSkeins(yarnSkeinMaterial, yarnSkeinColor, yarnSkeinSize));
    }



    //delete yarnSkeins
    deleteYarnSkeins() {
        let yarnSkeinIndex = prompt("Enter yarn skein index to DELETE:");
        this.yarnSkeins.splice(yarnSkeinIndex, 1);
    }

    //view yarnSkeins
    viewAllYarnSkeins() {
        let displayYarnSkeins = '';
        for(let i = 0; i < this.yarnSkeins.length; i++) {

            displayYarnSkeins += `
            ${i}) ${this.yarnSkeins[i].material} ${this.yarnSkeins[i].color} ${this.yarnSkeins[i].size}`
        }

        alert(`
        Yarn Skein Inventory:
        -----------------------
        
        ${displayYarnSkeins}
        `);
    }

     //see a menu
     showMainMenu() {
        return prompt(`
        Main Menu:
        ---------------------
        0) Exit Menu
        1) Add Yarn Skein
        2) Delete Yarn Skein
        3) View All Yarn Skeins    
        `);
    }

    //start the menu
    start() {
        let selection = this.showMainMenu();

        while(selection != 0) {

            switch(selection) {
                
                case "1": this.addYarnSkeins();
                break;

                case "2": this.deleteYarnSkeins();
                break;

                case "3": this.viewAllYarnSkeins();
                break;

                default: selection = 0;
            }
            selection = this.showMainMenu();
        }
        alert("Exiting Menu... goodbye!");
    }
}

//instantiate the menu and invoke the start method

let menu = new Menu();

menu.start();