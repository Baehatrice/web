let x = 10

class Circle{
  constructor(x,y,r,color){
    this.x= x
    this.y= y
    this.r= r
    this.color= color
  }

  draw(){
    fill(this.color)
    noStroke()
    ellipse(this.x,this.y,this.r)
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  circles = new Array(5)
  for(let i = 0; i <circles.length; i++){
    circles[i] = new Circle(x,map(i,0,4,100,height-100),50,"white")
  }
}

function draw(){
  background("#ddadff")
  for(let circle of circles){
    circle.x+=1
    if(circle.x>=width+(circle.r/2)){
      circle.x=-(circle.r/2)
    }
    circle.draw()

  }
}

function mouseClicked(){
  for(let circle of circles){
    if((circle.r/2)>dist(circle.x,circle.y,mouseX,mouseY)){
      circle.color=color(random(0,255),random(0,255),random(0,255))
    }
  }
}
