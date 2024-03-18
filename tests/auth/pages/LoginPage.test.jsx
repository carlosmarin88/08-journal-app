import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../../src/auth/pages/LoginPage"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { MemoryRouter } from "react-router-dom";
import { authSlice } from "../../../src/store/auth";
import { notAuthenticatedState } from "../../fixtures/authFixtures";


const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoginWithEmailPassword: ({email, password}) => {
        console.log(email, password);
        return () => mockStartLoginWithEmailPassword({email, password});
    },
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => {
        return (fn) => fn();
    },
}))

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState,
    }
});

describe('Pruebas en el <LoginPage />', () => {


    beforeEach(()=>  jest.clearAllMocks());

    test('Debe de mostrar el compenente correctamente', () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        //screen.debug();
        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
    });

    test('Boton de google debe de llamar el startGoogleSignIn', () => {


        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );
        //console.log(store.getState());
        //screen.debug();
        const googleBtn = screen.getByLabelText('google-btn');
        //console.log(googleBtn);
        fireEvent.click(googleBtn);
        expect(mockStartGoogleSignIn).toHaveBeenCalled();
        //console.log(store.getState());
    });

    test('submit debe de llamar startLoginWithEmailPassword', () => { 

        const email = 'carlos@google.com';
        const password = '12345';

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const emailField = screen.getByRole('textbox', {name: 'Correo'});
        fireEvent.change(emailField, {
            target: {name: 'email', value: email}
        });

        const passwordField = screen.getByTestId('password');
        fireEvent.change(passwordField, {
            target: {name: 'password', value: password}
        });

        const loginForm = screen.getByLabelText('submit-form');
        fireEvent.submit(loginForm);

        expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
            email: email,
            password: password,
        });

     });
});