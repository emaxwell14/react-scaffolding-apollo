import React, { Component } from 'react';
import { Button, Input, FormGroup, Label } from 'reactstrap';
import autobind from 'autobind-decorator';
import { genericProps } from '../../../common/propTypes';
import query from '../../../common/graphql/User/UserLoginQuery.graphql';

const RenderField = props => (
    <FormGroup>
        <Label for={props.name}>{props.name}</Label>
        <Input
            {...props}
        />
    </FormGroup>
);

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            error: null,
        };
    }

    @autobind
    setValue(e) {
        this.setState({
            error: null,
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value,
            },
        });
    }

    @autobind
    formSubmit(clickEvent) {
        const { client, history: { push } } = this.props;
        const { data: { userName, password } } = this.state;

        clickEvent.preventDefault();

        client.query({
            query,
            variables: { userName, password },
        }).then(() => {
            sessionStorage.setItem('USER_VALID', 'true'); // eslint-disable-line no-undef
            push('/tasks/');
        })
            .catch((error) => {
                sessionStorage.removeItem('USER_VALID'); // eslint-disable-line no-undef
                this.setState({ error: error.message });
            });
    }

    render() {
        const { data: { userName, password }, error } = this.state;
        return (
            <form onSubmit={this.formSubmit}>
                <RenderField
                    name="userName"
                    value={userName}
                    onChange={this.setValue}
                />
                <RenderField
                    name="password"
                    value={password}
                    onChange={this.setValue}
                />
                {error && <p>{error}</p>}
                <Button color="success" type="submit">Login</Button>
            </form>
        );
    }
}

HomeComponent.propTypes = {
    ...genericProps,
};
export default HomeComponent;
