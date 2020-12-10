
const timer = () =>{
    let time = 0;
    const clock = ()=>{
        time++
        document.body.textContent = `${time} sekund`;
    }
    return clock
    
}
const count=timer()

window.setInterval(count, 1000)

