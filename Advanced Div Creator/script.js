

var btn = document.querySelector("button");
var back = ["eye1.jpg", "eye2.jpg", "eye3.jpg", "eye4.jpg","eye5.jpg","eye6.jpg"];
var margin = 1;

btn.addEventListener("click", function () {
    var arr = [];

    for (var i = 1; i <= num.value; i++) {
        var div = document.createElement("div");
        //   var i   = document.createElement('i');
        //   i.classList.add("fa","fa-times","pull-right");
        //   div.appendChild(i);
        div.classList.add("shape");
        div.style.width = (100 - row.value) / row.value + "%";
        div.style.marginRight = margin + "%";
        div.style.backgroundImage = "url( image/" + back[Math.round(Math.random() * 5)] + ")"
        //    if(i % row.value != 0){
        //        div.style.marginRight = margin+"%";
        //    }
        container.appendChild(div);
        arr.push(div)
    }

    num.value = "";
    row.value = "";

    for (var i = 0; i < arr.length; i++) {
        arr[i].addEventListener("click", function () {
            this.classList.add("remove");
            setTimeout(() => {
                this.remove();
            }, 1000);

        })
    }


})
























