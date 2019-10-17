TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  onLeave: (origen, destinatario, direccion) => {
    const section = destinatario.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "100", opacity: 0 }, { y: "0", opacity: 1 });

    const biscocho = document.querySelector("#biscocho");
    const description = section.querySelector(".description");
    if (destinatario.index === 1) {
      biscocho.classList.add('figure-on');
      tl.fromTo(description, .7, { y: "50", opacity: 0 }, { y: "0", opacity: 1 }); 
    }
    else if(destinatario.index === 2) {
      tl.fromTo(description, .7, { y: "50", opacity: 0 }, { y: "0", opacity: 1 }); 
    }
    if(destinatario.index !== 1) {
      biscocho.classList.remove('figure-on');
    }
  }
});