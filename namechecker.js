//http://localhost/
let objar = [
    {
        name: 'jess',
        code: 158,
        profileimage: "images/Jess.png"
    },
    {
        name: 'ben',
        code: 432,
        profileimage: "images/Ben.png"
    },
    {
        name: 'marla',
        code: 624,
        profileimage: "images/Marla.png"
    },
    {
        name: 'laura',
        code: 793,
        profileimage: "images/Laura.png"
    },
    {
        name: 'kerry',
        code: 218,
        profileimage: "images/Kerry.png"
    },
    {
        name: 'lex',
        code: 365,
        profileimage: "images/Lex.png"
    },
    {
        name: 'ruben',
        code: 849,
        profileimage: "images/Ruben.png"
    },
    {
        name: 'margot',
        code: 702,
        profileimage: "images/Margot.png"
    },
    {
        name: 'isobel',
        code: 531,
        profileimage: "images/Isobel.png"
    },
    {
        name: 'nick',
        code: 294,
        profileimage: "images/Nick.png"
    },
    {
        name: 'emma',
        code: 603,
        profileimage: "images/Emma.png"
    },
    {
        name: 'kate',
        code: 743,
        profileimage: "images/Kate.png"
    },
    {
        name: 'anna',
        code: 182,
        profileimage: "images/Anna.png"
    },
    {
        name: 'isaac',
        code: 976,
        profileimage: "images/Isaac.png"
    },
    {
        name: 'eve',
        code: 841,
        profileimage: "images/Eve.png"
    },
    {
        name: 'hazel',
        code: 305,
        profileimage: "images/Hazel.png"
    },
    {
        name: 'christopher',
        code: 560,
        profileimage: "images/Christopher.png"
    },
    {
        name: 'eric',
        code: 'Cyclopsblue786!',
        profileimage: "images/Eric.png"
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