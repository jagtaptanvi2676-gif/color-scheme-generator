
const colorInp = document.getElementById('default-color')
const geneBtn = document.getElementById('btn')
const form = document.getElementById('color-scheme')
const schemeType = document.getElementById('colors')
const colorsGen = document.getElementById('color-palette')
const colorCode = document.getElementById('color-code')

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    const count = 6
    let hex = colorInp.value.replace('#', '')
    const mode = schemeType.value


    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=${count}`)
        .then(res => res.json())
        .then(data => {
  
                 colorsGen.innerHTML = ''

                data.colors.forEach(color => {
                    colorsGen.innerHTML += `
                    <div class="color-column">
                        <div class="color-box" style="background-color: ${color.hex.value}"></div>
                        <p class="hex-text">${color.hex.value}</p>
                    </div>
                    `
                })
                colorsGen.classList.remove('animate-palette');
                void colorsGen.offsetWidth; 
                colorsGen.classList.add('animate-palette');
                })

                
        
    })

