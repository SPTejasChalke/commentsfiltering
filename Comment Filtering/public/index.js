function reviewComment(){
    let comment = document.querySelector("#comment");
    console.log(comment.value);
    var currentdate = new Date(); 
    var datetime = "Posted at: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    let container = document.querySelector("#commentsContainer");
    container.insertAdjacentHTML("beforeend", `<div class="commentMeta">${datetime}</div><div class="commentData">${comment.value}</div>`);
    comment.value = "";
}