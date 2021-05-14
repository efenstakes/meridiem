import { IonContent, IonPage } from '@ionic/react';


import AppbarComponent from '../components/appbar/appbar.component';
import FooterComponent from '../components/footer/footer.component';
import VSpacerComponent from '../components/v_spacer/v_spacer.component';
import WelcomeComponent from '../components/welcome/welcome.component';
import AboutUsComponent from '../components/about_us/about_us.component'
import MoreWorkWithComponent from '../components/more_work_with/more_work_with.component'
import WorkedWithComponent from '../components/worked_with/worked_with.component';
import TestimonialsComponent from '../components/testimonials/testimonials.component'


import './home.page.scss';
import ServicesComponent from '../components/services/services.component';

const HomePage: React.FC = () => {
  return (
    <IonPage>

      {/* appbar */}
      <AppbarComponent />


      <IonContent fullscreen>
                
        {/* welcome */}
        <WelcomeComponent />
        <VSpacerComponent space={8} />
        

        {/* about us */}
        <AboutUsComponent />
        <VSpacerComponent space={8} />

        {/* worked with who? */}
        <WorkedWithComponent />
        <VSpacerComponent space={8} />

        <MoreWorkWithComponent />
        <VSpacerComponent space={8} />

        {/* services */}
        <ServicesComponent />
        <VSpacerComponent space={8} />
        

        {/* testimonials */}
        {/* <TestimonialsComponent /> */}
        <VSpacerComponent space={10} />

        {/* footer */}
        <FooterComponent />

      </IonContent>
    </IonPage>
  );
};

export default HomePage;
