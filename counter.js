let counter = 0;
let upgradedCounter = 1;

let costIncrease = 100;
let clickCost = 100;

let upgrader = 1;

let winCondition = 1000;

alert("Get To 1000 Clicks To Win!")

for(let i = 0; i <= 10; i++)
{
    document.getElementById("button1").onclick = function()
    {
        counter += upgradedCounter;
        document.getElementById("button1").innerHTML = counter;

        if(counter == winCondition)
        {
            document.getElementById("winner").innerHTML = `You Won Totall Clicks ${winCondition}, Refresh To Restart`;
        }
        console.log(counter);
    }

    console.log(counter);

    document.getElementById("button2").onclick = function ()
    {
        if(counter < clickCost)
        {
            alert("Not Enough Clicks");
        }

        else if(counter >= clickCost)
        {
            counter = counter - clickCost;
            clickCost += costIncrease;
            document.getElementById("button2").innerHTML = `Double Your Clicks $${clickCost}`;
            upgradedCounter += upgrader;

        }
    }

}