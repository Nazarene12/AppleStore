let leftControl = document.getElementsByClassName("left_control");
let count = 0;
[...leftControl].forEach(ele => {
    
    ele.addEventListener("click", () => {
        let rider = ele.parentElement.previousElementSibling;

        let child = rider.querySelector("div:nth-child(2)");

        child.style.marginLeft =
          -Math.abs(
           ( parseInt(rider.dataset.ride) * rider.lastElementChild.clientWidth) +
              ((20 * parseInt(rider.dataset.ride))-10)
          ) + "px";
        console.dir(child.style.marginLeft);
        rider.dataset.ride = parseInt(rider.dataset.ride)+1;

        // rider.style.left = ( - parseInt(window.getComputedStyle(rider, null).getPropertyValue("left")) - rider.lastElementChild.clientWidth) +"px";

        

    })
})