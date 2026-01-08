const fs = require('fs');
fs.writeFile('test.txt', 'Hello Node.js', (err) => {
    if (err) console.log(err);
    else console.log('File created');
});

const fsss = require('fs/promises');
async function createFile() {
    try {
        await fsss.writeFile('test1.txt', 'Hello Node.js');
        console.log('File created2');
    } catch (err) {
        console.log(err);
    }
}
createFile();


fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) console.log(err);
    else console.log(data);
});

fs.appendFile('test.txt', '\nNew line added', (err) => {
    if (err) console.log(err);
    else console.log('Data appended');
});

// fs.unlink('test.txt', (err) => {
//     if (err) console.log(err);
//     else console.log('File deleted');
// });

// fs.mkdir('myFolder', (err) => {
//     if (err) console.log(err);
//     else console.log('Folder created');
// });

// fs.rmdir('myFolder', (err) => {
//     if (err) console.log(err);
//     else console.log('Folder deleted');
// });

const exists = fs.existsSync('test.txt');
console.log(exists);


const fss = require('fs/promises');

async function fileWork() {
    await fss.writeFile('p.txt', 'Promise way');
    const data = await fss.readFile('p.txt', 'utf8');
    console.log(data);
}
fileWork();

// fs.rmdir("./File", { recursive: true }, function(err) {
//     if (err) {
//         console.error(err.message);
//     } else {
//         console.log("Remove Folder");
//     }
// })

// fs.rm("./File", { recursive: true }, function(err) {
//     if (err) {
//         console.error(err.message);
//     } else {
//         console.log("Remove Folder");
//     }
// })

// fs.mkdir("./File2/File/husi", { recursive: true }, function(err) {
//     if (err) {
//         console.error(err.message);
//     } else {
//         console.log("Create Folder");
//     }
// })