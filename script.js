const usernameInp = document.querySelector("#username");
const findBtn = document.querySelector("#findBtn");

const profileImage = document.querySelector("#profileImage");
const name = document.querySelector("#name");
const bio = document.querySelector("#bio");
const followers = document.querySelector("#followers");
const projects = document.querySelector("#projects");

findBtn.addEventListener("click", function () {
  const username = usernameInp.value;
  console.log(username);

  async function gitget() {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let proj = await fetch(`https://api.github.com/users/${username}/repos`);
    console.log(proj);

    
if (!response.ok || !proj.ok) {
    console.log("API request failed");
    return;
}




    const data = await response.json();
    const reposdata = await proj.json();
    // console.log(data)

    profileImage.src = data.avatar_url;
    name.textContent = data.name;
    bio.textContent = data.bio;
    followers.textContent = data.followers;

    console.log(reposdata);
    reposdata.forEach((e) => {
      console.log(e.name);
      console.log(e.description);
      console.log(e.html_url);

      const projname = document.createElement("a");
      const projdec = document.createElement("p");
      const projurl = document.createElement("a");

      projname.textContent = e.name;
      projname.href = e.html_url;
      projects.appendChild(projname);

      projdec.textContent = e.description;
      projects.appendChild(projdec);

    //   projurl.href = e.html_url;
    //   projects.appendChild(projurl);
    });
  }
  gitget();
});
