class question {
    constructor(id, que, ans) {
        this.id = id;
        this.que = que;
        this.ans = ans;
    }
}

var que1 = new question(1,"10+10=?",[10,20,30,40]);
var answer1;
que1.checkAns = function(answer1){
    if (answer1==this.ans[1]){
        return true;
    }else{
        return false;
    }
}
var que2 = new question(2,"10+20=?",[10,20,30,40]);
var answer2;
que2.checkAns = function(answer2){
    if (answer2==this.ans[2]){
        return true;
    }else{
        return false;
    }
}
var que3 = new question(3,"10+30=?",[10,20,30,40]);
var answer3;
que3.checkAns = function(answer3){
    if (answer3==this.ans[3]){
        return true;
    }else{
        return false;
    }
}
var que4 = new question(2,"15+25=?",[10,20,30,40]);
var answer4;
que4.checkAns = function(answer4){
    if (answer4==this.ans[3]){
        return true;
    }else{
        return false;
    }
}

var html = document.getElementById("form1");
var x= "";
for(var i=0;i<que1.ans.length;i++){
    
    x+= "<input type=radio name=que1 value="+que1.ans[i]+">"+que1.ans[i]+"<br>";
  }
document.getElementById("ans").innerHTML=x;


