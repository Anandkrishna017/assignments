let words=
[
    {
        jumbled:"rangoe",
        correct:"orange"
    },
    {
        jumbled:"mputcoer",
        correct:"computer"
    },
    {
        jumbled:"boilem",
        correct:"mobile"
    },
    {
        jumbled:"letobt",
        correct:"bottle"
    },
    {
        jumbled:"arphenoe",
        correct:"earphone"
    },
    {
      jumbled:"bbacklrrey",
      correct:"blackberry"
    },
    {
      jumbled:"papel",
      correct:"apple"
    }

]

let currentWord=0;
let score=0;

function displayWord()
{
    document.querySelector("#j-word").innerText = 
    words[currentWord].jumbled;

    document.querySelector("#score").innerText=score;
 
}


displayWord();
function message()
{
               let msg="";

                if(score===700){
                    msg="Amazing game "+score;
                }
                else if(score===600){
                    msg="Good Game "+score;
                }
                else if(score===500){
                    msg="Good Try "+score;
                }
                else if(score===400)
                {
                  msg=" You need to try hard"+score;
                }
                else if(score<300)
                {
                  msg="Bad score"+score;
                }
                
                alert(msg);

                location.reload();
                
                
}


function checkAnswer()
{
    
            let answer=document.querySelector("#inp").value;

            if(answer.toLowerCase()===words[currentWord].correct.toLowerCase()){

                score=score+100;

            }

            if(currentWord==words.length-1)
            {

                message();

                
            }
            else
            {
                currentWord++;
                displayWord();
                document.querySelector("#inp").value="";
            }

         
}