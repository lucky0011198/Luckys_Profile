fetch("https://api.github.com/users/lucky0011198", {
  headers: new Headers({
    "User-agent": "Mozilla/4.0 Custom User Agent",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("gitusername").innerHTML = data.name;
    document.getElementById("gituserlogin").innerHTML = data.login;
    document.getElementById("avatar_url").src = data.avatar_url;
    document.getElementById("followers").innerHTML = data.followers;
    document.getElementById("public_repos").innerHTML = data.public_repos;
    document.getElementById("following").innerHTML = data.following;
    //document.getElementById("followers").innerHTML = data.;
    document.getElementById("followersb").innerHTML = data.followers;
    document.getElementById("public_reposb").innerHTML = data.public_repos;
    document.getElementById(
      "url"
    ).innerHTML = `<a href="${data.html_url}" class="uk-button uk-button-text">Read more</a>`;
    //document.getElementById("followingb").innerHTML = data.following;
    //console.log(data);
  })
  .catch((error) => console.error(error));

$(document).ready(function () {
  $.get("https://api.github.com/users/lucky0011198/repos", function (data) {
    var content = "";
    for (i = 0; i < data.length; i++) {
      console.log(data[i].pushed_at);

      content += `  <div class="uk-card uk-card-primary uk-card-hover uk-card-body">
                          <h3 class="uk-card-title"> <img src="https://img.icons8.com/material-outlined/24/000000/repository.png"/>  ${data[i].name}</h3>
                          <p> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg> forks : ${data[i].forks} </span> <span>&nbsp; &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hdd-rack" viewBox="0 0 16 16">
                              <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                              <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-3-4v2H4V7h8z"/>
                            </svg> branch: ${data[i].default_branch} </span> <span>&nbsp; &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-binoculars" viewBox="0 0 16 16">
                              <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z"/>
                            </svg> watchers : ${data[i].watchers} </span></p>
                          <span class="uk-card-badge uk-label"><p>${data[i].language}</p></span>
                      </div><br> `;
    }

    //console.log(content);
    $(".repos").append(content);
    // $("td").cs;
  });
  var conte = "";
  $.get("https://api.github.com/users/lucky0011198/followers", function (data) {
    var v = 1;
    var conten = "";

    for (i = 0; i < data.length; i++) {
      conten += `<article class="uk-comment">
                          <header class="uk-comment-header">
                              <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                  <div class="uk-width-auto">
                                      <img class="uk-comment-avatar" src="${data[i].avatar_url}" width="80" height="80" alt="">
                                  </div>
                                  <div class="uk-width-expand">
                                      <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">${data[i].login}</a></h4>
                                      <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">

                                          <li><a href="${data[i].html_url}">Read more  <i class="bi bi-arrow-up-right-square"></i> </a></li>
                                      </ul>
                                  </div>
                              </div>
                              <p style="width:100%;height:2px;background-color:#c8c6c6">
                          </header>
                          <div class="uk-comment-body">
                              <b> </b>
                          </div>
                      </article>`;
    }

    $(".followers").append(conten);
  });

  var html = "";
  $.get(
    `https://api.github.com/users/lucky0011198/received_events`,
    function (data) {
      for (var i = 0; i < data.length; i++) {
        html += `  <div>
                      <div class="uk-card uk-card-primary uk-card-body">

                          <h3 class="uk-card-title"><img class="uk-comment-avatar" src="${data[i].actor.avatar_url}" width="50" height="50" alt=""> &nbsp;${data[i].actor.login}</h3>
                          <a class="" href="#">  <img src="https://img.icons8.com/material-outlined/24/000000/repository.png"/> Repositories</a>
                                  <div class=""><p>  ${data[i].repo.name}</p>
                                      <p> </p>
                                  </div>

<p>Type : ${data[i].type}</p>
                      </div>
                  </div>`;
      }

      $(".event").append(html);
    }
  );
  $(".hide").hide();
  $(".drower").click(function () {
    var div = $(".drower");
    $(".float-action-button").show();
    $(".hide").show(1000);
    $(".menu").hide();

    div.animate({ top: "75%", width: "300px" });
    div.animate({ top: "75%", height: "150px" });
  }),
    $(".float-action-button").click(function () {
      $(".float-action-button").hide();
      $(".hide").hide("slow");

      $(".menu").show();
      var div = $(".drower");
      div.animate({ top: "90%", height: "50px" }, "slow");
      div.animate({ top: "90%", width: "50px" }, "slow");
    });
});
function changecolor() {
  var color = document.getElementById("color").value;
  document.getElementById("head").style.backgroundColor = color;
}

//floating action button////////////
