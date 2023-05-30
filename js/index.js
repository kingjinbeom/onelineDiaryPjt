document.addEventListener("DOMContentLoaded", function () {
    console.log("DOCUMENT READY!!");

    init();
});

const init = () => {
    console.log("init() CALLED!!");


    initViews();
    addEvents();
}

// 어떤건 보이고 어떤건 보이게 하지마라 즉, 화면초기화
const initViews = () => {
    console.log("initViews() CALLED!!");

    let signUpWrap = document.querySelector("div.sign_up_wrap");
    let signInWrap = document.querySelector("div.sign_in_wrap");
    let writeWrap = document.querySelector("div.write_wrap");
    let listWrap = document.querySelector("div.list_wrap");
}

const addEvents = () => {
    console.log("addEvents() CALLED!!");

}