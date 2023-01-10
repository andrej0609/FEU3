document.getElementById("intro").style.display = "none";
      document.getElementById("work").style.display = "none";
      document.getElementById("about").style.display = "none";
      document.getElementById("contact").style.display = "none";

      document.querySelector("button").addEventListener("click", function() {
        document.getElementById("intro").style.display = "block";
        document.getElementById("work").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("header").style.display = "none";
      });


      document.querySelectorAll("button")[1].addEventListener("click", function() {
        document.getElementById("intro").style.display = "none";
        document.getElementById("work").style.display = "block";
        document.getElementById("about").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("header").style.display = "none";
      });


      document.querySelectorAll("button")[2].addEventListener("click", function() {
        document.getElementById("intro").style.display = "none";
        document.getElementById("work").style.display = "none";
        document.getElementById("about").style.display = "block";
        document.getElementById("contact").style.display = "none";
        document.getElementById("header").style.display = "none";
      });


      document.querySelectorAll("button")[3].addEventListener("click", function() {
        document.getElementById("intro").style.display = "none";
        document.getElementById("work").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("contact").style.display = "block";
        document.getElementById("header").style.display = "none";
      });


      var close = document.createElement("button");
      close.innerHTML = "";
      document.getElementById("intro").appendChild(close);

      document.querySelectorAll("button")[4].addEventListener("click", function() {
        document.getElementById("intro").style.display = "none";
        document.getElementById("header").style.display = "block";
      });


      var close = document.createElement("button");
      close.innerHTML = "";
      document.getElementById("work").appendChild(close);
      
 
      document.querySelectorAll("button")[5].addEventListener("click", function() {
        document.getElementById("work").style.display = "none";
        document.getElementById("header").style.display = "block";
      });


      var close = document.createElement("button");
      close.innerHTML = "";
      document.getElementById("about").appendChild(close);

      document.querySelectorAll("button")[6].addEventListener("click", function() {
        document.getElementById("about").style.display = "none";
        document.getElementById("header").style.display = "block";
      });

      var close = document.createElement("button");
      close.innerHTML = "";
      document.getElementById("contact").appendChild(close);


      document.querySelectorAll("button")[7].addEventListener("click", function() {
        document.getElementById("contact").style.display = "none";
        document.getElementById("header").style.display = "block";
      });
      