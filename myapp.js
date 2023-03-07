let  mark= parseInt(prompt("enter your marks"));
if (mark < 100 && mark > 0){
    if(mark > 70){
        alert("your grade is "+"A")
    }
    else if(mark > 60){
        alert("your grade is "+" B")
    }
    else if(mark >= 50){
        alert("your grade is "+"C")
    }
    else if(mark < 50){
        alert("you're failed ")
    }
}
else {
    alert("please eenter a valid Marks")
}