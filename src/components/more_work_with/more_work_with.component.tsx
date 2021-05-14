
import { IonCol, IonGrid, IonImg, IonRow } from '@ionic/react'


import msf from '../../assets/images/msf.png'
import apl from '../../assets/images/apl.jpg'
import ggl from '../../assets/images/ggl.png'
import img_3 from '../../assets/images/3.jpg'


import './more_work_with.component.scss'

const MoreWorkWithComponent = () => {
    const cos = [
        {
            text: 'Microsoft',
            img: img_3,
            logo: msf,
        },
        {
            text: 'Google',
            logo: ggl,
            img: img_3,
        },
        {
            text: 'Apple',
            logo: apl,
            img: img_3,
        }
    ]

    return (
        <div className="padded_container more_work_with">
            <IonGrid>
                <IonRow>
                    {
                        cos.map(co=> {

                            return (
                                <IonCol sizeXs="12" 
                                        sizeMd="3" 
                                        offsetMd="1"
                                        key={co.text}
                                >
                                    <MoreWorkWithCardComponent
                                        {...co}
                                    />
                                </IonCol>
                            )
                        })
                    }
                </IonRow>
            </IonGrid>
        </div>
    )
}

interface ComponentProps {
    img: string,
    logo: string,
    text: string,
}
const MoreWorkWithCardComponent: React.FC<ComponentProps> = ({ img, text, logo })=> {
    return (
        <div className="more_work_with__card"
            style={{
                backgroundImage: `url(${img})`
            }}>
            <IonImg
                src={logo}
                className="more_work_with__card__image"
            />
        </div>
    )
}

export default MoreWorkWithComponent
