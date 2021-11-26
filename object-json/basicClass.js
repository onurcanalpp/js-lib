class Rectangle {
    // Setup
    constructor (_width, _height, _color) {
        console.log("Created!");
        
        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    getArea () {
        return this.width * this.height;
    }

    printDescription () {
        console.log(`I am a Rectangle of ${this.width} x ${this.height} and  ${this.color}`);
    }

}

let myRectangle1 = new Rectangle(3, 3, "blue");
let myRectangle2 = new Rectangle(9, 2, "red");

myRectangle2.printDescription();
console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());
