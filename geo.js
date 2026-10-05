/* Geographic calculations use WGS84 coordinates and local metric approximation for segment proximity. */
(function(root){
const R=6371008.8,rad=Math.PI/180;
function distance(a,b){const dlat=(b[1]-a[1])*rad,dlon=(b[0]-a[0])*rad;const h=Math.sin(dlat/2)**2+Math.cos(a[1]*rad)*Math.cos(b[1]*rad)*Math.sin(dlon/2)**2;return 2*R*Math.asin(Math.sqrt(Math.min(1,h)));}
function segmentDistance(p,a,b){const k=R*rad,c=Math.cos(p[1]*rad),ax=(a[0]-p[0])*k*c,ay=(a[1]-p[1])*k,bx=(b[0]-p[0])*k*c,by=(b[1]-p[1])*k,dx=bx-ax,dy=by-ay,d=dx*dx+dy*dy,t=d?Math.max(0,Math.min(1,-(ax*dx+ay*dy)/d)):0;return Math.hypot(ax+t*dx,ay+t*dy);}
function lineDistance(p,lines){let best=Infinity;for(const line of lines){for(let i=1;i<line.length;i++)best=Math.min(best,segmentDistance(p,line[i-1],line[i]));}return best;}
function length(lines){return lines.reduce((sum,line)=>sum+line.slice(1).reduce((s,p,i)=>s+distance(line[i],p),0),0);}
function project(p,z){const n=256*2**z,lat=Math.max(-85.0511,Math.min(85.0511,p[1]))*rad;return [(p[0]+180)/360*n,(1-Math.log(Math.tan(lat)+1/Math.cos(lat))/Math.PI)/2*n];}
function unproject(p,z){const n=256*2**z;return [p[0]/n*360-180,Math.atan(Math.sinh(Math.PI*(1-2*p[1]/n)))/rad];}
function bounds(lines){const all=lines.flat();return [Math.min(...all.map(p=>p[0])),Math.min(...all.map(p=>p[1])),Math.max(...all.map(p=>p[0])),Math.max(...all.map(p=>p[1]))];}
root.Geo={distance,segmentDistance,lineDistance,length,project,unproject,bounds};if(typeof module!=='undefined')module.exports=root.Geo;
})(typeof window!=='undefined'?window:globalThis);
