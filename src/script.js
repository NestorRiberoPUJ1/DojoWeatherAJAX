function alerta()
{
    console.log(this.innerText);
    alert("Cambio de ciudad "+this.innerText);
}

function hideParent(element)
{
    parent=element.parentElement;
    parent.remove();
}

document.querySelectorAll('.nav-bar ul li a').forEach(item => {
    item.addEventListener('click', alerta)
})

function changeUnits(element)
{
    console.log(element.value);
    if(element.value=="C")
    {
        var myT=document.querySelectorAll('.min-t, .max-t');
        for(x=0; x<myT.length;x++)
        {
            value= myT[x].innerText.match(/\d+/g).map(Number)[0];
            myT[x].innerText=Math.round((value - 32) * 5 / 9)+"°";
        }


    }
    else if (element.value=="F")
    {
        var myT=document.querySelectorAll('.min-t, .max-t');
        for(x=0; x<myT.length;x++)
        {
            value= myT[x].innerText.match(/\d+/g).map(Number)[0];
            myT[x].innerText= value * 9 / 5 + 32+"°";
        }

    }
}



/*document.querySelectorAll('.some-class').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
    })
})*/