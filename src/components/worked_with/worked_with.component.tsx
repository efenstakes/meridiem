
import { IonImg } from '@ionic/react'

import msf from '../../assets/images/msf.png'
import apl from '../../assets/images/apl.jpg'
import ggl from '../../assets/images/ggl.png'


import './worked_with.component.scss'

const WorkedWithComponent = () => {
    return (
        <div className="worked_with">
            <IonImg
                src={msf}
                className="worked_with__image"
            />
            <IonImg
                src={apl}
                className="worked_with__image"
            />
            <IonImg
                src={ggl}
                className="worked_with__image"
            />
        </div>
    )
}

export default WorkedWithComponent
