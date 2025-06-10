    //if string is pangram

    let str = "thequickbrownfoxjumpsoverthelazydog";

    let set = new Set(str.toLowerCase());
    console.log(set.size);

    if(set.size == 26){
        console.log("pangram");
    }else{
        console.log("not pangram");
    }