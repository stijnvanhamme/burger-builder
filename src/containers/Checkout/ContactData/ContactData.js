import React from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from './ContactData.module.css';

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        
        this.setState({loading: true});

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Stijn Van Hamme',
                address: {
                    street: 'Teststreet 1',
                    postalCode: '1234',
                    country: 'Belgium'
                },
                email: 'test@test.com',
            },
            deliveryMethod: 'FAST'
        };
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({loading: false, purchasing: false});
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false, purchasing: false});
            });
    }

    render() {
        let form = (
            <div className={classes.ContactData}>
                <h4>Enter your contact details</h4>
                <form>
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="email" name="email" placeholder="Your email address" />
                    <input type="text" name="street" placeholder="Your street" />
                    <input type="text" name="postalCode" placeholder="Your postal code" />
                    <Button buttonType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
        if(this.state.loading) {
            form = <Spinner />
        }
        return form;
    }
}

export default ContactData;