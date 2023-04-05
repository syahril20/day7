class Blog {
    constructor(image, quotes, author) {
      this.image = image
      this.quotes = quotes
      this.author = author
    }
    displayBlog() {
      return `
      <div class="card shadow" id="testi">
      <div class="testiContent">  
      <img src="${this.image}" alt="" class="testiImg">
      <p class="quotes">${this.quotes}</p>
      <p class="author">${this.author}</p>
      </div>
      `;
    }
  }

  const test1 = new Blog("./assets/testimonial/patrick.jpg", `"Berhentilah hidup di masa lalu, itu hanya akan menyakitimu"`, "- Patrick Star")
  const test2 = new Blog("./assets/testimonial/squidward.jpg", `"Orang banyak bicara ketika mereka ingin terlihat pintar"`, "- Squidward Tentacles")
  const test3 = new Blog("./assets/testimonial/mrCrab.jpg", `"Uang lebih manis daripada madu"`, "- Eugene Crab")

  let blogs = [test1, test2, test3];

  let contentDiv = document.getElementById("testBody");

  for (let i = 0; i < blogs.length; i++) {
    contentDiv.innerHTML += blogs[i].displayBlog();
  }