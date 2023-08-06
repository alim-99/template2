// Automate CopyRight Year
new Date().getFullYear()
let date = new Date();
console. log(date. getFullYear());
const copyrightFooter = ` <span> Copyright © ${new Date(). getFullYear()}</span> <span>kassper</span> All Rights Reserved `;
document. getElementById('year').innerHTML = copyrightFooter;