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

    data.data.forEach(allData => {
        console.log(allData);
        const div = document.createElement('div');
        div.innerHTML = `
                <div class="card  bg-base-100 shadow-xl">
                <figure><img src=${allData.thumbnail} alt="Shoes" /></figure>
                <div class="card-body">
                    <div class="flex">
                        <img src= alt="">
                        <h5></h5>
                    </div>
                    <h2 class="card-title">
                        Shoes!
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
        `
        cardBody.appendChild(div);
    });
}

loadData();