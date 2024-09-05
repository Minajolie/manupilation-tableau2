// 1. Demander a l'utilisateur de remplire deux tableaux (tab1 et tab2) dont la taille est 5
// Creer tab3 a partir des elements du tab1 qui ne se trouvent pas dans tab2
// Creer tab4 a partir des elements du tab1 qui se trouvent dans tab2
let tab1 =[]
let tab2= []
for(let i = 0 ; i<5 ;i++){
    tab1.push(parseInt(prompt("Donne des nombres pour le tableau1")))
    document.getElementById('tableau1').innerHTML="tableau 1 :"+tab1
}
for(let i = 0 ; i<5 ;i++){
    tab2.push(parseInt(prompt("Donne des nombres pour le tableau2")))
    document.getElementById('tableau2').innerHTML="tableau 2 :"+tab2
}
let tab3 = tab1.filter((elements)=> {
    let verifie = false
   for(let j=0;j<tab2.length;j++){
    if(elements===tab2[j]){
        verifie=true
    }
   }
   if(verifie===false){
    return elements
   }
})

document.getElementById('tableau3').innerHTML="tableau 3 :"+tab3
let tab4 =tab1.filter((element)=>{
    let controle= false
    for(let t=0;t<tab2.length;t++){
        if(element===tab2[t]){
           return element
        }
    }
})
document.getElementById('tableau4').innerHTML="tableau 4 :"+tab4

