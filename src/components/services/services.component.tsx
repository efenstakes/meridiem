import clsx from 'clsx'
import { 
    IonCol, IonGrid, IonImg, IonItem, IonRow,
    IonLabel, IonText, IonAvatar, 
} from '@ionic/react'


import VSpacerComponent from '../v_spacer/v_spacer.component'

import img from '../../assets/images/3.jpg'

import './services.component.scss'

const ServicesComponent = () => {
    const services = [
        {
            title: 'Service One',
            img: img,
            text: 'Ut eros nisi, tempor et efficitur vel, mattis ullamcorper dolor. Integer eget felis at orci tincidunt mollis nec et quam. Proin lobortis sapien vel pharetra viverra. Donec tincidunt non elit eu vestibulum. Quisque eleifend purus eget ex maximus vulputate. Curabitur et metus sit amet sem dictum ullamcorper vehicula sit amet risus. Maecenas lectus erat, molestie vel mollis eu, pretium ac lacus. Vestibulum vel feugiat mauris.'
        },
        {
            title: 'Service Two',
            img: img,
            text: 'Ut eros nisi, tempor et efficitur vel, mattis ullamcorper dolor. Integer eget felis at orci tincidunt mollis nec et quam. Proin lobortis sapien vel pharetra viverra. Donec tincidunt non elit eu vestibulum. Quisque eleifend purus eget ex maximus vulputate. Curabitur et metus sit amet sem dictum ullamcorper vehicula sit amet risus. Maecenas lectus erat, molestie vel mollis eu, pretium ac lacus. Vestibulum vel feugiat mauris.'
        },
        {
            title: 'Service Three',
            img: img,
            text: 'Ut eros nisi, tempor et efficitur vel, mattis ullamcorper dolor. Integer eget felis at orci tincidunt mollis nec et quam. Proin lobortis sapien vel pharetra viverra. Donec tincidunt non elit eu vestibulum. Quisque eleifend purus eget ex maximus vulputate. Curabitur et metus sit amet sem dictum ullamcorper vehicula sit amet risus. Maecenas lectus erat, molestie vel mollis eu, pretium ac lacus. Vestibulum vel feugiat mauris.'
        },
    ]

    return (
        <div className="padded_container testimonials">
            {
                services.map((service, index)=> {

                    return (
                        <ServiceCardComponent
                            key={service.title}
                            service={service}
                            isAlt={ (index%2) === 1 }
                        />
                    )
                })
            }
        </div>
    )
}


interface ComponentProps {
    service: any,
    isAlt: boolean,
}
const ServiceCardComponent:React.FC<ComponentProps> = ({ service, isAlt })=> {

    return (
        <div className={
            clsx([
                "testimonials_card",
                {
                    "testimonials_card__alt": isAlt,
                }
            ])
        }>
            <IonGrid>
                <IonRow className={
                        clsx([
                            "testimonials_card__grid",
                            {
                                "testimonials_card__grid__alt": isAlt,
                            }
                        ])
                    }
                >
                    <IonCol sizeXs="12" sizeMd="3" className={
                        clsx([
                            "testimonials_card__avatar__container",
                            {
                                "testimonials_card__avatar__container__alt": isAlt,
                            }
                        ])
                    }>
                        <div className="testimonials_card__avatar">
                            <img
                                src={service.img}
                                className="testimonials_card__avatar__image"
                            />
                        </div>
                    </IonCol>
                    <IonCol sizeXs="12" sizeMd="9">
                        <div className="testimonials_card__content">
                            <IonText>
                                <h4 className="testimonials_card__content__who"> 
                                    {service.title} 
                                </h4>
                            </IonText>
                            <VSpacerComponent space={1} />
                            <IonText>
                                <p className="testimonials_card__content__text">
                                    {service.text}
                                </p>
                            </IonText>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}

export default ServicesComponent
