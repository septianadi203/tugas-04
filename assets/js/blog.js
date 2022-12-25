

let blogs = []

function getData(event) {
    event.preventDefault()

    let title = document.getElementById("name").value
    let description = document.getElementById("message").value
    let image = document.getElementById("input-upload").files

    image = URL.createObjectURL(image[0])


    let addBlog = {
        title,
        description,
        image,
        postedAt: new Date(),

    }

    blogs.push(addBlog)

    console.log(blogs)
    showData()
}
//---------Copy dari bawah ----------------//
function showData() {
    document.getElementById("card-box").innerHTML = ""

    for(let i= 0; i <= blogs.length; i++){
        document.getElementById("card-box").innerHTML += `
        <div class="card" id="card">
                <div class="blog-image">
                    <img src="${blogs[i].image}" alt="" >
                </div>
                <div class="title">
                    <h2>
                     <a>
                      ${blogs[i].title}
                     </a>
                    </h2>
                </div>
                <div class="durasi">
                    <p>durasi 3 bulan</p>
                </div>
                <div class="deskripsi">
                    <p>${blogs[i].description}</p>
                </div>
                <div class="technologies">
                    <p></p>
                </div>
                <div class="btn-group">
                    <button class="btn">edit</button>
                    <button class="btn">delete</button>
                </div>
            </div>
        `
    }
}