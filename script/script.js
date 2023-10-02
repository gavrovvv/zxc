    const goTopBtn = document.querySelector ('.go-top');

    goTopBtn.addEventListener("click", goTop);
    window.addEventListener("scroll", trackScroll);

    function trackScroll() {
        const offset = window.pageYOffset;
        const coords = document.documentElement.clientHeight;
        if (offset > coords) {
            goTopBtn.classList.add("go-top--show")
        } else {
            goTopBtn.classList.remove("go-top--show")
        }
    }
    function goTop () {
        if (window.pageYOffset > 0) {
            window.scrollBy(0,-70);
            setTimeout(goTop,0)
        }
    }
    
    // const qwer = document.getElementById('qwer') 
    // qwer.onclick = () => {
    //     alert('ВЪХАХЗВДМХВЗДАЗХДВЗХМ НАЕБАЛ ХЗАЛВХЛАЩВЬЩМЗЬВЗЬМВАЬМВЬАМЩШВЬАМЩШВЬМА ');
    // }

    
    // const kishlakModel = document.querySelector('.kishlak')
    
    // audd.onClick = () => {
    //     kishlakModel.style = "display: block";
    // }

    const kishlakModel = document.querySelector('.kishlak')
    const wrapperModel = document.querySelector('.wrapper')
    
    ali.onclick = () => {
        kishlakModel.style = "display: block";
        wrapperModel.style = "display:none"

    } 

    closeBtn.onclick = () => {
        kishlakModel.style = "display: none";
        wrapperModel.style = "display:flex"

    }