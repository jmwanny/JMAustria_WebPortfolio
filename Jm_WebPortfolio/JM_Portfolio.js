
   window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const content = document.querySelector("main");
        setTimeout(() => {
        window.scrollTo(0, 0); 
    }, 10); 

    
    setTimeout(() => {
        loader.classList.add("hidden");

        
        setTimeout(() => {
            loader.style.display = 'none'; 
            content.classList.add("visible");

            
          AOS.init({
                once: false,       
                duration: 1000     
            });

            AOS.refresh(); 
       }, 1000); 
   }, 3000);
});

const toggleButton = document.getElementById("toggle-button");
const indicator = document.querySelector(".indicator");
const featherIcon = document.querySelector(".feather");
const featherSunIcon = document.querySelector(".feather-sun");

toggleButton.onclick = () => {
    toggleButton.classList.toggle("active");
    indicator.classList.toggle("active");
    featherIcon.classList.toggle("active");
    featherSunIcon.classList.toggle("active");
        const notif = document.getElementById("notif");

    if (toggleButton.classList.contains("active")) {
        notif.classList.remove("hidden");
        
        setTimeout(() => {
            notif.classList.add("hidden");
        }, 3000);
    }
   
}


