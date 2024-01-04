// function get(element){return document.querySelector(element)}
// function checkEl(element){
//     element.addEventListener('click',()=>
//     alert('element is clicked its where text = '+element.innerText))
// }
// // get('#anyBtn').addEventListener('click',()=>{
// //     createToast('error',"invalid email")
// // })
// 
// 
// // start code here
// let isEmailOk = false;
// let isPassOk = false
// const passInput = get('#passInput') 
// const confirmPassInput = get('#confirmPassInput') 
// const passEyeBtn = get('#eyeBtn')
// const emailInput = get('#emailInput')
// const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// //                     emon1122       @ gmail         .com{e,4} means must to 2-4 
// get('#eyeBtn').addEventListener('click',()=>{
//     passInput.type  = passInput.type === 'text'?'password':'text';
//     passEyeBtn.className = `round_btn fa-solid fa-eye${passInput.type ==='password'? '':'-slash'}`
// })
// 
// 
// function checkEmail(email){
//     const isValidEmail = emailPattern.test(email);
//     if(!isValidEmail){
//         createToast('error','email is not Valid')
//         highLightInput(emailInput)
//     }
//     if(isValidEmail){isEmailOk = true}
// 
// }
// 
// function checkPassword(password) {
//   if (password.length < 6) {createToast('warning','password must be at least 6 character');highLightInput(passInput)}
//   if (!/[A-Z]/.test(password)) {createToast('warning','password must contain UpperCase(A-Z)');highLightInput(passInput)}
//   if (!/[a-z]/.test(password)) {createToast('warning','password must contain lowercase(a-z)');highLightInput(passInput)}
//   if (!/[0-9]/.test(password)) {createToast('warning','password must contain number (0-9)');highLightInput(passInput)}
// 
//   return true;
// }
// 
// function highLightInput(element){
//         element.classList.add('error_input')
//         setTimeout(()=>element.classList.remove('error_input'),3500)    
// }
// 
// get('form').addEventListener('submit',(e)=>{
//     e.preventDefault()
//     const emailText = emailInput.value
//     if(emailText){
//         checkEmail(emailText);
//     }else if(!emailText){
//         createToast('error','email field is empty')
//         highLightInput(emailInput)
//     }
//     if(isEmailOk){
//         if(!passInput.value){
//             createToast('error','password field is empty')
//         }
//         isPassOk =  checkPassword(passInput.value)
//         if(isPassOk){
//             if(passInput.value !== confirmPassInput.value){
//                 createToast('error','password does not match')
//                 highLightInput(confirmPassInput)
//             }else{
//                 createToast('success','all ok!')
//             }
//         }
//     }
// })
// 
