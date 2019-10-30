import React from 'react';

import Wrapper from '../Wrapper/Wrapper';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {
        state = {
            error: null
        }
        
        componentDidMount () {
            axios.interceptors.request.use(config => {
                this.setState({error: null});
                return config;
            });
            
            axios.interceptors.response.use(null, err => {
                this.setState({error: err});
                return Promise.reject(err);
            });
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }
        
        render () {
            const errorMessage = this.state.error ? this.state.error.message : 'No error detected';
            return (
                <Wrapper>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler} >
                        {errorMessage}
                    </Modal>
                    <WrappedComponent />
                </Wrapper>
            );
        }
    } 
}

export default withErrorHandler;