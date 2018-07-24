import { Container } from 'unstated';

export default class AuthState extends Container {
  state = {
    loading: false,
    loaded: false,
    authenticated: false,
    token: '',
    error: null,
  };

  login = async () => {
    await this.setState({ loading: true });
    console.log('Yay!');
    await this.setState({ loading: false, authenticated: true, token: 'Logged in yay!' });
  };
}
