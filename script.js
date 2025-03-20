// array, object, array of object(json), for-each
// adding stroy through js

let arr = [  //adding objects in array..including story and dp......and this way also help to know how to send data from backend to frontend
{dp:"https://images.unsplash.com/photo-1726064855857-46c37dc43c78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1741850826368-12d515927617?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"},

{dp:"https://images.unsplash.com/photo-1741851374718-0d26633acbf3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1670444332402-4cb1347f5a55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"},

{dp:"https://plus.unsplash.com/premium_photo-1677178660405-38e552adf46c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1740415924695-df06f4e1ab50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D"},

{dp:"https://images.unsplash.com/photo-1731328667980-9ea08c5edc07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D", story: "https://images.unsplash.com/photo-1724963843259-3b0727c53b0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D"},
];

let clutter = "";

arr.forEach(function (elem,idx){ //back tick is called template literals
clutter += `<div class="story">
                <img src="${elem.dp}" alt="img">
            </div>` 
});
// console.log(clutter);
document.querySelector("#stories").innerHTML =clutter

// arr.forEach(function (elem,idx){ //forEach loop only apply on array
//     // console.log("hello"); //hello print 4 time bcz size of array is 4
//     // console.log(elem);//element print which is in array..one by one
//     console.log(elem,idx);
// })