const memberDB = new Map();
const diaryDB = new Map();

/* MEMBER DB START */
// API 만든다
const addMember = (id, pw, mail) => {
    console.log('addMember() CALLED!!');

    // id를 가지고 가입한다.
    memberDB.set(id, {
        u_id: id,
        u_pw: pw,
        u_mail: mail,
    });
    diaryDB.set(id, []);

    console.log(memberDB.get(id));

}

// 회원조회
const searchMember = (id, pw) => {
    console.log('searchMember() CALLED!!');

    let memObj = memberDB.get(id); //ID라는 키값에서 멤버를 가져온다.
    if (memObj !== undefined && memObj.u_pw === pw) {

    }
}
/* MEMBER DB END */


/* DIARY DB START */
const addDiary = () => {
    console.log('addDiary() CALLED!!');
}

const searchDiary = () => {
    console.log('searchDiary() CALLED!!');
}
/* DIARY DB END */