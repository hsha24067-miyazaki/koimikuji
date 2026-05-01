const fortunes =[
    "大吉　素敵な出会いがあるかも！",
    "中吉　少し勇気を出すと良いことが起きる",
    "小吉　今日はゆっくり過ごそう",
    "凶　無理せず慎重に行動しよう",
    "大凶　今すぐ寝よう^_^"
];

const button =document.getElementById("omikuji-bt");
const result =document.getElementById("result");
const advice =document.getElementById("advice");

button.addEventListener("click",function () {
    const randomNumber=Math.floor(Math.random()*fortunes.length);
    const resultText =fortunes[(randomNumber)];

    result.textContent=fortunes[(randomNumber)];

    if (resultText.includes("大吉")) {
        result.style.color = "blue";
       advice.textContent= "今すぐに行動したほうがヨイ"
    }else if (resultText.includes("中吉")) {
        result.style.color = "green";

    }else if (resultText.includes("小吉")) {
        result.style.color = "orange";
         
    }else if (resultText.includes("凶")) {
        result.style.color = "yellow";

    }else if (resultText.includes("大凶")) {
        result.style.color = "rainbow";
      advice.textContent="おやすみ"
            
            
            

    }

});