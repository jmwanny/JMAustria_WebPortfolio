
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



