async function reviewComment(){
    let comment = document.querySelector("#comment");

    try {
        const response = await fetch(`http://localhost:3000/verify?text=${comment.value}`)
        const res = response.json();
        
        if(res.score !== -1){
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