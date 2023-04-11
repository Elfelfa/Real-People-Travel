$(document).ready(
    function() 
    {
        $("#startBtn").on("click", function () {fadeOut($("#test"))});   
    }
);

function sceneTransition()
{

}

function fadeOut (e)
{
    if (!e.css("opacity")) {
        e.css("opacity", 1);
    }

    var fadeEffect = setInterval(function ()
    {
        if (parseFloat(e.css("opacity")).toFixed(1) < 0.1)
        {
            clearInterval(fadeEffect);
        }
        else
        {
            let i = parseFloat(e.css("opacity")).toFixed(1);
            e.css("opacity", (i -= 0.1));
        }
    }, 50);
}