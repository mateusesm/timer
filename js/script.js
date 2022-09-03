 (function start() {
 
    let seconds = 0
    let timer = 0
    const divTimer = document.querySelector('#timer')

    const getTimer = (seconds) => {

        let milliseconds = seconds * 1000

        const clock = new Date(milliseconds)

        return clock.toLocaleTimeString('pt-BR', {

            hour12: false,
            timeZone: 'GMT'
        })

    }

    const startTimer = () => {

        divTimer.classList.remove('pause')
        divTimer.classList.add('on')

        clearInterval(timer)

        timer = setInterval(() => {

            seconds++
            divTimer.innerText = getTimer(seconds)
        
        }, 1000)

    }

    const pauseTimer = () => {

        if (divTimer.classList.value === 'on') {

            divTimer.classList.remove('on')
            divTimer.classList.add('pause')

            clearInterval(timer)

        }
        
    }

    const zeroTimer = () => {

        divTimer.classList.remove('on')
        divTimer.classList.remove('pause')

        clearInterval(timer)
        seconds = 0

        divTimer.innerText = '00:00:00'

    }

    document.addEventListener('click', (e) => {

        const element = e.target

        if (element.id === 'startButton') {

            startTimer()

        } else if (element.id === 'pauseButton') {

            pauseTimer()

        } else if (element.id === 'zeroButton') {

            zeroTimer()

        }

    })
    
})()


