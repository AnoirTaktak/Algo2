
function distinct(tab,tib){
 let newtab = [];
 let s = 0;
  for (var i = 0 ; i<tab.length;i++){if(!tib.includes(tab[i])){newtab.push(tab[i]) }}
  for (var d = 0 ; d<tib.length;d++){if(!tab.includes(tib[d])){newtab.push(tib[d]) }}
  for (var j=0;j<newtab.length;j++){s+=newtab[j]}
  console.log(s)
}
distinct([3, 1, 7, 9], [2, 4, 1, 9, 3]);