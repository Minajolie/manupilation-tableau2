// 2. Soit un tableau tab1=[5,3,87,1,-4,-99,0]
// Sans utiliser les methodes javascript :
// 1. Ecrire une fonction qui  reçoit en parametre tab1 et qui permet de le trier  
// 2. Ecrire une fonction qui reçoit en parametre tab1 et retourne la valeur max , min
let tab1 = [5,3,87,1,-4,-99,0]
tab1.sort()
document.getElementById('tab1').innerHTML= "tableau 1 :"+tab1

let min = tab1 => tab1.reduce((a,b)=>Math.min(a,b))
let max = tab1 => tab1.reduce((a,b)=>Math.max(a,b))
document.getElementById('tab2').innerHTML= "Min = "+min(tab1)
document.getElementById('tab3').innerHTML= "Max = "+max(tab1)

