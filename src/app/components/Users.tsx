import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../store/ducks/users/actions';
import { AppState } from '../store';
import { User } from '../store/ducks/users/types';

interface UsersProps {
    users: User[];
    findAll: () => void;
}

class Users extends Component<UsersProps, any> {
    componentDidMount() {
        const { findAll } = this.props;
        findAll();
    }

    render() {
        const { users } = this.props;
        return (
            <ul>
                {users.map((user: User) => (
                    <li style={{ textAlign: 'left' }} key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    users: state.users.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);
