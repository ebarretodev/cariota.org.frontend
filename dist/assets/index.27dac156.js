import{j as i,R as l,a}from"./vendor.bc880a7a.js";const d=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}};d();const o=i.exports.jsx,u=i.exports.jsxs,p=()=>o("div",{className:"App",children:u("header",{className:"App-header",children:[o("h1",{children:"Welcome to CarIOTA"}),o("p",{children:"Soon you'll drive a virtual connected car empowered by IOTA"}),o("img",{className:"App-logo",src:"/images/iota_logo.png",alt:""})]})});l.render(o(a.StrictMode,{children:o(p,{})}),document.getElementById("root"));