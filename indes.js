
    const toggleButton= document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    toggleButton.addEventListener('click', ()=>{
        navLinks.classList.toggle('active');
    })

    var  tl  = gsap.timeline();


    tl.from('nav',{
        delay:1,
        opacity:0,
        y:21,
        duration:1,

    }).from('.header-right img',{
        opacity:0,
        y:20,
        duration:1,


    }).from('.header-left h1,p',{
        opacity:0,
        y:20,
        duration:1,
    })
   .from([".conpanis-section",'.logo'],{
    opacity:0,
    x:200,
   })
   .from([".features-area"],{
    opacity:0,
    y:20,
   })
   .from('.features-header h2',{
    opacity:1,
    x:30,
    stagger:1,
   })
   .from(['.feature-img','h3', 'h4'],{
    opacity:0,
    y:30,
    duration:1,
    
})
.to(".examples-heading-text",{
    x:30,
})
from(['examples-card','examples-area flex'],{
    opacity:0,
    x:22,
})
.from('.shutton',{
    opacity:4

})
.from(['.cta-section ',".link-column"],{
    opacity:0,
    x:31,
})
.from('.link-column',{
    x:31,
    opacity:0,
})

const accrodians = document.querySelectorAll(".accrodian");

accrodians.forEach(accrodian => {
  const icon = accrodian.querySelector(".icon");
  const answer = accrodian.querySelector(".answer");

  accrodian.addEventListener("click", () => {
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      icon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
