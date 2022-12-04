const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_HEIGHT = canvas.height = 700
const CANVAS_WIDTH = canvas.width = 500
const explosions = []
let canvasPosition = canvas.getBoundingClientRect()

class Explosion {
    constructor(x,y) {
        this.spriteWidth = 200
        this.spriteHeight = 179
        this.width = this.spriteWidth * 0.7
        this.height = this.spriteHeight * 0.7
        this.x = x - this.spriteWidth * 0.5
        this.y = y - this.spriteHeight * 0.5
        this.image = new Image()
        this.image.src = 'boom.png'
        this.frame = 0
        this.timer = 0
    }
    update() {
        this.timer++
        if(this.timer % 4 === 0) {
            this.frame++
        }
    }
    draw() {
        ctx.drawImage(this.image,this.spriteWidth * this.frame,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.spriteWidth,this.spriteHeight)
    }
}

window.addEventListener('click',function(e){
    let positionX = e.x - canvasPosition.left
    let positionY = e.y - canvasPosition.top
    explosions.push(new Explosion(positionX,positionY))
})

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for (let i = 0; i < explosions.length; i++) {
        explosions[i].update();
        explosions[i].draw();
    }
    requestAnimationFrame(animate)
}
animate()