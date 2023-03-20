// FOR Döngüsü
for(var i=0;i<10;i++){
    if(i==5){
        continue; 
    }
    document.write("Emirhan"+i+ "<br>");
    if(i==7){
        break;
    }
}
document.write("<br>");
var dizi=["Emirhan","Ayşe","Mehmet","Gülten"];
for(var i=0;i<dizi.length;i++){
    document.write(dizi[i]+ "<br>");
}
var p=0
document.write("<br>");
while(p<10){
    document.write(p+"<br>");
    p++;
}
