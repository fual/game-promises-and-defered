/**
 * Created by айя on 27.06.2015.
 */
var Ball = function (){

    return {

        move : function (callback){

                var i = 0;
                var _this = this;
                var animation = setInterval(function (){
                    console.log('+');
                    i++;
                    document.getElementById('ball').style.marginLeft = i*20 + 'px';
                    if (i === 21) {
                        clearInterval(animation);
                        _this.endMove();
                        callback();
                    }

                }, 20);


        },
        endMove: function (){
            var i = 20;
            var animation2 = setInterval(function(){
                console.log('-')
                i--;
                if (i === 15) {
                    clearInterval(animation2);
                }
                document.getElementById('ball').style.marginLeft = i*20 + 'px';
            }, 20);
        }
    }

};
var Player = function(id){

    return {
       id: id,
       pass: function(callback){
           var ball = new Ball;
           ball.move(callback);
       },
        smallMove : function(){
            var item = document.getElementById(this.id);
            var i = 0;
            var animation3 = setInterval(function(){

                i++;
                if (i === 30) {
                    clearInterval(animation3);
                }
                item.style.marginLeft = i*10 + 'px';
            }, 10);
        }
    }
}