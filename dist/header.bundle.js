document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".burger-menu"),t=document.querySelector(".close-menu"),c=document.querySelector(".sidebar"),o=document.getElementById("discount-popup"),n=document.querySelector(".slider"),s=()=>{c.classList.toggle("active"),document.body.classList.toggle("sidebar-active"),console.log("Sidebar toggled. Active:",c.classList.contains("active"))};e.addEventListener("click",(e=>{s(),console.log("Burger menu clicked.")})),t.addEventListener("click",(e=>{s(),console.log("Close menu clicked.")})),document.addEventListener("click",(t=>{c.contains(t.target)||e.contains(t.target)||!c.classList.contains("active")||o.contains(t.target)||n.contains(t.target)?console.log("Click detected but sidebar remains open."):(c.classList.remove("active"),document.body.classList.remove("sidebar-active"),console.log("Sidebar closed due to outside click."))}))}));