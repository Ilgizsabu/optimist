debugger
let userResponse = confirm('В стакане 50% воды. Стакан на 1/2 пуст или на 1/2 полон?');
let percentage = 50;
const step = 2;
let newResponse = userResponse

while (newResponse === userResponse) {
    let part = percentage /= step;
    let question = `В стакане ${percentage} % воды. Стакан на ${Math.floor(part)}
    пуст или на ${Math.ceil(part)} полон?`;
    newResponse = confirm(question);
}

if (newResponse) {
    console.log("Поздравляем, вы на " + percentage * step + "% оптимист!");
} else {
    console.log("Поздравляем, вы на " + percentage * step + "% пессимист!");
}






// const response2 = confirm('В стакане 25% воды. Стакан на 1/4 пуст или на 3/4 полон?');



// const response3 = confirm('В стакане 12.5% воды. Стакан на 1/8 пуст или на 7/8 полон?');
// const response4 = confirm('В стакане 6.25% воды. Стакан на 1/16 пуст или на 15/16 полон?');



