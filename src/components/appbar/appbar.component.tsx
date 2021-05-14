import { 
    IonHeader, 
    IonText,
    IonButton, 
} from '@ionic/react'
import React from 'react'

import './appbar.component.scss'


const AppbarComponent:React.FC = () => {
    return (
        <IonHeader style={{
            display: 'flex',
            justifyContent: 'center',
            width: '99vw'
        }}>
            <div className="appbar">

                <IonText color="light">
                    <p className="appbar__logo">
                        MDM
                    </p>
                </IonText>
                
                <div>
                    <IonButton 
                        color="primary" 
                        fill="solid" 
                        size="small"
                        strong={true}
                        className="app_button"
                        style={{
                            // '--border-radius': '50px',
                            // borderRadius: '40px',
                            // marginRight: '16px',
                            // '--padding-start': '18px',
                            // '--padding-end': '18px',
                            fontSize: '.7rem',
                        }}>
                        Contact Us
                    </IonButton>
                </div>

            </div>
        </IonHeader>
    )
}

export default AppbarComponent
