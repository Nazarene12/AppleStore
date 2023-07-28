$(".owl-repeat1").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 3,
    },

    960: {
      items: 9,
    },
  },
});

$(".owl-repeat2").owlCarousel({
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  merge: true,
  responsive: {
    0: {
      items: 4,
    },

    960: {
      items: 9,
    },
  },
});

$(".owl-repeat3").owlCarousel({
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  merge: true,
  responsive: {
    0: {
      items: 3,
    },

    960: {
      items: 8,
    },
  },
});


$(".owl-repeat4").owlCarousel({
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  merge: true,
  responsive: {
    0: {
      items: 4,
    },

    960: {
      items: 8,
    },
  },
});



window.addEventListener("resize", () => {

  var accord = document.querySelectorAll(".accord");
  var accord_col = document.querySelectorAll(".accordion-collapse");
    
    if (window.innerWidth < 960) {
        
      document.querySelectorAll(".owl-stage > div:first-child").forEach((ele) => {
          ele.style.display = "none"
      });
      
      accord.forEach(ele => {
        ele.dataset.bsToggle = "collapse";
      })

      accord_col.forEach((ele) => {
        ele.classList.replace("show","collapse");
      });
        
    }
    else {
       document
         .querySelectorAll(".owl-stage > div:first-child")
         .forEach((ele) => {
           ele.style.display = "block";
         });
      
      accord.forEach((ele) => {
        ele.dataset.bsToggle = "show";
      });

      accord_col.forEach((ele) => {
        ele.classList.replace("collapse","show");
      });
      
      // console.log(document.querySelectorAll(".owl-stage > div:first-child"));
    }
})

