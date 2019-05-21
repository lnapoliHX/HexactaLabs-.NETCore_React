import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import Spinner from '../../common/loading/spinner';
import LoginForm from '../presentational/Login'
//import Tracker from '../presentational/Tracker';

import { login, signup } from '../index';

const Spinner = (props) => {
    return <React.Fragment>{props.children}</React.Fragment>
}

class LoginPage extends React.Component {

    render() {
        const { credentials, loading, errorMessage, login, signup } = this.props;
        return <Spinner loading={loading}>
            <LoginForm
                errorMessage={errorMessage}
                onSubmit={(values) => values.button == 'login' ? login(values) : signup(values)}
                initialValues={credentials} />
        </Spinner>
    }
}

const mapStateToProps = (state) => {
    return ({
        credentials: { username: '', password: '' },
        loading: state.auth.loading,
        errorMessage: state.auth.errorMessage
    });
};

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ login, signup }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);