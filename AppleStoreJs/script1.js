let search = document.getElementById("search");
const bsOffcanvas = new bootstrap.Offcanvas("#offcanvasTop");
let offcanvas_body = document.getElementById("offcanvasBody");

document.getElementById('offcanvasTop').addEventListener("shown.bs.offcanvas", () => {
    offcanvas_body.querySelector("input[type=text]")?.focus();
});


let search_content = (event) => {
    let height = document.querySelector("header").clientHeight;

    bsOffcanvas._element.style.top = height + "px";
    offcanvas_body.firstElementChild?.remove();

    // if (!bsOffcanvas._isShown) {
    if (search.dataset.open === "false") {
        let template_search = document.getElementById(search.dataset.content);
        bsOffcanvas.show();
        document.querySelector(".offcanvas-backdrop").style.top = height + "px";
        search.dataset.open = "true";

        offcanvas_body.append(template_search.content.cloneNode(true));
        // console.dir(offcanvas_body.querySelector("input[type=text]"));

        closeSearchContent();
        return;
    }
    bsOffcanvas.hide();
    // console.log("enter1", search.dataset.open);
    search.dataset.open = "false";
    // console.log("enter2");
};
let closeSearchContent = () => {
    document.querySelector(".offcanvas-backdrop").onmouseover = () => {
        bsOffcanvas.hide();
    };
};

search.addEventListener("click", search_content);

// window.addEventListener('mouseover', () => {
//     if (!document.querySelector(".offcanvas:hover")) {
//         bsOffcanvas.hide();
//     }
// })

// let ary_content = document.getElementsByClassName("content");
// console.log(ary_content);
// [...ary_content].forEach((element) => {
//     element.addEventListener("mouseover", () => {
        
//         let height = document.querySelector("header").clientHeight;

//         bsOffcanvas._element.style.top = height + "px";
//         offcanvas_body.firstElementChild?.remove();
//         let template = document.getElementById(element.dataset.content);
//         offcanvas_body.append(template.content.cloneNode(true));
//         bsOffcanvas.show();
//         // element.dataset.open="true";
        
//         if (search.dataset.open === "true") {
//             search.dataset.open = "false";
//         }
//     });
// });

// const observer = new MutationObserver(mutator => {
//     let offcanvas_backdrop = mutator[0].addedNodes[0]
//     console.log(offcanvas_backdrop);   

//     if (offcanvas_backdrop && offcanvas_backdrop.className === "offcanvas-backdrop fade show") {
        // document.querySelector(".offcanvas-backdrop").addEventListener("mouseover", () => {
        //     offcanvas_body.firstElementChild?.remove();
        //     bsOffcanvas.hide();
        //     if (search.dataset.open === "true") {
        //       search.dataset.open = "false";
        //     }
           
        // });

//         closeSearchContent();
//     }
// });



// observer.observe(document.querySelector("body"), {
//     childList: true
// })