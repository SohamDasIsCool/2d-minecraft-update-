var canvas=new fabric.Canvas('myCanvas');
var canva=document.getElementById("myCanvas");
ctx = canva.getContext("2d");
var grounde="ground.png";
groundd=new Image();
groundd.onload=ground;
groundd.src=grounde;
random = Math.floor(Math.random() * 8);
function ground() {
    for (x = 0; x < random; x++) {
        ctx.drawImage(groundd,0,550-x*50,50,50);
    }
}
grounde="ground.png";
groundd=new Image();
groundd.onload=ground2;
groundd.src=grounde;
function ground2() {
    for (y = 0; y < random; y++) {
        ctx.drawImage(groundd,50,550-y*50,50,50);
    }
}
grounde="ground.png";
groundd=new Image();
groundd.onload=ground3;
groundd.src=grounde;
function ground3() {
    for (z = 0; z < random-1; z++) {
        ctx.drawImage(groundd,100,550-z*50,50,50);
    }
}
grounde="ground.png";
groundd=new Image();
groundd.onload=ground4;
groundd.src=grounde;
random2=Math.floor(Math.random() * 2);
function ground4() {
    if( random2==1) {
    random;
    }
    else{
    random-=2;
    }
    for (a = 0; a < random; a++) {
        ctx.drawImage(groundd,150,550-a*50,50,50);
    }
}
grounde="ground.png";
groundd=new Image();
groundd.onload=ground5;
groundd.src=grounde;
function ground5() {
    for (b = 0; b < random-Math.floor(Math.random() * 3); b++) {
        ctx.drawImage(groundd,200,550-b*50,50,50);
    }
}
stone="cloud.jpg";
stoned=new Image();
stoned.onload=stonee;
stoned.src=stone;
function stonee() {
    for (c = 0; c < random-5; c++) {
        ctx.drawImage(stoned,250,550-c*50,50,50);
    }
}
stone="cloud.jpg";
stoned=new Image();
stoned.onload=stonee2;
stoned.src=stone;
function stonee2() {
    for (d = 0; d < random-5; d++) {
        ctx.drawImage(stoned,250,600-d*50,50,50);
    }
}
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";
var block_image_object="";
function player_update() {
fabric.Image.fromURL("player.png",function(img) {
player_object=img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:player_y,
    left:player_x
});
canvas.add(player_object);
});
} 
function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img) {
    block_image_object=Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_image_object);
    });
    } 
    window.addEventListener("keydown",my_keydown);
    function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true&&keyPressed == '80') {
    console.log("p and shift pressed together");
    block_img_width +=10;
    block_img_height +=10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(e.shiftKey == true&&keyPressed == '77') {
        console.log("m and shift pressed together");
        block_img_width -=10;
        block_img_height -=10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
        }
        if (keyPressed == '38') {
        up();
        console.log("up");
        }
        if (keyPressed == '40') {
            down();
            console.log("down");
            }
         if (keyPressed == '37') {
             left();
            console.log("left");
            }
         if (keyPressed == '39') {
            right();
             console.log("right");
             }
            if (keyPressed == '87') {
            new_image('wall.jpg');
            console.log("w");
            }
            if (keyPressed == '71') {
                new_image('ground.png');
                console.log("g");
                }
            if (keyPressed == '76') {
                new_image('light_green.png');
                console.log("l");
                }
            if (keyPressed == '84') {
                new_image('trunk.jpg');
                console.log("t");
                 }
                 if (keyPressed == '82') {
                    new_image('roof.jpg');
                    console.log("r");
                    }
                    if (keyPressed == '89') {
                        new_image('yellow_wall.png');
                        console.log("y");
                         }
                         if (keyPressed == '68') {
                            new_image('dark_green.jpg');
                            console.log("d");
                             }
                             if (keyPressed == '85') {
                                new_image('different.jpg');
                                console.log("u");
                                 }
                                 if (keyPressed == '67') {
                                    new_image('cloud.jpg');
                                    console.log("c");
                                     }
    }
    function up() {
        if (player_y >= 0) {
            player_y-=block_image_height;
            console.log("Block image height="+ block_image_height);
            console.log("When up arrow is pressed, X="+player_x+", Y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
    function down() {
        if (player_y <= 500) {
            player_y+=block_image_height;
            console.log("Block image height="+ block_image_height);
            console.log("When down arrow is pressed, X="+player_x+", Y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
    function left() {
        if (player_x > 0) {
            player_x-=block_image_width;
            console.log("Block image width="+ block_image_width);
            console.log("When left arrow is pressed, X="+player_x+", Y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
    function right() {
        if (player_x <= 850) {
            player_x+=block_image_width;
            console.log("Block image width="+ block_image_width);
            console.log("When right arrow is pressed, X="+player_x+", Y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }