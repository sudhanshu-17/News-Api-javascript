let key = "58559ff39c7d40ce8affe0089c4c2b33";
let newshtml = '';


let accordion = document.getElementById("accordion");
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        articles.forEach(function (element, index) {


            // console.log(element[news]);
            // let news = `<div id="accordion">
            // <div class="card">
            //     <div class="card-header" id="heading${index}">
            //         <h5 class="mb-0">
            //             <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${index}"
            //                 aria-expanded="true" aria-controls="collapse${index}" style=" font-family: sans-serif;">
            //                 ${element["title"]}
            //             </button>
            //         </h5>
            //     </div>

            //     <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#accordion">
            //         <div class="card-body">
            //             ${element["content"]}. <a href = "${element['url']}" target="_blank"> read more... </a>
            //         </div>
            //     </div>
            // </div>

            // </div>`
            let news = `<div class="my-3 mx-4">
            <div class="card " style="width: 19rem; color: white; background: none"">
            <div class="card-body">
           
            <h5 class="card-title">${element["title"]}</h5>
            <img class="card-img-top" src="${element["urlToImage"]}" alt="unable to load">
            <p class="card-text">${element["content"]}. </p>
            <a href="${element['url']}" target="_blank" class="btn btn-primary">read more . . .</a>
            
            </div>
            </div>
          </div>`
            newshtml += news;
        });
        accordion.innerHTML = newshtml;
    }
    else {
        console.log("error");
    }
}
xhr.send();

let link = document.getElementById("link");
link.addEventListener('click', function () {
    let a = alert("not availabe at the moment");
})

// new method
document.getElementById("but1").addEventListener('click',function(){
    let cn = "in";
    console.log("wokig");
    show(cn);
});
document.getElementById("but2").addEventListener('click',function(){
    let cn = "au";
    console.log("wokig");
    show(cn);
});
document.getElementById("but3").addEventListener('click',function(){
    let cn = "us";
    console.log("wokig");
    show(cn);
});
document.getElementById("but4").addEventListener('click',function(){
    let cn = "ph";
    console.log("wokig");
    show(cn);
});
document.getElementById("but5").addEventListener('click',function(){
    let cn = "si";
    console.log("wokig");
    show(cn);
});
document.getElementById("but6").addEventListener('click',function(){
    let cn = "nz";
    console.log("wokig");
    show(cn);
});

function show(cn) {
    let key = "58559ff39c7d40ce8affe0089c4c2b33";
    let newshtml = '';
    let accordion = document.getElementById("accordion");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${cn}&apiKey=${key}`, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            articles.forEach(function (element, index) {
                let news = `<div class="my-3 mx-4">
                                    <div class="card " style="width: 19rem; color: white; background: none"">
                                    <div class="card-body"> 
                                    <h5 class="card-title">${element["title"]}</h5>
                                    <img class="card-img-top" src="${element["urlToImage"]}" alt="unable to load">
                                    <p class="card-text">${element["content"]}. </p>
                                    <a href="${element['url']}" target="_blank" class="btn btn-primary">read more . . .</a>  
                                    </div>
                                    </div>
                                  </div>`;
                newshtml += news;
            });
            accordion.innerHTML = newshtml;
        }
        else {
            console.log("error");
        }
    };
    xhr.send();
}