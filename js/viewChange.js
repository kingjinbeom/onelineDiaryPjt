const SIGN_UP_VIEW = 1;
const SIGN_IN_VIEW = 2;
const SIGN_OUT_VIEW = 3;
const DIARY_WRITE_VIEW = 4;
const DIARY_LIST_VIEW = 5;


let signUpWrap = "";
let signInWrap = "";
let writeWrap = "";
let listWrap = "";


// 어떤건 보이고 어떤건 보이게 하지마라 즉, 화면초기화
const initViews = () => {
    console.log("initViews() CALLED!!");

    signUpWrap = document.querySelector("div.sign_up_wrap");
    signInWrap = document.querySelector("div.sign_in_wrap");
    writeWrap = document.querySelector("div.write_wrap");
    listWrap = document.querySelector("div.list_wrap");
}

// 선택된 view만 보이고 나머지는 안보이게 한다.
const showSelectedView = (viewNo) => {
    console.log("showSelectedView() CALLED!!");


    switch (viewNo) {
        case SIGN_UP_VIEW:
            signUpWrap.style.display = "block";
            signInWrap.style.display = "none";
            writeWrap.style.display = "none";
            listWrap.style.display = "none";

            break;

        case SIGN_OUT_VIEW:
        case SIGN_IN_VIEW:
            signUpWrap.style.display = "none";
            signInWrap.style.display = "block";
            writeWrap.style.display = "none";
            listWrap.style.display = "none";
            break;


        case DIARY_WRITE_VIEW:
            signUpWrap.style.display = "none";
            signInWrap.style.display = "none";
            writeWrap.style.display = "block";
            listWrap.style.display = "none";
            break;

        case DIARY_LIST_VIEW:
            signUpWrap.style.display = "none";
            signInWrap.style.display = "none";
            writeWrap.style.display = "none";
            listWrap.style.display = "block";
            break;
    }
}