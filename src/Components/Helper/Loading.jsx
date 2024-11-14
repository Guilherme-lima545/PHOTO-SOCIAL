import React from 'react'
import styles from './Loading.module.css'

const Loading = () => {
const [step, setStep] = React.useState(0)

  React.useEffect(() => {
    function updateStep() {
      setStep((step) => {
        if(step < 7) return step + 1
        else return 0
      });
    }
    const interval = setInterval(updateStep, 300);
    return () => {
      clearInterval(interval)
    }
  }, []);

function displayStep(i) {
  return {
    display: step === i ? 'block' : 'none' 
  }
}

  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}> 
<svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 330 330" xmlSpace="preserve">
<g id="XMLID_2_">
<g style={displayStep(4)} className='5'> 
	<path id="XMLID_4_" d="M97.5,165c0-8.284-6.716-15-15-15h-60c-8.284,0-15,6.716-15,15s6.716,15,15,15h60
		C90.784,180,97.5,173.284,97.5,165z"/>
    </g>


  <g style={displayStep(0)} className='1'> 
	<path id="XMLID_5_" d="M307.5,150h-30c-8.284,0-15,6.716-15,15s6.716,15,15,15h30c8.284,0,15-6.716,15-15S315.784,150,307.5,150z"
		/>
    </g>


  <g style={displayStep(6)} className='7'> 
	<path id="XMLID_6_" d="M172.5,90c8.284,0,15-6.716,15-15V15c0-8.284-6.716-15-15-15s-15,6.716-15,15v60
		C157.5,83.284,164.216,90,172.5,90z"/>
    </g>

    <g style={displayStep(2)} className='3'> 
	<path id="XMLID_7_" d="M172.501,240c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-60
		C187.501,246.716,180.785,240,172.501,240z"/>
    </g>

    <g style={displayStep(5)} className='6'> 
	<path id="XMLID_8_" d="M77.04,48.327c-5.856-5.858-15.354-5.857-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l42.427,42.428
		c2.929,2.929,6.768,4.394,10.606,4.394c3.838,0,7.678-1.465,10.606-4.393c5.858-5.858,5.858-15.355,0-21.213L77.04,48.327z"/>
    </g>

    <g style={displayStep(1)} className='2'> 
	<path id="XMLID_9_" d="M246.746,218.034c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.858-5.857,15.355,0,21.213l42.428,42.426
		c2.929,2.929,6.768,4.393,10.607,4.393c3.839,0,7.678-1.465,10.606-4.393c5.858-5.858,5.858-15.355,0-21.213L246.746,218.034z"/>
    </g>

    <g style={displayStep(3)} className='4'> 
	<path id="XMLID_10_" d="M98.254,218.034L55.828,260.46c-5.858,5.858-5.858,15.355,0,21.213c2.929,2.929,6.768,4.393,10.607,4.393
		c3.839,0,7.678-1.464,10.606-4.393l42.426-42.426c5.858-5.858,5.858-15.355,0-21.213
		C113.609,212.176,104.111,212.176,98.254,218.034z"/>
    </g>

</g>
</svg>
  </div> 
  </div>
  )
}

export default Loading
