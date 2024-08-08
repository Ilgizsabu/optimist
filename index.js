let userResponse = confirm('В стакане 50% воды. Стакан на 1/2 пуст или на 1/2 полон?');
let percentage = 50;
const step = 2;
let newResponse = userResponse

while (newResponse === userResponse) {
    percentage /= step;
    let partEmpty = 100 - percentage;
    let question = `В стакане ${percentage}% воды. Стакан на ${Math.floor(partEmpty)}
    пуст или на ${Math.ceil(percentage)} полон?`;
    newResponse = confirm(question);
}

if (newResponse) {
    alert("Поздравляем, вы на " + percentage * step + "% оптимист!");
} else {
    alert("Поздравляем, вы на " + percentage * step + "% пессимист!");
}