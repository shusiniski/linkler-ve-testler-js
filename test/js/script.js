
//rekursiv proqramlasma 


// function topla(a,b) {
	
// 	if (a <=b) {


// 		cem=cem+a
// 		a=a+1
// 		topla(a=a,b=b)

// 	}
// }

// cem=0 

// topla(1,4)

// document.write(cem)


// function yaz(a,b){
// 	//if(a<=b){ (bele olanda sonlu dovr say artir getdikce )

// 		document.write(a+'<br>')
// 		a=a+1
// 		yaz(a=a,b=b)
// 	// }
// }

// yaz(1,100)


// function yaz(a,b){
// 	if(a<=b){     (1den yuze kimi artirir)

// 		document.write(a+'<br>')
// 		a=a+1
// 		yaz(a=a,b=b)
// 	}
// }

// yaz(1,100)



// Array Massivleri

//1-ci olaraq Azerbaycan 2-ci Almaniya 

// var seherler=[

//      ['Baki','Gence', 'Sumqayit', 'Cellabad'],



//      ['Berlin', 'Frankfurt','Dortmund','Koln'],

//      ['Istanbul','Ankara','Izmir','Adana','Bursa']




//     ]

//     document.write(seherler[0][0]+' ,'+seherler[1][0]+','+seherler[2][4])


//Js array metodlari

//pop() push() join() shift() unshift() concat()



//pop()
// var a = ['a','b','c'];

// // var b = a.pop();

// a.pop();

// document.write(a);

// //push()

// a.push('d');

// document.write(a);


//join()


// sinvol yazir


// document.write(a.join('*'))



//shift

//arrayin ilk elementini silir

 // a.shift()

 // document.write(a)




 //unshift(

 // arraya basqa elementler yaza bilersen)



 // a.unshift('Elifba');

 // document.write(a);


 //concat()


 // var b = ['d','e','f']


 // var c = a.concat(b);
 // document.write(c);




 //For dongusu


 // for (var i = 0; i < 5; i++) {
 	
 // 	document.write('Salam'+'<br>')
 // }

 // var seherler = [


 //           ['Baki','Gence','Sumqayit','Quba','celilabad'],
 //           ['Berlin','Frankfurt','Dortmund', 'Koln'],
 //           ['Istanbul', 'Ankara','Izmir','Bursa','Adana']

 // ]



 // var olkeler = ['Azerbaycan', 'Almaniya', 'Turkiye']

 // for (var i = 0; i < olkeler.length; i++) {
 // 	document.write(olkeler[i]+ '<br>')

 // 	document.write('<ul>')

 //   for(var j=0; j<seherler[i].length;j++){

 //   	document.write('<li>' +seherler[i][j]+ '</li>')
 //   }

 // 	document.write('</ul>')
 // }




 //While dongusu


 // var a=5;

 // while(a<10  && a>=5){
 // 	document.write(a+'<br>');
 // 	a=a+1;
 // }


 // var a=1;
 // while(a<20){
 // 	document.write(a+'<br>');
 // 	a++;
 // }





 //getelemenet


//  var element = document.getElementById('mainDiv');

// element.innerHTML='Salam';


//Javascript - getElementsByClassName #17




