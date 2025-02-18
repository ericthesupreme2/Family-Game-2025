//http://localhost/
let objar = [
    {
        name: 'jess',
        code: 158,
        profileimage: "images/jess.png"
    },
    {
        name: 'ben',
        code: 432,
        profileimage: "images/ben.png"
    },
    {
        name: 'marla',
        code: 624,
        profileimage: "images/marla.png"
    },
    {
        name: 'laura',
        code: 793,
        profileimage: "images/laura.png"
    },
    {
        name: 'kerry',
        code: 218,
        profileimage: "images/kerry.png"
    },
    {
        name: 'lex',
        code: 365,
        profileimage: "images/lex.png"
    },
    {
        name: 'ruben',
        code: 849,
        profileimage: "images/ruben.png"
    },
    {
        name: 'margot',
        code: 702,
        profileimage: "images/margot.png"
    },
    {
        name: 'isobel',
        code: 531,
        profileimage: "images/isobel.png"
    },
    {
        name: 'nick',
        code: 294,
        profileimage: "images/nick.png"
    },
    {
        name: 'emma',
        code: 603,
        profileimage: "images/emma.png"
    },
    {
        name: 'kate',
        code: 743,
        profileimage: "images/kate.png"
    },
    {
        name: 'anna',
        code: 182,
        profileimage: "images/anna.png"
    },
    {
        name: 'isaac',
        code: 976,
        profileimage: "images/isaac.png"
    },
    {
        name: 'eve',
        code: 841,
        profileimage: "images/eve.png"
    },
    {
        name: 'hazel',
        code: 305,
        profileimage: "images/hazel.png"
    },
    {
        name: 'christopher',
        code: 560,
        profileimage: "images/christopher.png"
    },
    {
        name: 'eric',
        code: 'Cyclopsblue786!',
        profileimage: "images/eric.png"
    }
];
document.getElementById('accessForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const name = document.getElementById('name').value.trim().toLowerCase();
    const code = document.getElementById('code').value.trim();
    const message = document.getElementById('message');
    var bFound = false;
    document.getElementById("loginform").style.display = "block";
    document.getElementById("content").style.display = "none";
    objar.forEach(function(item) {
       if ((item.name == name) && (item.code == code)){
            found_item = item;
            bFound = true;
       }
    });
    if(bFound == true){
        document.getElementById("loginform").style.display = "none";
        document.getElementById("content").style.display = "block";
        console.log(found_item.name);
       document.getElementById("profile_image").src = found_item.profileimage;
   }else{
        message.textContent = 'Invalid name or code. Please try again.';
        message.style.color = 'red';    
   }
});
