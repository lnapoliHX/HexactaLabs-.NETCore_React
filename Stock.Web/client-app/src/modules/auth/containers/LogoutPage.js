import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goBack } from 'connected-react-router';
import Spinner from '../../../components/loading/spinner';

import { logout } from '../index';
import Logout from '../presentational/Logout'

class LogoutPage extends React.Component {

    componentDidMount() {

    }

    render() {
        const { logout, goBack } = this.props;
        return (
            <Logout
                confirm={() => logout()}
                cancel={() => goBack()} />
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        loading: state.auth.loading,
    });
};

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ logout, goBack }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);