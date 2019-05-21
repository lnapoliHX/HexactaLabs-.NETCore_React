import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loaded } from '../index'
import Home from '../presentation/Home'

class HomePage extends React.Component {

    componentDidMount() {
        this.props.loaded();
    }

    render() {
        const { loaded } = this.props;

        return (
            <div class="col-12">
               <div>
                    <h5>Header</h5>
               </div>
               <div>
                   <Home />
               </div>
            </div>
        )
    }
}

const mapStateToProps = ({ home }) => {
    return ({
        loading: home.loading
    });
};

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ loaded }, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
