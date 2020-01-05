export class Certification
{
 public name:String;
 public description;
 public year;
 public imagePath: String;
 public data :String
 constructor(name:String, description:String, imagePath:String,year :String) {
 	this.name=name;
 	this.description = description;
 	this.imagePath=imagePath;
 	this.year = year;
  }
 
}