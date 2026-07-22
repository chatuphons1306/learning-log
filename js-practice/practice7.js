async function greet() {
    console.log("เริ่ม");
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log("จบ");
}

async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const user = await response.json()
        console.log(user.name, user.email);
    } catch (error) {
        console.log("ดึงข้อมูลไม่สำเร็จ", error.message);
    }
}

// async function getPosts() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//         const posts = await response.json()
//         console.log(posts.length);
//         const postTitles = posts.filter(post => post.userId === 1 ).map(post => post.title);
//         console.log(postTitles);
//         // const mapPost = filterPost.map(post => post.title)
//         // console.log(mapPost);
        
        
        
//     } catch (error) {
//         console.log("ดึงข้อมูลไม่สำเร็จ", error.message);
//     }
// }

async function getPosts() {
    try {
        const response = await fetch("https://xyz-notreal-123.com/data")
        const posts = await response.json()
        console.log(posts.length);
        const postTitles = posts.filter(post => post.userId === 1 ).map(post => post.title);
        console.log(postTitles);
        // const mapPost = filterPost.map(post => post.title)
        // console.log(mapPost);
        
        
        
    } catch (error) {
        console.log("ดึงข้อมูลไม่สำเร็จ", error.message);
    }
}

// getPosts();

async function test() {
  console.log("1");
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  console.log("2");
}
console.log("A");
test();
console.log("B");