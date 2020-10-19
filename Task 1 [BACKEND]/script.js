// Defining async function
async function getData() {
  url = "http://jsonplaceholder.typicode.com/posts";

  // Storing response
  try {
    const response = await fetch(url);

    // Checking if Request was successful. 🤨
    if (response.status === 200) {
      // Storing data in form of JSON
      const data = await response.json();

      // Logging the data to console 🤷‍♂️
      // console.log(data);
      console.log("Successful");
      hideloader();
      showPosts(data);
    } else {
      console.log(response);
      console.log("Failed");
    }
  } catch {
    console.log("Failed: ");
  }
}

// Function to hide the loader
function hideloader() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("main").style.display = "block";
}

// Function to define innerHTML for HTML table
function showPosts(data) {
  let tab = ``;
  // Loop to access all rows
  for (let r of data) {
    tab += `<tr>  
    <td scope="row">${r.id} </td>
    <td>${r.userId}</td>
    <td>${r.title}</td>
    <td>${r.body}</td>
</tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("posts-body").innerHTML = tab;
}

// Calling the async function
getData();
