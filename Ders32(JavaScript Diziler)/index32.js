var isimler=["Emirhan", "Baran","Tuğrul",5,"Cenan","Volkan","Kazım","Talha"];
isimler.push("Mehmet");
document.write(isimler+ "<br>");
delete isimler[3];
document.write(isimler+ "<br>");
isimler.splice(1,2,"Erkmen","Kemal");
document.write(isimler+ "<br>");
isimler.splice(1,4);
document.write(isimler+ "<br>");
document.write(isimler[isimler.length-1]+ "<br>");  //dizinin son elemanını yazdırır.
isimler.pop(); //dizinin son elemanını siler
document.write(isimler[isimler.length-1]+ "<br>"); 
isimler.shift(); //dizinin ilk elemanını siler
document.write(isimler[0]+ "<br>"); 
document.write( "<br>"+isimler+ " -> Dizinin şuanki normal hali"+ "<br>"); 
document.write(isimler.reverse()+ " -> Dizinin ters çevrilmiş hali"+ "<br>");

var renkler=["Kırmızı", "Yeşil", "Sarı"];
var  karisik=renkler.concat(isimler);
document.write("<br>"+karisik+ "<br>");
document.write(isimler.indexOf("Talha"));
