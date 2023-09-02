const loadData = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await res.json();
    displayData(data.data);
}
// const sorted = data.data.others.views;

const displayData = (shows) => {
    shows.forEach(show => {
        console.log(show);

        const cardContainer = document.getElementById('card-container');

        const div = document.createElement("div");
        div.innerHTML = `
        <a onclick="handleClickData('${show.category_id}')" class="tab font-bold bg-slate-400 hover:bg-[#FF1F3D] rounded-lg  text-white font-lg">${show?.category}</a> 
        `
        cardContainer.appendChild(div);
    });

}


const handleClickData = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json();
    console.log(data.data);

    

    const cardBody = document.getElementById('card-body');
    const cardBody2 = document.getElementById('card-body-2');
    cardBody.innerHTML = "";
    cardBody2.innerHTML = ""
    data.data.forEach(allData => {

        // let viewData = parseFloat(allData.others.views);
        // console.log(viewData);

        const div = document.createElement('div');
        div.innerHTML = `
                <div class="card  bg-base-100 shadow-xl">
                <figure><img class ="w-80 h-52" src=${allData?.thumbnail} alt="Shoes" /></figure>

                <div class="card-body">
                    <div class="flex gap-1">
                        <div>
                        <img class ="h-10 w-10 rounded-full" src=${allData?.authors[0]?.profile_picture} alt="">

                        <p class="absolute sm: -mt-32 sm: ml-24 md:-mt-32 md:ml-32 lg:-mt-28 lg:ml-28 text-white bg-slate-900 px-2 py-1 rounded-lg">${allData?.others?.posted_date? parseInt(allData?.others?.posted_date / 3600 )+  " hours" ||  allData?.others?.posted_date: ' '}  ${ allData?.others?.posted_date? parseInt(allData?.others?.posted_date % 3600 / 60)+ " min ago" ||  allData?.others?.posted_date: ' '}</p>

                        </div>
                        <h5 class ="text-xl font-bold ">${allData?.title}</h5>
                    </div>
                    <div class=" flex">
                    <p  class="text-slate-500 w-fit">${allData?.authors[0]?.profile_name}</p>
                    <img class="h-5 w-5 rounded-full" src="${allData?.authors[0]?.verified ? 'blue.svg' || allData?.authors[0]?.verified : ' '}">
                    </div>
                    <p>${allData.others.views} Views</p>
                </div>
            </div>
        `
        cardBody.appendChild(div);
    });

    const div2 = document.createElement("div");
    if (data.data.length == 0) {


        document.getElementById('card-body').removeAttribute = ("lg:grid-cols-4");
        div2.innerHTML = `
        <div class="flex justify-center mt-10">
        <img class="h-56 w-56 mt-10 rounded-full" src="icon.png" alt="">
       
        </div>
    <h1 class="text-center text-3xl font-extrabold ">Oops!! Sorry, There is no <br> content here</h1>

    `
        cardBody2.appendChild(div2)
    }
}



function clickMe() {
    window.open("blog.html", "_self");
}

function clickBack() {
    window.open("index.html", "_self");
}



loadData();
handleClickData(1000);

