function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}

async function getUserInfo() {
    await delay(1000);
    return ({ name: 'Vic', age: 21, id: 1 });
}

async function getUserAvatar(userInfo) {
    await delay(1000);
    userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
    return userInfo;
}

async function getUserAdditionalInfo(userInfo) {
    await delay(1000);
    userInfo.interests = ['sport', 'books'];
    return userInfo;
}

async function getResult() {
    let userInfo1 = await getUserInfo();
    let userInfo2 = await getUserAvatar(userInfo1);
    let userInfoResult = await getUserAdditionalInfo(userInfo2);

    console.log(userInfoResult);
}

getResult();

async function getUser() {
    return { name: 'Vic', age: 21, id: 1 };
}

async function getInfo() {
    try {
        let user = await getUser();
        throw new Error('error');
    } catch (error) {
        console.warn(error);
    }
}

getInfo();