var e=Array.prototype;
if(!e.filter){
 e.filter=function(f,x){

  if (typeof f != "function") throw new TypeError();
  if (this == null) throw new TypeError();

  var m=[];
  for(var v,i=0,o=Object(this),l=(o.length>>>0);i<l;i++){if(i in o){v=o[i];if(f.call(x,v,i,o)){m.push(v)}}};
  return m;
 };
}
