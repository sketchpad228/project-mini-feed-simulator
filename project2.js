let currentPostId = 0;

/* So a post is an object? With different elements */

// createPost(username, content)
// likePost(postId)

let postFeed = []
let delayNumber = -1

function createPost(username, content)
{
    // let stamp = new Date().toISOString()

    let newPost = {
        
        id: currentPostId,
        username: username,
        content: content,
        likes: 0,
        timestamp: Date.now()
        // timestamp: stamp
    }

    console.log(`This is creating post number ${newPost.id}`)
    postFeed.push(newPost)
    console.log("Just added:", postFeed[currentPostId]);
    currentPostId++;
}

function likePost(postId) {
    postFeed[postId].likes++;
    console.log(`You liked ${postFeed[postId].username}'s post.`)
}

function getFeed() {
    console.log("\n--- Full Post Feed Output ---")
    for (let i = 0; i < postFeed.length; i++) {
       console.log(postFeed[i]);
    }
}

function sortByNewest() { //Sort into order of timestamp
    // in some cases, 2 messages remain displayed in original order because they have the same timestamp,
    // this is an example of sort stability
    // but might I want it to default to sorting these two posts by ID if this happens?
    let sortedFeed = postFeed.toSorted((a, b) => (b.timestamp - a.timestamp) || (b.id - a.id))
    //I've added the OR operator (||) so it defaults to sorting by ID when this happens.
    //I've done the same for the sortByLikes method too.
    
 
    console.log("\n--- Posts in descending order of timestamp ---")
    console.log(sortedFeed);
}

function delay()
{

}

function sortByLikes() { //Sort into order of likes
    const sortedFeed = postFeed.toSorted((a, b) => (b.likes - a.likes) || (b.id - a.id))
    console.log("\n--- Posts in descending order of likes---")
    // for (let i = 0; i < postFeed.length; i++) {
    //    console.log(postFeed[i]);
    // }
    console.log(sortedFeed);
}

function getPostsByUser(username)
{
    console.log(`\n--- Posts sent by ${username} ---`);
    for (let i = 0; i < postFeed.length; i++) {            
        if(postFeed[i].username == username)console.log(postFeed[i]);
    }
}

function delay()
{
    console.log("Calling new post function...")
}

// --- Methods called ---

createPost("Homer", "D'oh!");
// getFeed(delayNumber);
likePost(0);
likePost(0);

createPost("Monty", "Excellent!");
// getFeed(delayNumber);
likePost(0);
likePost(1);

createPost("Bart", "Ay Carumba!");
// getFeed(delayNumber);
createPost("Lisa", "Splendid!");
// getFeed(delayNumber);
createPost("Maggie", "(suck)(suck)(suck)");
// getFeed(delayNumber);
createPost("Bart", "Do the Bartman!");
// getFeed(delayNumber);
createPost("Homér", "Le d'oh!");
// getFeed(delayNumber);
likePost(0);
likePost(1);
likePost(1);
likePost(1);
likePost(1);
likePost(1);
likePost(1);
likePost(1);
getFeed();
sortByNewest();
sortByLikes();
getFeed();
getPostsByUser("Homer")
getPostsByUser("Monty")
getPostsByUser("Bart")
getPostsByUser("Homér")
