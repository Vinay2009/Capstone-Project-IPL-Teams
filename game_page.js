player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;

function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lowerCase="+word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    length_divide=Math.floor(word.length/3);
    charAt4=word.charAt(length_divide);
    console.log(charAt4);

    length_minus=length_divide.length-1;
    charAt5 = word.charAt(length_minus);
    console.log(charAt5);

    length_divide_1=Math.floor(length_minus.length/2);
    charAt6=word.charAt(length_divide_1);
    console.log(charAt6);

    length_minus_2=length_minus.length-1;
    charAt7 = word.charAt(length_minus_2);
    console.log(charAt7);

    length_divide_3=Math.floor(length_minus_2.length/2);
    charAt8=word.charAt(length_divide_3);
    console.log(charAt8);

    length_minus_3=length_minus_2.length - 1;
    charAt9 = word.charAt(length_minus_3);
    console.log(charAt9);

    length_divide_4=Math.floor(length_minus_3.length/2);
    charAt10=word.charAt(length_divide_4);
    console.log(charAt10);

    remove_charAt1=word.replace(charAt1, "_");
    remove_charAt2=remove_charAt1.replace(charAt2, "_");
    remove_charAt3=remove_charAt2.replace(charAt3, "_");
    remove_charAt4=remove_charAt3.replace(charAt4, "_");
    remove_charAt5=remove_charAt4.replace(charAt5, "_");
    remove_charAt6=remove_charAt5.replace(charAt6, "_");
    remove_charAt7=remove_charAt6.replace(charAt7, "_");
    remove_charAt8=remove_charAt7.replace(charAt8, "_");
    remove_charAt9=remove_charAt8.replace(charAt9, "_");
    remove_charAt10=remove_charAt9.replace(charAt10, "_");
    console.log(remove_charAt10);

    question_word= "<h4 id='word_display'> Q-" +remove_charAt10+"</h4>";
    input_box="<br>Answer:<input type='text' id='input_check_box'>";
    check_button= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word+input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case -" + answer);
    if(answer == word)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score+1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score+1;
            document.getElementById("player2_score").innerHTML = player2_score;    
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML="Question Turn -" + player2_name;
    }
     else
     {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML="Question Turn -" + player1_name;     
     }
     if(answer_turn == "player1")
     {
         answer_turn="player2";
         document.getElementById("player_answer").innerHTML="Answer Turn -" + player2_name;    
     }
     else{
         answer_turn = "player1";
         document.getElementById("player_answer").innerHTML="Answer Turn -" + player1_name;
     }
     document.getElementById("output").innerHTML = "";
}