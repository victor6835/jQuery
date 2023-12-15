JSON (JavaScript Object Notation)

1 陣列(Array)放進物件(Object)裡
    let temp = {
        屬性: [],
    }

    let friends = {
        CHD104: [
            {name: 'Andy', age: 25},
            {name: 'Brian', age: 25},
            {name: 'Carl', age: 21},
            {name: 'Dale', age: 23},
            {name: 'Eric', age: 26},
        ],
    }
    friends --> Object
    friends.CHD104 --> Array
    friends.CHD104[2] --> Object
    friends.CHD104[2].name --> Carl

    [JSON 格式]
    {
        "CHD104":[
            {
                "name":"Andy",
                "age":25
            },
            {
                "name":"Brian",
                "age":25
            },
            {
                "name":"Carl",
                "age":21
            },
            {
                "name":"Dale",
                "age":23
            },
            {
                "name":"Eric",
                "age":26
            }
        ]
    }

2 物件(Object)放進陣列(Array)裡
    let temp = [
        {},{},{}...
    ]

    let classmate = [
        {name: 'Andy', age: 25},
        {name: 'Brian', age: 25},
        {name: 'Carl', age: 21},
        {name: 'Dale', age: 23},
        {name: 'Eric', age: 26},
    ]

    classmate --> Array
    classmate[1] --> Object
    classmate[1].name --> Brian

    [JSON 格式]
    [
        {
            "name":"Andy",
            "age":25
        },
        {
            "name":"Brian",
            "age":25
        },
        {
            "name":"Carl",
            "age":21
        },
        {
            "name":"Dale",
            "age":23
        },
        {
            "name":"Eric",
            "age":26
        }
    ]

3 轉換
    (1) 將「JavaScript物件」轉換成 JSON
        JSON.stringify(JavaScript物件)

        [ex]
        const man = {
            name: 'Peter',
            age: 40,
            gender: 'male',
            favoriateColor: ['black','white','gray'],
            car: {
                make: 'BMW',
                mode: 'X5',
                year: 2022,
            },
            retired: false,
        }
        執行: console.log(JSON.stringify(man))
        結果: {"name":"Peter","age":40,"gender":"male","favoriateColor":["black","white","gray"],"car":{"make":"BMW","mode":"X5","year":2022},"retired":false}

    (2) 將 JSON 轉換成「JavaScript物件」
        (※ 記得將 JSON 放進引號內)
        JSON.parse(json檔)

        let json = `{"name":"Peter","age":40,"gender":"male","favoriateColor":["black","white","gray"],"car":{"make":"BMW","mode":"X5","year":2022},"retired":false}`
        
        執行: console.log(JSON.parse(json))
        結果: {name: 'Peter', age: 40, gender: 'male', favoriateColor: Array(3), car: {…}, …}
1 陣列(Array)放進物件(Object)裡

https://miniaspreading.github.io/guide-to-json/1-what-is-json.html