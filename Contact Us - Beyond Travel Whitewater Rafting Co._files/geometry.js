google.maps.__gjsload__('geometry', function(_){var Fra=function(a,b){return Math.abs(_.Zi(b-a,-180,180))},Gra=function(a,b,c,d,e){if(!d){c=Fra(a.lng(),c)/Fra(a.lng(),b.lng());if(!e)return e=Math.sin(_.zi(a.lat())),e=Math.log((1+e)/(1-e))/2,b=Math.sin(_.zi(b.lat())),_.Ai(2*Math.atan(Math.exp(e+c*(Math.log((1+b)/(1-b))/2-e)))-Math.PI/2);a=e.fromLatLngToPoint(a);b=e.fromLatLngToPoint(b);return e.fromPointToLatLng(new _.$k(a.x+c*(b.x-a.x),a.y+c*(b.y-a.y))).lat()}e=_.zi(a.lat());a=_.zi(a.lng());d=_.zi(b.lat());b=_.zi(b.lng());c=_.zi(c);return _.Zi(_.Ai(Math.atan2(Math.sin(e)*
Math.cos(d)*Math.sin(c-b)-Math.sin(d)*Math.cos(e)*Math.sin(c-a),Math.cos(e)*Math.cos(d)*Math.sin(a-b))),-90,90)},Hra=function(a,b){a=new _.Ij(a,!1);b=new _.Ij(b,!1);return a.equals(b)},Ira=function(a,b,c){a=_.Mj(a);c=c||1E-9;const d=_.Zi(a.lng(),-180,180),e=b instanceof _.Nq,f=!!b.get("geodesic"),g=b.get("latLngs");b=b.get("map");b=!f&&b?b.getProjection():null;for(let r=0,u=g.getLength();r<u;++r){const w=g.getAt(r),x=w.getLength(),y=e?x:x-1;for(let B=0;B<y;++B){var h=w.getAt(B);const D=w.getAt((B+
1)%x);if(Hra(h,a)||Hra(D,a))return!0;var l=_.Zi(h.lng(),-180,180),n=_.Zi(D.lng(),-180,180);const G=Math.max(l,n),I=Math.min(l,n);if(l=Math.abs(_.Zi(l-n,-180,180))<=1E-9&&(Math.abs(_.Zi(l-d,-180,180))<=c||Math.abs(_.Zi(n-d,-180,180))<=c)){l=a.lat();n=Math.min(h.lat(),D.lat())-c;var p=Math.max(h.lat(),D.lat())+c;l=l>=n&&l<=p}if(l)return!0;if(G-I>180?d+c>=G||d-c<=I:d+c>=I&&d-c<=G)if(h=Gra(h,D,d,f,b),Math.abs(h-a.lat())<c)return!0}}return!1},Kra=function(a,b){const c=[];let d=[0,0],e;for(let f=0,g=_.Vi(a);f<
g;++f)e=b?b(a[f]):[a[f].lat(),a[f].lng()],Jra(e[0]-d[0],c),Jra(e[1]-d[1],c),d=e;return c.join("")},Jra=function(a,b){for(a=a<0?~(a<<1):a<<1;a>=32;)b.push(String.fromCharCode((32|a&31)+63)),a>>=5;b.push(String.fromCharCode(a+63))},xA=class{};xA.isLocationOnEdge=Ira;
xA.containsLocation=function(a,b){a=_.Mj(a);const c=_.Zi(a.lng(),-180,180),d=!!b.get("geodesic"),e=b.get("latLngs");var f=b.get("map");f=!d&&f?f.getProjection():null;let g=!1;for(let l=0,n=e.getLength();l<n;++l){const p=e.getAt(l);for(let r=0,u=p.getLength();r<u;++r){const w=p.getAt(r),x=p.getAt((r+1)%u);var h=_.Zi(w.lng(),-180,180);const y=_.Zi(x.lng(),-180,180),B=Math.max(h,y);h=Math.min(h,y);(B-h>180?c>=B||c<h:c<B&&c>=h)&&Gra(w,x,c,d,f)<a.lat()&&(g=!g)}}return g||Ira(a,b)};var yA=class{};yA.encodePath=function(a){a instanceof _.Xl&&(a=a.getArray());a=(0,_.em)(a);return Kra(a,function(b){return[Math.round(b.lat()*1E5),Math.round(b.lng()*1E5)]})};yA.decodePath=function(a){const b=_.Vi(a),c=Array(Math.floor(a.length/2));let d=0,e=0,f=0,g;for(g=0;d<b;++g){let h=1,l=0,n;do n=a.charCodeAt(d++)-63-1,h+=n<<l,l+=5;while(n>=31);e+=h&1?~(h>>1):h>>1;h=1;l=0;do n=a.charCodeAt(d++)-63-1,h+=n<<l,l+=5;while(n>=31);f+=h&1?~(h>>1):h>>1;c[g]=new _.Ij(e*1E-5,f*1E-5,!0)}c.length=g;return c};var Lra={encoding:yA,spherical:_.zq,poly:xA};_.qa.google.maps.geometry=Lra;_.Oi("geometry",Lra);});
