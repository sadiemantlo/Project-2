document.addEventListener('DOMContentLoaded', () => {
async function sceneTitle1() {
  
if (window.location.pathname === '/story/1'){
  anime.set(".sceneTitle1", { opacity: 0 });

  anime({
    targets: ".sceneTitle1",
    opacity: 1,
    duration: 20000,
    delay: 500,
  });
}
}
sceneTitle1()
})

document.addEventListener('DOMContentLoaded', () => {
async function sceneTitle2() {
  
if (window.location.pathname === '/story/2'){
  anime.set(".sceneTitle2", { opacity: 0 });

  anime({
    targets: ".sceneTitle2",
    opacity: 1,
    duration: 20000,
    delay: 500,
  });
}
}
sceneTitle2()
})

document.addEventListener('DOMContentLoaded', () => {
async function sceneTitle3() {
  
if (window.location.pathname === '/story/3'){
  anime.set(".sceneTitle3", { opacity: 0 });

  anime({
    targets: ".sceneTitle3",
    opacity: 1,
    duration: 20000,
    delay: 500,
  });
}
}
sceneTitle3()
})

document.addEventListener('DOMContentLoaded', () => {
async function sceneTitle4() {
  
if (window.location.pathname === '/story/4'){
  anime.set(".sceneTitle4", { opacity: 0 });

  anime({
    targets: ".sceneTitle4",
    opacity: 1,
    duration: 20000,
    delay: 500,
  });
}
}
sceneTitle4()
})

document.addEventListener('DOMContentLoaded', () => {
async function sceneTitle5() {
  
if (window.location.pathname === '/story/5'){
  anime.set(".sceneTitle5", { opacity: 0 });

  anime({
    targets: ".sceneTitle5",
    opacity: 1,
    duration: 20000,
    delay: 500,
  });
}
}
sceneTitle5()
})

document.addEventListener('DOMContentLoaded', () => {
async function sceneTitle6() {
  
if (window.location.pathname === '/story/6'){
  anime.set(".sceneTitle6", { opacity: 0 });

  anime({
    targets: ".sceneTitle6",
    opacity: 1,
    duration: 20000,
    delay: 500,
  });
}
}
sceneTitle6()
})

document.addEventListener('DOMContentLoaded', () => {
async function sceneTitle7() {
  
if (window.location.pathname === '/story/7'){
  anime.set(".sceneTitle7", { opacity: 0 });

  anime({
    targets: ".sceneTitle7",
    opacity: 1,
    duration: 20000,
    delay: 500,
  });
}
}
sceneTitle7()
})

document.addEventListener('DOMContentLoaded', () => {
async function sceneTitle8() {
  
if (window.location.pathname === '/story/8'){
  anime.set(".sceneTitle8", { opacity: 0 });

  anime({
    targets: ".sceneTitle8",
    opacity: 1,
    duration: 20000,
    delay: 500,
  });
}
}
sceneTitle8()
})

document.addEventListener('DOMContentLoaded', () => {
  async function sceneTitle9() {
    
    if (window.location.pathname === '/story/9'){
      anime.set(".sceneTitle9", { opacity: 0 });

      anime({
        targets: ".sceneTitle9",
        opacity: 1,
        duration: 4000,
        translateX: 40,
        translateY: 250,
        scaleY: 1.8,
        complete: function () {
          anime({
            targets: ".sceneTitle9",
            color: {
              value: "#FF0000",
              duration: 3000,
              easing: "linear",
            },
          });
        }
      })
    }
  }
  sceneTitle9()
})


  document.addEventListener('DOMContentLoaded', () => {
    async function sceneTitle10() {
    
      if (window.location.pathname === '/story/10'){
        anime.set(".sceneTitle10", { opacity: 0 });
  
        anime({
          targets: ".sceneTitle10",
          opacity: 1,
          duration: 5000,
          scaleY: 1.8,
          complete: function () {
            anime({
              targets: ".sceneTitle10",
              color: {
                value: "#FF0000",
                duration: 3000,
                easing: "linear",
              },
            });
          }
        })
      }
    }
    sceneTitle10()
  })