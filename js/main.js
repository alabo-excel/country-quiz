var spin = document.getElementById("spinner");
var score = 0;

spin.style.display = "block";
fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => {
        return response.json();
    })

.then((data) => {
    // console.log(data)
    var num = Math.floor(Math.random() * 240 + 1);
    console.log(data[num].capital);
    document.getElementById("container").innerHTML += `

    <div id="content" class="col-lg-4 col-sm-12 m-4 bg-white p-3">
        <div class="mb-5 mt-5">
            <h5>${data[num].capital} is the capital of which country</h5>
        </div>

        <div class="card p-2 mb-4"  id="wrong">
            <p>${data[100].name}</p>
        </div>
        <div class="card correct p-2 mb-4"  id="green">
            <p>${data[num].name}</p>
        </div>
        
        <div class="card p-2 mb-4"  id="almost">
            <p>${data[num+1].name}</p>
        </div>

        <div class="p-2 mb-4"  id="btn1">
            <p>Next</p>
        </div>
    </div>
    
    `;
    spin.style.display = "none";

    var correct = document.getElementById("green");

    correct.addEventListener("click", () => {
        correct.style.backgroundColor = "green";
        correct.style.border = "none";
        correct.style.color = "white";
        score = 1;
    });

    var wrong = document.getElementById("wrong");

    wrong.addEventListener("click", () => {
        wrong.style.backgroundColor = "red";
        wrong.style.border = "none";
        wrong.style.color = "white";
    });
    var almost = document.getElementById("almost");

    almost.addEventListener("click", () => {
        almost.style.backgroundColor = "orange";
        almost.style.border = "none";
        almost.style.color = "white";
    });
    var next1 = document.getElementById("btn1");
    next1.addEventListener("click", () => {
        document.getElementById("container").innerHTML = ""
        spin.style.display = "block";
        fetch("https://restcountries.eu/rest/v2/all")
            .then((response) => {
                return response.json();
            })

        .then((data) => {
            // console.log(data)
            var num = Math.floor(Math.random() * 240 + 1);
            console.log(data[num].capital);
            document.getElementById("container").innerHTML += `

    <div id="content" class="col-lg-4 col-sm-12 m-4 bg-white p-3">
        <div class="mb-5 mt-5">
            <h5>What is the capital city of ${data[num].name}</h5>
        </div>

        <div class="card p-2 mb-4"  id="almost">
            <p>${data[num+1].capital}</p>
        </div>
        <div class="card p-2 mb-4"  id="wrong">
            <p>${data[100].capital}</p>
        </div>
        <div class="card correct p-2 mb-4"  id="green">
            <p>${data[num].capital}</p>
        </div>
        

        <div class="p-2 mb-4"  id="btn2">
            <p>Next</p>
        </div>
    </div>
    
    `;
            spin.style.display = "none";

            var correct = document.getElementById("green");

            correct.addEventListener("click", () => {
                correct.style.backgroundColor = "green";
                correct.style.border = "none";
                correct.style.color = "white";
                score = score + 1;

            });

            var wrong = document.getElementById("wrong");

            wrong.addEventListener("click", () => {
                wrong.style.backgroundColor = "red";
                wrong.style.border = "none";
                wrong.style.color = "white";
            });
            var almost = document.getElementById("almost");

            almost.addEventListener("click", () => {
                almost.style.backgroundColor = "orange";
                almost.style.border = "none";
                almost.style.color = "white";
            });

            var next2 = document.getElementById("btn2");
            next2.addEventListener("click", () => {
                document.getElementById("container").innerHTML = "";
                spin.style.display = "block";

                fetch("https://restcountries.eu/rest/v2/all")
                    .then((response) => {
                        return response.json();
                    })

                .then((data) => {
                    console.log(data);
                    var num = Math.floor(Math.random() * 240 + 1);
                    console.log(data[num].capital);
                    document.getElementById("container").innerHTML += `
            
                <div id="content" class="col-lg-4 col-sm-12 m-4 bg-white p-3">
                    <div class="mb-5 mt-5">
                    <img src="${data[num].flag} ">
                    <h5>is the national flag of what country</h5>
                    </div>
            
                    <div class="card correct p-2 mb-4"  id="green">
                        <p>${data[num].name}</p>
                    </div>
                    <div class="card p-2 mb-4"  id="wrong">
                        <p>${data[100].name}</p>
                    </div>
                    
                    <div class="card p-2 mb-4"  id="almost">
                        <p>${data[num + 1].name}</p>
                    </div>
            
                    <div class="p-2 mb-4"  id="btn3">
                        <p>Next</p>
                    </div>
                </div>
                
                `;
                    spin.style.display = "none";

                    var correct = document.getElementById("green");

                    correct.addEventListener("click", () => {
                        correct.style.backgroundColor = "green";
                        correct.style.border = "none";
                        correct.style.color = "white";
                        score = score + 1;

                    });

                    var wrong = document.getElementById("wrong");

                    wrong.addEventListener("click", () => {
                        wrong.style.backgroundColor = "red";
                        wrong.style.border = "none";
                        wrong.style.color = "white";
                    });
                    var almost = document.getElementById("almost");

                    almost.addEventListener("click", () => {
                        almost.style.backgroundColor = "orange";
                        almost.style.border = "none";
                        almost.style.color = "white";
                    });
                    var next3 = document.getElementById("btn3");
                    next3.addEventListener("click", () => {
                        document.getElementById("container").innerHTML = "";
                        spin.style.display = "block";



                        document.getElementById("container").innerHTML += `
            
                        <div id="content" class="col-lg-4 col-sm-12 m-4 bg-white p-3">
                           <div class="p-4 text-center">
                           <h3>
                           Your score is
                           </h3>
                           <h1>
                            ${score}
                           </h1>
                           </div>
                    
                            <div class="p-2 mb-4" id="btn4">
                                <p>Retake test</p>
                            </div>
                        </div>
                        `

                        var next4 = document.getElementById("btn4");

                        next4.addEventListener("click", () => {
                            window.location.reload()
                        });

                        spin.style.display = "none";
                    });
                });
            });
        });
    });
});