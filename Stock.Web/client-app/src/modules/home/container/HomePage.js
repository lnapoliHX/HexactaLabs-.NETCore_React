import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { load } from '../index'
import Home from '../presentation/Home'
import Spinner from '../../../components/loading/Spinner'

class HomePage extends React.Component {

    componentDidMount() {
        //TODO: could use "useEffect"
        this.props.load();
    }

    render() {

        return (
            <Spinner loading={this.props.loading}>
                <div class="col-12">
                    <div>
                        <Home />
                    </div>
                </div>
            </Spinner>
        )
    }
}

const mapStateToProps = ({ home }) => {
    return ({
        loading: home.loading
    });
};

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ load }, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
