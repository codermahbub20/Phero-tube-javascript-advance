const loadData = async () => {1000
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await res.json();
    displayData(data.data);
}

const displayData =  (shows) => {
    shows.forEach(show => {
        console.log(show);

        const cardContainer = document.getElementById('card-container');

        const div = document.createElement("div");
        div.innerHTML = `
        <a onclick="handleClickData('${show.category_id}')" class="tab">${show.category}</a> 
        `
        cardContainer.appendChild(div);
    });

}

const handleClickData = async(categoryId) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json();
    console.log(data.data);

    const cardBody = document.getElementById('card-body');
    cardBody.innerHTML = "";
    data.data.forEach(allData => {
        console.log(allData);
        const div = document.createElement('div');
        div.innerHTML = `
                <div class="card  bg-base-100 shadow-xl">
                <figure><img class ="w-80 h-52" src=${allData.thumbnail} alt="Shoes" /></figure>
                <div class="card-body">
                    <div class="flex gap-1">
                        <img class ="h-10 w-10 rounded-full" src=${allData.authors[0].profile_picture} alt="">
                        <h5 class ="text-xl font-bold ">${allData.title}</h5>
                    </div>
                    <h2 class="card-title">
                    <p>${allData.authors[0].profile_name}</p>
                    <img class="h-5 w-5 rounded-full" src="${allData?.authors[0]?.verified &&'blue.svg'}" alt="">

                    </h2>
                    <p>${allData.others.views}  Views</p>
                </div>
            </div>
        `
        cardBody.appendChild(div);
    });
}

loadData();
handleClickData(1000);