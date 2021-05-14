import { IonFooter, IonToolbar, IonText } from '@ionic/react'



const FooterComponent:React.FC = () => {
    return (
        <IonFooter>
            <IonToolbar color="primary">
                <IonText>
                    MERIDIEM INC
                </IonText>
            </IonToolbar>
        </IonFooter>
    )
}

export default FooterComponent
