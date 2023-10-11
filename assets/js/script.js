const btnCtaSectionBanner = document.querySelector('.container_banner .shadow_vertical .area_content .content_leftside .area_btn_cta a')

setTimeout(() => {
    animationButton()
}, 1500)

function animationButton() {
    btnCtaSectionBanner.style.transform = 'scale(1.1)'

    setTimeout(() => {
        btnCtaSectionBanner.style.transform = ''
    }, 200)
}
