import{d as P,r as x,o as W,c as f,f as B,w as G,T,e as g,h as A,b as m}from"./index-8d5c63e0.js";import{S as F,a as j,W as D,O as L,c as w,d as _,e as y,T as H,A as R,f as U,G as O,h as q,i as I,F as J,j as K,g as Q}from"./index-224f7bc5.js";const X="varying vec2 vertexUV;varying vec3 vertexNormal;void main(){vertexUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",Y="uniform sampler2D globeTexture;varying vec2 vertexUV;varying vec3 vertexNormal;void main(){float intensity=1.05-dot(vertexNormal,vec3(0,0,1.0));vec3 atmosphere=vec3(0.3,0.6,1)*pow(intensity,1.5);gl_FragColor=vec4(atmosphere+texture2D(globeTexture,vertexUV).xyz,1.0);}",Z="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,0.9);}",$="varying vec3 vertexNormal;void main(){float intensity=pow(0.6-dot(vertexNormal,vec3(0,0,1.0)),2.0);gl_FragColor=vec4(0.3,0.6,1.0,1.0)*intensity;}",ee={key:0,class:"content-container text-white no-select"},te=m("h2",null,"Earth",-1),ae=m("p",{class:"main-content fs-50 italic"},"Earth 3D model",-1),ne=m("p",{class:"fs-20"},"you can check mouse move effect",-1),re=[te,ae,ne],ce=P({__name:"Earth",setup(oe){const v=x(),n=new F,a=new j(75,innerWidth/innerHeight,.1,1e3),e=new D({antialias:!0});e.setSize(innerWidth,innerHeight),e.setPixelRatio(window.devicePixelRatio);let o;function S(){o=new w(new _(5,50,50),new y({vertexShader:X,fragmentShader:Y,uniforms:{globeTexture:{value:new H().load("/img/globe.jpg")}}}))}let i;function M(){i=new w(new _(5,50,50),new y({vertexShader:Z,fragmentShader:$,blending:R,side:U})),i.scale.set(1.1,1.1,1.1),n.add(i)}let r;function N(){r=new O,r.add(o),n.add(r)}let s;function V(){const d=new q,u=new I({color:16777215}),p=[];for(let l=0;l<5e3;l++){const z=(Math.random()-.5)*2e3,C=(Math.random()-.5)*2e3,E=(l%2==0?-Math.random():Math.random())*2e3;p.push(z,C,E)}d.setAttribute("position",new J(p,3)),s=new K(d,u),n.add(s)}a.position.z=15;const b={x:0,y:0};function h(){requestAnimationFrame(h),e.render(n,a),t.update(),o.rotation.y+=.003,s.rotation.y+=5e-4,Q.to(r.rotation,{y:b.x*.5,duration:2})}function k(){a.aspect=innerWidth/innerHeight,a.updateProjectionMatrix(),e.setSize(innerWidth,innerHeight)}const t=new L(a,e.domElement);t.minDistance=10,t.maxDistance=100,t.rotateSpeed=.4;const c=x(!0);return t.addEventListener("start",()=>{c.value=!1}),t.addEventListener("end",()=>{c.value=!0}),addEventListener("resize",k),W(async()=>{v.value.appendChild(e.domElement),await S(),await M(),await N(),await V(),h()}),(d,u)=>(g(),f("div",{ref_key:"canvas",ref:v,class:"canvas-container"},[B(T,{name:"fade"},{default:G(()=>[c.value?(g(),f("div",ee,re)):A("",!0)]),_:1})],512))}});export{ce as default};
