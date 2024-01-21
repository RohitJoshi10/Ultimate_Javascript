const URL = "https://api.github.com/users/";
const main = document.querySelector("#main");
const searchBox = document.querySelector("#search")



const getUser = async(username) => {
    const response = await fetch(URL + username);
    console.log(response);
    const data = await response.json();
    console.log(data);

    const card = `<div class="card">
        <div>
          <img
            class="avatar"
            src="${data.avatar_url}"
            alt="github"
          />
        </div>
        <div class="user-info">
          <h2>${data.name}</h2>
          <p>${data.bio === null ? "User have no bio" : data.bio}</p>

          <ul class="info">
            <li>${data.followers} <strong>Followers</strong></li>
            <li>${data.following} <strong>Following</strong></li>
            <li>${data.public_repos} <strong>Repos</strong></li>
          </ul>

          <div class="repos">
           
          </div>
        </div>
      </div>`

      main.innerHTML = card;
      getRepos(username);
}



const getRepos = async (username) =>{
      const repos = document.querySelector(".repos");
      const response = await fetch(URL + username + "/repos");
      const data = await response.json();
      console.log(data);
      data.forEach(
        (item) =>{
            console.log(item);
            const elem = document.createElement("a");
            elem.classList.add("repo");
            elem.href = item.html_url;
            elem.innerText = item.name;
            elem.target = "_blank";
            repos.appendChild(elem);
        }
   )
}


const formSubmit = () =>{
    const username = searchBox.value.trim(); // Get the username from the input field.
    if(username != ""){
        getUser(username);
        searchBox.value = "";
    }
    return false;
}

searchBox.addEventListener("blur",()=>formSubmit())