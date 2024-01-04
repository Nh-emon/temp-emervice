const resultHospitals = document.querySelectorAll('#searchResult #hospitalLists .eachHospital')

resultHospitals.forEach(eachHospital=>{
    eachHospital.addEventListener('click',()=>{
        document.querySelector('#searchHospital').classList.add('dis-hide')
        document.querySelector('#exploreHospital').classList.remove('dis-hide')
        document.querySelector('#navMenuBtn').classList.remove('dis-hide')
    })
})




document.querySelector('#navMenuBtn').addEventListener('click',()=>{
    document.querySelector('#shortLinks').classList.toggle('dis-hide')
})