import React from 'react';
import { useHistory } from 'react-router';
import Routes from '@/utilities/routes';

import { IonGrid, IonRow, IonButton, SegmentChangeEventDetail } from '@ionic/react';

import AppLogo from '@components/Authentication/AppLogo';
import InputWithLabel from '@/components/InputWithLabel';
import AuthToggleSegment from '@components/Authentication/AuthToggleSegment';
import PageWithGrid from '@/components/PageWithGrid';

const Register = () => {
  const history = useHistory();

  const pageToggleHandler = (e: CustomEvent<SegmentChangeEventDetail>) => {
    if (e.detail.value !== 'SignIn') return;
    history.push(Routes.authentication.login);
  };

  return (
    <PageWithGrid>
      <IonRow className='h-[33%] pb-4 items-end'>
        <AppLogo />
      </IonRow>
      <IonRow className='h-[46%] items-start'>
        <IonGrid className='w-full'>
          <IonRow className='justify-center'>
            <AuthToggleSegment onChange={pageToggleHandler} value='SignUp' />
          </IonRow>
          <IonRow className='px-5 pt-1'>
            <InputWithLabel className='mr-5' type='email' labelText='Email' placeholder='john.doe@gmail.com' />
            <InputWithLabel className='mr-5' type='password' labelText='Password' placeholder='8 characters, 1 capital' />
            <InputWithLabel className='mr-5' type='password' labelText='Confirm Password' placeholder='8 characters, 1 capital' />
          </IonRow>
        </IonGrid>
      </IonRow>
      <IonRow className='h-[21%]'>
        <IonGrid>
          <IonRow className='justify-center'>
            <IonButton mode='ios' className='w-4/5 font-Inter text-xl h-12 font-light'>
              Sign Up
            </IonButton>
          </IonRow>
          <IonRow className='justify-center pt-3'>
            <a className='text-[#9D9FA6] text-sm'>Forgot your password?</a>
          </IonRow>
        </IonGrid>
      </IonRow>
    </PageWithGrid>
  );
};

export default Register;
