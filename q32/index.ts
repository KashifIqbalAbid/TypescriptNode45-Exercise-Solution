//ckecking username
{
    let current_users=["admin", "nadeem", "ali", "kashif", "iqbal", "sarmad"];
    let new_users=["arshad", "aslam", "kashif", "iqbal", "hasnain", "wajahat"];
    var match=false;
    for(let i=0; i<new_users.length; i++){
        match=false;
        for(let j=0; j<new_users.length; j++){
            if(new_users[i]==current_users[j]){
            console.log(`User name ${new_users[i]} already taken, please choose some other`)
            match=true;
        }
    }
        if(match) {continue};
        console.log(`the user ${new_users[i]} is available`);
    }
}