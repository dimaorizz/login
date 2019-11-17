const url = '/login';

function isEmptyObject(obj) {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}

class RestApi{
    static get(form){
        return fetch(url, {
            method: 'post',
            body: JSON.stringify(form),
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) =>{
        return res.json();
        });
    }
}


// document.getElementById('login-submit').addEventListener('onclick', () => {
//     RestApi.fetch().then((res) => {
//         console.log(res);
//     })
// })

const submit = () => {
    const user = document.getElementById('login').value;
    const form = {
        username: user
    }
    RestApi.get(form).then((res) => {
        console.log(res);
        if(isEmptyObject(res)){
            document.getElementById('login-info').innerHTML = 'Неизвестный пользователь';
        } else {
            document.getElementById('login-info').innerHTML = 'Успешный вход';
        }
    });
};
