import React from 'react';

import { IonSegment, IonSegmentButton, IonLabel, SegmentChangeEventDetail } from '@ionic/react';

import styles from './AuthToggleSegment.module.css';

type Props = {
  onChange?: (e: CustomEvent<SegmentChangeEventDetail>) => void;
  value: 'SignIn' | 'SignUp';
};

const AuthToggleSegment = ({ onChange, value }: Props) => {
  return (
    <div>
      <IonSegment onIonChange={onChange} value={value} mode='md'>
        <IonSegmentButton value='SignIn' className={`h-1 normal-case font-Inter mx-3 ${styles.noRipple}`}>
          <IonLabel className='mb-0'>Sign In</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value='SignUp' className={`h-1 normal-case font-Inter mx-3 ${styles.noRipple}`}>
          <IonLabel className='mb-0'>Sign Up</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </div>
  );
};

export default AuthToggleSegment;
