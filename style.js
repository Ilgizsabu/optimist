debugger
const waterGlass = 100;

const response1 = confirm('В стакане 50% воды. Стакан на 1/2 пуст или на 1/2 полон?');
const response2 = confirm('В стакане 25% воды. Стакан на 1/4 пуст или на 3/4 полон?');
const response3 = confirm('В стакане 12.5% воды. Стакан на 1/8 пуст или на 7/8 полон?');
const response4 = confirm('В стакане 6.25% воды. Стакан на 1/16 пуст или на 15/16 полон?');
const response5 = confirm('В стакане 3.12% воды. Стакан на 1/32 пуст или на 31/32 полон?');
const response6 = confirm('В стакане 1.56% воды. Стакан на 1/64 пуст или на 63/64 полон?');
const response7 = confirm('В стакане 0.78% воды. Стакан на 1/128 пуст или на 127/128 полон?');
const response8 = confirm('В стакане 0.39% воды. Стакан на 1/256 пуст или на 255/256 полон?');
const response9 = confirm('В стакане 0.19% воды. Стакан на 1/512 пуст или на 511/512 полон?');
const response10 = confirm('В стакане 0.09% воды. Стакан на 1/1024 пуст или на 1023/1024 полон?');











if(firstMatter) {
    const optimist = waterGlass / 2;
} else {
    const pesimist = waterGlass / 2;
    alert(`Поздравляем вы на ${pesimist} % оптимист!`);
}

