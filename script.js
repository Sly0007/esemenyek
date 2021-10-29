$('.button1').click(()=> {
    console.log("Most rám kattintottál");}
)

$(".button2").click(()=> {
    $(".button1").text('megváltozott')
})

$('.button3').click(()=>{
   let col = $(".szin").val();
    
   $(".button3").css('background-color',col)
})