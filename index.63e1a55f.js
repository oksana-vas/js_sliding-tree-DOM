var e=document.querySelector(".tree");document.querySelectorAll("li").forEach(function(e){var t=document.createElement("span");e.prepend(t),t.append(t.nextSibling)}),e.addEventListener("click",function(e){if("SPAN"===e.target.tagName){var t=e.target.closest("li").querySelector("ul");t&&(t.hidden=!t.hidden)}});
//# sourceMappingURL=index.63e1a55f.js.map
