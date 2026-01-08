function getdata(dataid, nextdata) {
    setTimeout(() => {
        console.log("data", dataid);
        if (nextdata) {
            nextdata()

        }
    }, 2000)

}

getdata(112, () => {
    getdata(113, () => {
        getdata(114, () => {
            getdata(115)
        })
    })
})