const store = {
    name: "Pizza&Sushi",
    address: function () {
        console.log(`${this.country_city}, ${this.street}, ${this.house}`);
    },
    country_city: "Ukraine, Odessa",
    street: "Bocharova 1",
    house: "number 5",
    phone: "+380963956134",
}

const product = [
    {
        id: 1,
        title: "4 мяса",
        price: 120,
        stock: "50%",
        description: "Копченая курочка,салями,ветчина,охотничьи сосиски,томат,моцарелла",
        specifications: [
            {
                title: "Размер",
                value: "30 см"
            },
            {
                title: "Вес",
                value: "620гр"
            },
        ]
    },





    {
        id: 2,
        title: "4 сыра",
        price: 110,
        stock: "50%",
        description: "Моцарелла, голландский сыр, пармезан, дор-блю",
        specifications: [
            {
                title: "Размер",
                value: "30 см"
            },
            {
                title: "Вес",
                value: "610гр"
            },
        ]
    },





    {
        id: 3,
        title: "Пепперони",
        price: 125,
        stock: "0%",
        description: "Колбаса пепперони,томаты,помидоры черри,томатный соус,орегано,сыр,моцарелла",
        specifications: [
            {
                title: "Размер",
                value: "30 см"
            },
            {
                title: "Вес",
                value: "630гр"
            },
        ]
    },


    {
        id: 4,
        title: "Деревенская",
        price: 140,
        stock: "5%",
        description: "Сыровяленное мясо,свинина,шампиньоны,томаты,огурцы солёные,томатный соус,орегано,моцарелла",
        specifications: [
            {
                title: "Размер",
                value: "30 см"
            },
            {
                title: "Вес",
                value: "640гр"
            },
        ]
    },


    {
        id: 5,
        title: "Амерекано",
        price: 145,
        stock: "25%",
        description: "Сыровяленное мясо,свинина,шампиньоны,томаты,огурцы солёные,томатный соус,орегано,моцарелла,сыр Пармезан,копчённая курица",
        specifications: [
            {
                title: "Размер",
                value: "30 см"
            },
            {
                title: "Вес",
                value: "650гр"
            },
        ]
    },

    {
        id: 6,
        title: "Гавайская",
        price: 125,
        stock: "0%",
        description: "орегано,моцарелла,копчённая курица,оливковое масло,ананасы,сливочно-чесночный соус",
        specifications: [
            {
                title: "Размер",
                value: "30 см"
            },
            {
                title: "Вес",
                value: "600гр"
            },
        ]
    },

]
