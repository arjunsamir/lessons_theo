
function bem(block , element){
    return element ? `${block}__${element}`: block
}

console.log(bem("moshi","moshiiii"))

function bemify(block){

    return (elements)=>{

        return elements ? `${block}__${elements}`: block
    }

}

const ayoBemTime = bemify("whatsUp")

console.log(ayoBemTime("My-dude:D")) // output whatsUps__My-dude:D



//tldr closures as seen above when we make a facotry function and pass in a variable into the factory function 
//if that element is used by any of the created function it will remember the value of the variable passed into the factory