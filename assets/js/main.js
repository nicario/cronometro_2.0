let tela = document.querySelector(".div__div");
let botoes = document.querySelectorAll(".button__div2");
let x = 0;
let y = 0;
let z = 0;
let h = 0;
let tempo;


  botoes.forEach(function(btn){
    btn.addEventListener("click", function(){
      if(btn.textContent == "Start"){
        parar();
        tempo = setInterval(() => {
          if(h < 1000){
            h = h+1;
            tela.textContent = `${z}:${y}:${x}:${h}`
          }else if(h == 1000){
            x = x+1;
            h= 0;
            tela.textContent = `${z}:${y}:${x}:${h}`
          }
          if(x == 60){
            y = y+1;
            x= 0;
            tela.textContent = `${z}:${y}:${x}:${h}`
          }
          if(y == 60){
            z = z+1;
            y=0;
            tela.textContent = `${z}:${y}:${x}:${h}`
          }
        },1);
      }else if(btn.textContent == "Pause"){
      parar();
      }else if(btn.textContent == "Reset"){
        x=0;
        y=0;
        z=0;
        tela.textContent = `${z}:${y}:${x}`
      }
    })
  })
  

  function parar() {
    clearInterval(tempo);
    }