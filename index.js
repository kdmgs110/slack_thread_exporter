document.querySelectorAll(".p-workspace__secondary_view .c-virtual_list__scroll_container .c-virtual_list__item")
    .forEach(thread => console.log(thread.querySelector(".c-message_kit__blocks .p-block_kit_renderer").textContent || "") );