



let img1 = document.getElementById("one");
let time1 = document.getElementById("time1");
let temp1 = document.getElementById("temp1");
let img2 = document.getElementById("two");
let time2 = document.getElementById("time2");
let temp2 = document.getElementById("temp2");
let img3 = document.getElementById("thr");
// img3.src = "clouds.png";
let time3 = document.getElementById("time3");
let temp3 = document.getElementById("temp3");
let img4 = document.getElementById("four");
let time4 = document.getElementById("time4");
let temp4 = document.getElementById("temp4");
let city = document.getElementById("city");



//tomorrow
let tomo = document.getElementById("datetomarrow");
let temptomo = document.getElementById("temptomarrow");
let imgtomo = document.getElementById("imgtomarrow");

//day3
let day3date = document.getElementById("day3date");
let day3img = document.getElementById("day3img");
let day3temp = document.getElementById("day3temp");

//day4
let day4date = document.getElementById("day4date");
let day4img = document.getElementById("day4img");
let day4temp = document.getElementById("day4temp");

//day5
let day5date = document.getElementById("day5date");
let day5img = document.getElementById("day5img");
let day5temp = document.getElementById("day5temp");

//day6
let day6date = document.getElementById("day6date");
let day6img = document.getElementById("day6img");
let day6temp = document.getElementById("day6temp");

//day7

let day7date = document.getElementById("day7date");
let day7img = document.getElementById("day7img");
let day7temp = document.getElementById("day7temp");


//default data that will be shown here
async function def(){
    let req = document.getElementById("request").value;
    city.innerHTML = "Siyana";
let url = `https://api.openweathermap.org/data/2.5/forecast?q=siyana&units=metric&appid=93041336584c40a5ec22c60f714596d6`;
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    //setting temp for 0-3 hrs
    let curr_time = data.list[0].dt_txt.substr(11,12);
    let weathermain = data.list[0].weather[0].main;
    // console.log(weathermain);
    
    switch(weathermain){
        case "Clear":
            img1.src = "sun.png"
            break;
        case "Clouds" :
            img1.src = "clouds.png"
            break;
        case "Rain" :
            img1.src = "rainy.png"
            break;

    }
    // console.log(date)
    temp1.innerHTML = `${data.list[0].main.temp}&deg`;
    
    //settind temp for 3 - 6 hrs
    weathermain = data.list[1].weather[0].main;
    switch(weathermain){
        case "Clear":
            img2.src = "sun.png"
            break;
        case "Clouds" :
            img2.src = "clouds.png"
            break;
        case "Rain" :
            img2.src = "rainy.png"
            break;

    }
    curr_time = data.list[1].dt_txt.substr(11,2);
    let timenow = parseInt(curr_time);
    if(timenow > 12){
        time2.innerHTML = `${timenow - 12} PM`;
    }else{
        time2.innerHTML = `${timenow} AM`;
    }
    
    temp2.innerHTML = `${data.list[1].main.temp}&deg`;
    //settind temp for  6 - 9 hrs
    weathermain = data.list[2].weather[0].main;
    // console.log(weathermain)
    switch(weathermain){
        case "Clear":
            img3.src = "sun.png"
            break;
        case "Clouds" :
            img3.src = "clouds.png"
            break;
        case "Rain" :
            img3.src = "rainy.png"
            break;

    }

    temp3.innerHTML = `${data.list[2].main.temp}&deg`;
    curr_time = data.list[2].dt_txt.substr(11,2);
    timenow = parseInt(curr_time);
    if(timenow > 12){
        time3.innerHTML = `${timenow - 12} PM`;
    }else{
        time3.innerHTML = `${timenow} AM`;
    }
    //settind temp for   9 -- 12 hrs
    weathermain = data.list[3].weather[0].main;
    console.log(weathermain)
    switch(weathermain){
        case "Clear":
            img4.src = "sun.png"
            break;
        case "Clouds" :
            img4.src = "clouds.png"
            break;
        case "Rain" :
            img4.src = "rainy.png"
            break;

    }
    temp4.innerHTML = `${data.list[3].main.temp}&deg`;
    curr_time = data.list[3].dt_txt.substr(11,2);
    timenow = parseInt(curr_time);
    if(timenow > 12){
        time4.innerHTML = `${timenow - 12} PM`;
    }else{
        time4.innerHTML = `${timenow} AM`;
    }

    //Setting data for twomarrow
    weathermain = data.list[4].weather[0].main;
    switch(weathermain){
        case "Clear":
            imgtomo.src = "sun.png"
            break;
        case "Clouds" :
            imgtomo.src = "clouds.png"
            break;
        case "Rain" :
            imgtomo.src = "rainy.png"
            break;

    }

    temptomo.innerHTML = `${data.list[4].main.temp}&deg`;

    //day3
    weathermain = data.list[12].weather[0].main;
    switch(weathermain){
        case "Clear":
            day3img.src = "sun.png"
            break;
        case "Clouds" :
            day3img.src = "clouds.png"
            break;
        case "Rain" :
            day3img.src = "rainy.png"
            break;

    }

    day3temp.innerHTML = `${data.list[12].main.temp}&deg`;
    day3date.innerHTML = data.list[12].dt_txt.substr(0,10);
    
    //day4

    weathermain = data.list[20].weather[0].main;
    switch(weathermain){
        case "Clear":
            day4img.src = "sun.png"
            break;
        case "Clouds" :
            day4img.src = "clouds.png"
            break;
        case "Rain" :
            day4img.src = "rainy.png"
            break;

    }

    day4temp.innerHTML = `${data.list[20].main.temp}&deg`;
    day4date.innerHTML = data.list[20].dt_txt.substr(0,10);

    //day5

    weathermain = data.list[28].weather[0].main;
    switch(weathermain){
        case "Clear":
            day5img.src = "sun.png"
            break;
        case "Clouds" :
            day5img.src = "clouds.png"
            break;
        case "Rain" :
            day5img.src = "rainy.png"
            break;

    }

    day5temp.innerHTML = `${data.list[28].main.temp}&deg`;
    day5date.innerHTML = data.list[28].dt_txt.substr(0,10);

    //36 day6
    weathermain = data.list[36].weather[0].main;
    switch(weathermain){
        case "Clear":
            day6img.src = "sun.png"
            break;
        case "Clouds" :
            day6img.src = "clouds.png"
            break;
        case "Rain" :
            day6img.src = "rainy.png"
            break;

    }

    day6temp.innerHTML = `${data.list[36].main.temp}&deg`;
    day6date.innerHTML = data.list[36].dt_txt.substr(0,10);


}

