const accessKey = "BKLg6H2-_cb9KCf6qaRzBleKnX2Wl8orhMYacd3GzTE";

const  searchForm = document.getElementById("search-form");
const  searchBox = document.getElementById("search-box");
const  searchResult = document.getElementById("search-result");
const  showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1 ;

async function searchImages() {
    keyword = searchBox.value;
    // keyword will store value that we enter in input fill.
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    // for getting response in our browser
    const response = await fetch(url);
    const data = await response.json();

    if(page === 1) {
      searchResult.innerHTML = "";
    }

    // console.log(data);

    // for showing all image to our webpage
    const results = data.results;

    results.map((result) =>{
        // this will creat a new img tag
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html
        imageLink.target = "_blank";
        // we need to put image tag into a  a tag(imageLink)
        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);
        // this means image will dispaly on the search result
        
    })

    showMoreBtn.style.display = "block";

}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // It will prevent the default features when we submit the form

    page = 1;
    // Everytime when we enter new keyword that page will be 1

    searchImages();


})

showMoreBtn.addEventListener("click", () => {
  page++ ;
//   it will increase page value by 1
searchImages();
// calling searchImage


})