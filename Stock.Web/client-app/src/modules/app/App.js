import React from 'react';
import { Route } from 'react-router';
import { ToastContainer } from 'react-toastify';

import Layout from '../../components/Layout';
import HomePage from '../home/container/HomePage';
import LoginPage from '../auth/containers/LoginPage';
import ProviderPage from '../providers/list/container/Page';
import LogoutPage from '../auth/containers/LogoutPage';

const Private = props => {
    if (localStorage.getItem('JWT_LOGIN')) {
        return props.children;
    }
    return <LoginPage />
}

export default (props) => (
    <Private>
        <Layout {...props} >
            <Route exact path="/" component={HomePage} />
            <Route path="/provider" component={ProviderPage} />
            <Route path="/logout" component={LogoutPage} /> 
        </Layout>
        <ToastContainer autoClose={2000} />
    </Private>
);
