import { 
    IonGrid, IonRow, IonCol, IonText, IonImg, IonButton,
} from '@ionic/react'

import VSpacerComponent from '../v_spacer/v_spacer.component'

import img from '../../assets/images/1.jpg'

import './welcome.component.scss'

const WelcomeComponent = () => {
    return (
        <div className="padded_container welcome">
            <IonGrid>
                <IonRow className="welcome__grid">
                    
                    {/* text */}
                    <IonCol sizeXs="12" sizeMd="6" className="welcome__content">
                        
                        <p className="welcome__content__title_sub">
                            We
                        </p>
                        {/* <VSpacerComponent space={1} /> */}
                        <h1 className="welcome__content__title">
                            Transform Ideas into Products
                        </h1>
                        <VSpacerComponent space={1.5} />
                        <IonText className="welcome__content__text">
                            Curabitur non nisi in justo fringilla mollis. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Sed condimentum interdum lorem eu lacinia.
                        </IonText>
                        <VSpacerComponent space={2.5} />

                        <IonButton 
                            className="app_button"
                            strong={true}
                            size="default"
                            expand="block"
                            style={{
                                minWidth: '160px'
                            }}
                        >
                            Hire Us
                        </IonButton>
                        
                    </IonCol>
                    {/* text */}

                    
                    {/* image */}
                    <IonCol sizeXs="12" sizeMd="6" className="welcome__imagery">
                        <div className="welcome__imagery__container">
                            <IonImg 
                                src={img}
                                className="welcome__imagery__image" 
                            />
                        </div>
                    </IonCol>
                    {/* image */}

                </IonRow>
            </IonGrid>
        </div>
    )
}

export default WelcomeComponent
