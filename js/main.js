const e=document.querySelector(".splash");document.addEventListener("DOMContentLoaded",t=>{setTimeout(()=>{e.classList.add("fade-out")},5e3),setTimeout(()=>{e.classList.add("display-none")},1e4)});const t={rootMargin:"0px 0px 0px 0px",threshold:.5},s=document.querySelector(".nav-about"),c=document.querySelector("#about-page"),o=new IntersectionObserver((function(e,t){e.forEach(e=>{e.isIntersecting?s.classList.add("active"):s.classList.remove("active")})}),t);o.observe(c);const n=document.querySelector(".nav-service"),a=document.querySelector("#service-page"),i=new IntersectionObserver((function(e,t){e.forEach(e=>{e.isIntersecting?n.classList.add("active"):n.classList.remove("active")})}),t);i.observe(a);const r=document.querySelector(".nav-clients"),l=document.querySelector("#clients-page"),d=new IntersectionObserver((function(e,t){e.forEach(e=>{e.isIntersecting?r.classList.add("active"):r.classList.remove("active")})}),t);d.observe(l);const v=document.querySelector(".nav-contact"),u=document.querySelector("#contact-page"),m=new IntersectionObserver((function(e,t){e.forEach(e=>{e.isIntersecting?v.classList.add("active"):v.classList.remove("active")})}),t);m.observe(u);const g=document.querySelector(".mobile-nav-toggle"),L=document.querySelector(".mobile-nav-links");g.addEventListener("click",()=>{L.classList.toggle("mobile-nav-open"),g.classList.toggle("mobile-nav-open")}),L.addEventListener("click",()=>{L.classList.toggle("mobile-nav-open"),g.classList.toggle("mobile-nav-open")});