const phones = [
    {
        elImgSrc : './img/a32.jpeg',
        elTitle: "Смартфоны",
        elPrices: "2 994 000",
        elMonthly: '291 000 сум / мес.',
        elDescription: 'Samung Galaxy A32 4/64GB Awesome Black',
        elOrder: 'Купить'
    },
    {
        elImgSrc : "./img/a12.jpeg",
        elTitle: "Смартфоны",
        elPrices: "1 885 000",
        elMonthly: '183 000 сум / мес.',
        elDescription: 'Samung Galaxy A12 3/32GB Black',
        elOrder: 'Купить'
    },
    {
        elImgSrc : "./img/a52.jpeg",
        elTitle: "Смартфоны",
        elPrices: "4 523 000",
        elMonthly: '439 000 сум / мес.',
        elDescription: 'Samung Galaxy A52 4/128GB Black',
        elOrder: 'Купить'
    },
    {
        elImgSrc : "./img/smart-watch.jpeg",
        elTitle: "Smart Watches",
        elPrices: "299 000",
        elMonthly: '29 000 сум / мес.',
        elDescription: "Xiaomi Mi Band 5 Black XMSH10HM (Global version)",
        elOrder: 'Купить'
    },
    {
        elImgSrc : "./img/Note8.jpeg",
        elTitle: "Смартфоны",
        elPrices: "2 110 000",
        elMonthly: '204 000 сум / мес.',
        elDescription: 'Xiaomi Redmi Note 8 4/64GB Neptune Blue',
        elOrder: 'Купить'
    },
    {
        elImgSrc : "./img/Note10.jpeg",
        elTitle: "Смартфоны",
        elPrices: "4 220 000",
        elMonthly: '410 000 сум / мес.',
        elDescription: 'Xiaomi Redmi Note 10 Pro 8/128GB G\'alatiro Rang',
        elOrder: 'Купить'
    },
   
];

phones.forEach((phones)=>{
    let newLi = document.createElement('li');
    let img = document.createElement('img');
    let title = document.createElement('h2');
    let price = document.createElement('h3');
    let monthly = document.createElement('h4');
    let decription = document.createElement('p');
    let order = document.createElement('button');



    newLi.setAttribute('class', 'box')
    img.setAttribute('src', phones.elImgSrc);
    title.textContent = phones.elTitle;
    price.textContent = phones.elPrices;
    monthly.textContent = phones.elMonthly;
    decription.textContent = phones.elDescription;
    order.textContent = phones.elOrder;
    order.setAttribute = ('type', 'submit')




    newLi.appendChild(img);
    newLi.appendChild(title);
    newLi.appendChild(price);
    newLi.appendChild(monthly);
    newLi.appendChild(decription)
    newLi.appendChild(order);

    list.appendChild(newLi)
})