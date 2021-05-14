
import { IonGrid, IonRow } from '@ionic/react'

import VSpaceComponent from '../v_spacer/v_spacer.component'

import './about_us.component.scss'

const AboutUsComponent = () => {
    return (
        <div className="padded_container about_us">
            
            <h2 className="about_us__title"> 
                About Us 
            </h2>
            <VSpaceComponent space={1} />
            <p className="about_us__text">
                Aliquam erat volutpat. Nunc dapibus erat a leo 
                egestas, eget pellentesque sem iaculis. Cras auctor 
                pulvinar risus non pulvinar. Interdum et malesuada 
                fames ac ante ipsum primis in faucibus. Vestibulum 
                non vestibulum purus. Integer faucibus luctus 
                tempor. Duis pellentesque dictum libero ac sodales.
            </p>

        </div>
    )
}

export default AboutUsComponent
