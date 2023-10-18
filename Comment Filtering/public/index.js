async function reviewComment(){
    let comment = document.querySelector("#comment");

    try {
        const response = await fetch(`http://localhost:5000/analyze?text=${comment.value}`)
        const res = await response.json();
        console.log(res);
        if(res >= 0){
            let currentdate = new Date(); 
            let datetime = "Posted at: " + currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + " @ "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();

            let container = document.querySelector("#commentsContainer");
            container.insertAdjacentHTML("beforeend", `<div class="commentMeta">${datetime}</div><div class="commentData">${comment.value}</div>`);
        }else{
            console.log("Inappropriate Comment")
        }
        comment.value = "";
    } catch (error) {
        console.log(error)
    }
}
