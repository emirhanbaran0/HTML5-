function yapilandir(){
    var renk=document.querySelector("#s1").style.color;
var boyut=document.querySelector("#s1").style.fontSize;
alert(boyut);
alert(renk);
document.querySelector("#s2").style.color=renk;
document.querySelector("#s2").style.fontSize=boyut;
}
yapilandir();
