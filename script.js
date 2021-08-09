function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

class Dayday {
    rInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    constructor(id, dop) {
        this.id = id;
        this.dop = dop;
        this.style = this.rInteger(1, 14);//
        this.fnt = new FontFace(this.id, 'url(f/' + fonts[this.style] + ')');
        this.base_image = new Image();
        this.canvas = document.getElementById(this.id);
        if (this.canvas.getContext) {
            this.ctx = this.canvas.getContext('2d');
            this.ctx.rect(0, 0, 1240, 1754);
            this.ctx.fillStyle = (this.dop === 0) ? 'white' : this.rand_bg();
            this.ctx.fill();
        }
    }
    
    rand_color() {
        return 'rgb(' + this.rInteger(50, 200) + ', ' + this.rInteger(50, 200) + ',' + this.rInteger(50, 200) + ')';
    }

    rand_bg() {
        var colors = [];
        var colors = ['white','#2196f3','#101010','yellow','red','blue'];
        return colors[this.rInteger(0, colors.length)];
    }

    time() {
        let self = this;
        this.fnt.load().then(function (font) {
            document.fonts.add(font);
            self.base_image.src = 'logo.png';
            self.base_image.onload = function () {
                self.draw_time(self.id, self.dop);
            };
        });
    }

    draw_time() {
        this.ctx.rect(0, 0, 1240, 1754);
        this.ctx.fillStyle = "white";
        this.ctx.fill();
        this.ctx.fillStyle = "black";
        this.ctx.font = times[this.style]['text']['size'] + "px " + this.id;
        this.ctx.fillText("Хороших вам", times[this.style]['text']['left'], times[this.style]['text']['top']);
        this.ctx.font = times[this.style]['date']['size'] + "px " + this.id;
        this.ctx.fillText($('#time').html(), times[this.style]['date']['left'], times[this.style]['date']['top']);
        this.ctx.drawImage(this.base_image, 595, 1600);
        $('#h' + this.id).attr('href', this.canvas.toDataURL("image/png"));
        $('#a' + this.id).attr('src', this.canvas.toDataURL("image/png"));
    }

    day() {
        let self = this;
        this.fnt.load().then(function (font) {
            document.fonts.add(font);
            self.base_image.src = 'logo.png';
            self.base_image.onload = function () {
                self.draw(self.id, self.dop);
            };
        });
    }

    draw() {
        this.ctx.drawImage(this.base_image, 595, 1600);
        if (this.dop === 1 && this.rInteger(1, 3) === 1) {
            this.ctx.setTransform (1, (-1 * this.rInteger(1, 3) / 10), 0, 1 + (this.rInteger(1, 5)/10), 0, 0);
        }
        this.ctx.fillStyle = (this.dop === 0) ? 'black' : this.rand_color();
        this.ctx.font = params[this.style]['text']['size'] + "px " + this.id;
        this.ctx.fillText("С днем дня!", params[this.style]['text']['left'], params[this.style]['text']['top']);
        this.ctx.fillStyle = (this.dop === 0) ? 'black' : this.rand_color();
        this.ctx.font = params[this.style]['date']['size'] + "px " + this.id;
        this.ctx.fillText($('#date').html(), params[this.style]['date']['left'], params[this.style]['date']['top']);
        if (this.dop === 1) {
            
            this.filter();
        }
        $('#h' + this.id).attr('href', this.canvas.toDataURL("image/png"));
        $('#a' + this.id).attr('src', this.canvas.toDataURL("image/png"));
    }
    filter() {
        let imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        let farr = ['offset_green', 'horizontal_lines', 'extreme_offset_blue', 'green_specks', 'neue', 'lix', 'ryo', 'solange', 'crimson', 'eon'];
        let newImgData = pixelsJS.filterImgData(imgData, farr[this.rInteger(0, farr.length - 1)]);
        this.ctx.putImageData(newImgData, 0, 0);
    }
}



var d1 = new Dayday('day1', 0);
d1.time();
d1 = null;
var d2 = new Dayday('day2', 0);
d2.day();

var d3 = new Dayday('day3', 1);
d3.day();


        