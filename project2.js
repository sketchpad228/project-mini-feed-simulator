let currentPostId = 0;

/* So a post is an object? With different elements */

// createPost(username, content)
// likePost(postId)

let postFeed = []

function createPost(username, content)
{
    let newPost = {
        id: currentPostId,
        username: username,
        content: content,
        likes: 0,
        timestamp: Date.now()
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
    const sortedFeed = postFeed.toSorted((a, b) => b.timestamp - a.timestamp)

    // in some cases, 2 messages remain displayed in original order because they have the same timestamp,
    // this is an example of sort stability
    // but might I want it to default to sorting these two posts by ID if this happens?
    // if(a.timestamp == b.timestamp) {
        // sortedFeed.sort((a, b) => b.id - a.id)
    // }

    console.log("\n--- Posts in descending order of timestamp ---")
    console.log(sortedFeed);
    
}

function sortByLikes() { //Sort into order of likes
    const sortedFeed = postFeed.toSorted((a, b) => b.likes - a.likes)
    console.log("\n--- Posts in descending order of likes---")
    // for (let i = 0; i < postFeed.length; i++) {
    //    console.log(postFeed[i]);
    // }
    console.log(sortedFeed);
}

function getPostsByUser(usernameSearch)
{
    console.log(`\n--- Posts sent by ${usernameSearch} ---`);
    for (let i = 0; i < postFeed.length; i++) {            
            if(postFeed[i].username == usernameSearch)console.log(postFeed[i]);
    }
}

function searchPostsByUser(username)
{
    
}

// --- Methods called ---

createPost("Homer", "D'oh!");
likePost(0);
likePost(0);
createPost("Monty", "Excellent!");
likePost(0);
likePost(1);

createPost("Bart", "Ay Carumba!");

createPost("Lisa", "Splendid!");

createPost("Maggie", "(suck)(suck)(suck)");

createPost("Bart", "Do the Bartman!");

getFeed();
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
