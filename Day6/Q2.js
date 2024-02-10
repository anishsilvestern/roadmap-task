class Cricle {
    constructor(radius = 1.0, colour = "red") {
        this.radius = radius;
        this.colour = colour;
}
getRadius(){
    return this.radius
}
setRadius(radius){
    this.radius = radius
}
getColour(){
    return this.colour
}
setColour(colour){
    this.colour = colour
}
toString(){
    return `Cricle[radius=${this.radius},colour=${this.colour}]`

}
getArea(){
    return Math.PI * (this.radius * this.radius)
}

getCircumference(){
    return 2 * Math.PI * this.radius
}  
}

 let circle101 = new Cricle(10, "red")

 
console.log(circle101.toString())



