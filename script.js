let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let phones = document.getElementById('phone');

let obj ={
    firstName :'',
    lastName :'',
    email : '',
    phone :'',
}

async function addObj(obj) {
    await firebase.firestore().collection('users').add({
        firstName: obj.firstName,
        lastName: obj.lastName,
        email: obj.email,
        phone: obj.phone,
    })
}

function addData() {
    if(isNaN(Number(phones.value)) == false){
        obj.firstName = firstname.value
        obj.lastName = lastname.value
       
        obj.email = email.value
        obj.phone = Number(phones.value)
        addObj(obj)
        alert('thanh cong')
    } else {
        alert('vui long nhap dung so dien thoai')
    }
}

async function readData() {
    let result = await firebase.firestore().collection('users').get();
    for (let doc of result.docs) {
        console.log(doc.data())
    }
}

async function updatePhone(){
    let result = await firebase.firestore().collection('users').get();
    for(let doc of result.docs){
        let newPhone = Number( "84" + doc.data().phone);
        await firebase.firestore().collection('users').doc(doc.id).update({
            phone: newPhone
        })
    }
}

//async function deleteSameData() chưa nghĩ ra
