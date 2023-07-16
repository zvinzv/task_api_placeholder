async function getAPI(){
  const data = await axios.get("https://jsonplaceholder.typicode.com/todos/")
  console.log(data.data);
  data.data.forEach(element => {
    document.querySelector(".data").innerHTML += `<div>
      <h1>${element.title}</h1>
    </div>`
  });
}
getAPI()