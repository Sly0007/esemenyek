$('.button1').click(()=> {
    console.log("Most rám kattintottál");}
)

$(".button2").click(()=> {
    $(".button1").text('megváltozott')
})

$('.button3').click(()=>{
    $("button").css('background-color','Green')
})