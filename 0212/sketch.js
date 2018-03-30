let circleX = 0
let i = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw(){
  background("#ddadff")
  fill(255,255,255)

  noStroke()
  if(circleX < windowWidth && i<windowWidth ){
    circleX += 10
    i += 10
      }
  else {
    circleX -= 10
    if (circleX == 0){
      i -= windowWidth
    }
  }
  for (let h = 60; h<windowHeight; h+=(windowHeight/5)){
    ellipse(circleX,h,100)
  }

}
