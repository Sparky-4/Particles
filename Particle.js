class Particle{
    constructor(x, y, dx, dy, ax, ay, max){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.max = max/10;
        this.ax = ax;
        this.ay = ay;
        this.color = "red";
    }

    setMax(){
        if(this.dx > this.max)
            this.dx = this.max;
        if(this.dy > this.max)
            this.dy = this.max;
        if(this.dx < -1 * this.max)
            this.dx = -1 * this.max;
        if(this.dy < -1 * this.max)
            this.dy = -1 * this.max;
    }

    update(){
        this.x += this.dx;
        this.y += this.dy;
        if(randInt(1, 100) < 5)
            this.dx += randInt(-this.ax, this.ax)/10;
        if(randInt(1, 100) < 5)
            this.dy += randInt(-this.ay, this.ay)/10;
        this.setMax();
        if(this.x > window.innerWidth || this.x < 0){
            this.dx *= -1;
            this.x = (this.x < 0)? 0 : window.innerWidth;
        }
            
        if(this.y > window.innerHeight || this.y < 0){
            this.dy *= -1;
            this.y = (this.y < 0)? 0 : window.innerHeight;
        }
    }

    render(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x-5, this.y-5, 10, 10);
    }
}