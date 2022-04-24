alert("welcome to the website")
prompt("do you like dogs?")

let dog_name = prompt("what is your dog's name");

let dog_age = prompt("what's your dog's age")

if((dog_age>0) && (dog_age<9))
{
    alert(dog_name + " is a cute puppy!!");
}
else
{
    if((dog_age>10) && (dog_age<15))
{
    alert(dog_name + " is a fit and strong dog");
}
else
{
    if((dog_age>=15) && (dog_age<18))
    {
        alert(dog_name + " is an aged dog");
    }
    else
    {
        alert("thats not possible!! the lifespan of a dog is between 12-20")
        alert("I guess " + dog_name + " is an alien ^O^")
    }
}
}