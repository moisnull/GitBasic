import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

export const routes = [
  { path: '', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent }
];