def();

// let three = document.getElementById("three");
// let six = document.getElementById("six");
// let nine = document.getElementById("nine");
// let img = document.getElementById("img")
async function getapi(e) {
    let req = document.getElementById("request").value;
    city.innerHTML = req;
let url = `https://api.openweathermap.org/data/2.5/forecast?q=${req}&units=metric&appid=93041336584c40a5ec22c60f714596d6`;
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    //setting temp for 0-3 hrs
    let curr_time = data.list[0].dt_txt.substr(11,12);
    let weathermain = data.list[0].weather[0].main;
    // console.log(weathermain);
    
    switch(weathermain){
        case "Clear":
            img1.src = "sun.png"
            break;
        case "Clouds" :
            img1.src = "clouds.png"
            break;
        case "Rain" :
            img1.src = "rainy.png"
            break;

    }
    // console.log(date)
    temp1.innerHTML = `${data.list[0].main.temp}&deg`;
    
    //settind temp for 3 - 6 hrs
    weathermain = data.list[1].weather[0].main;
    switch(weathermain){
        case "Clear":
            img2.src = "sun.png"
            break;
        case "Clouds" :
            img2.src = "clouds.png"
            break;
        case "Rain" :
            img2.src = "rainy.png"
            break;

    }
    curr_time = data.list[1].dt_txt.substr(11,2);
    let timenow = parseInt(curr_time);
    if(timenow > 12){
        time2.innerHTML = `${timenow - 12} PM`;
    }else{
        time2.innerHTML = `${timenow} AM`;
    }
    
    temp2.innerHTML = `${data.list[1].main.temp}&deg`;
    //settind temp for  6 - 9 hrs
    weathermain = data.list[2].weather[0].main;
    // console.log(weathermain)
    switch(weathermain){
        case "Clear":
            img3.src = "sun.png"
            break;
        case "Clouds" :
            img3.src = "clouds.png"
            break;
        case "Rain" :
            img3.src = "rainy.png"
            break;

    }

    temp3.innerHTML = `${data.list[2].main.temp}&deg`;
    curr_time = data.list[2].dt_txt.substr(11,2);
    timenow = parseInt(curr_time);
    if(timenow > 12){
        time3.innerHTML = `${timenow - 12} PM`;
    }else{
        time3.innerHTML = `${timenow} AM`;
    }
    //settind temp for   9 -- 12 hrs
    weathermain = data.list[3].weather[0].main;
    console.log(weathermain)
    switch(weathermain){
        case "Clear":
            img4.src = "sun.png"
            break;
        case "Clouds" :
            img4.src = "clouds.png"
            break;
        case "Rain" :
            img4.src = "rainy.png"
            break;

    }
    temp4.innerHTML = `${data.list[3].main.temp}&deg`;
    curr_time = data.list[3].dt_txt.substr(11,2);
    timenow = parseInt(curr_time);
    if(timenow > 12){
        time4.innerHTML = `${timenow - 12} PM`;
    }else{
        time4.innerHTML = `${timenow} AM`;
    }

    
    //Setting data for twomarrow
    weathermain = data.list[4].weather[0].main;
    switch(weathermain){
        case "Clear":
            imgtomo.src = "sun.png"
            break;
        case "Clouds" :
            imgtomo.src = "clouds.png"
            break;
        case "Rain" :
            imgtomo.src = "rainy.png"
            break;

    }

    temptomo.innerHTML = `${data.list[4].main.temp}&deg`;

    //day3
    weathermain = data.list[12].weather[0].main;
    switch(weathermain){
        case "Clear":
            day3img.src = "sun.png"
            break;
        case "Clouds" :
            day3img.src = "clouds.png"
            break;
        case "Rain" :
            day3img.src = "rainy.png"
            break;

    }

    day3temp.innerHTML = `${data.list[12].main.temp}&deg`;
    day3date.innerHTML = data.list[12].dt_txt.substr(0,10);
    
    //day4

    weathermain = data.list[20].weather[0].main;
    switch(weathermain){
        case "Clear":
            day4img.src = "sun.png"
            break;
        case "Clouds" :
            day4img.src = "clouds.png"
            break;
        case "Rain" :
            day4img.src = "rainy.png"
            break;

    }

    day4temp.innerHTML = `${data.list[20].main.temp}&deg`;
    day4date.innerHTML = data.list[20].dt_txt.substr(0,10);

    //day5

    weathermain = data.list[28].weather[0].main;
    switch(weathermain){
        case "Clear":
            day5img.src = "sun.png"
            break;
        case "Clouds" :
            day5img.src = "clouds.png"
            break;
        case "Rain" :
            day5img.src = "rainy.png"
            break;

    }

    day5temp.innerHTML = `${data.list[28].main.temp}&deg`;
    day5date.innerHTML = data.list[28].dt_txt.substr(0,10);

    //36 day6
    weathermain = data.list[36].weather[0].main;
    switch(weathermain){
        case "Clear":
            day6img.src = "sun.png"
            break;
        case "Clouds" :
            day6img.src = "clouds.png"
            break;
        case "Rain" :
            day6img.src = "rainy.png"
            break;

    }

    day6temp.innerHTML = `${data.list[36].main.temp}&deg`;
    day6date.innerHTML = data.list[36].dt_txt.substr(0,10);
    // console.log(req);
    // e.preventDefault()
    // if (response) {
    //     hideloader();
    // }
    // show(data);
  

}

let btn = document.getElementById("btn");

btn.addEventListener("click",getapi)




// getapi(url);