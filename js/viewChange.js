const SIGN_UP_VIEW = 1;
const SIGN_IN_VIEW = 2;
const SIGN_OUT_VIEW = 3;
const diary_write_VIEW = 4;
const diary_list_VIEW = 5;


let signUpWrap = "";
let signInWrap = "";
let writeWrap = "";
let listWrap = "";


// 어떤건 보이고 어떤건 보이게 하지마라 즉, 화면초기화
const initViews = () => {
    console.log("initViews() CALLED!!");

    let signUpWrap = document.querySelector("div.sign_up_wrap");
    let signInWrap = document.querySelector("div.sign_in_wrap");
    let writeWrap = document.querySelector("div.write_wrap");
    let listWrap = document.querySelector("div.list_wrap");
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


        case diary_write_VIEW:
            signUpWrap.style.display = "none";
            signInWrap.style.display = "none";
            writeWrap.style.display = "block";
            listWrap.style.display = "none";
            break;

        case diary_list_VIEW:
            signUpWrap.style.display = "none";
            signInWrap.style.display = "none";
            writeWrap.style.display = "none";
            listWrap.style.display = "block";
            break;
    }
}