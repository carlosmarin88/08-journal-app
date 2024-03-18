import { render, screen } from "@testing-library/react"
import { LoginPage } from "../../../src/auth/pages/LoginPage"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { MemoryRouter } from "react-router-dom";
import { authSlice } from "../../../src/store/auth";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    // preloadedState: {

    // }
});

describe('Pruebas en el <LoginPage />', () => {

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
});