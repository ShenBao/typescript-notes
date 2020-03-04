# react

## 接口数据  interface

```ts
// /interface/employee.ts

export interface EmployeeRequest {
    name: string;
    departmentId: number | undefined;
}

interface EmployeeInfo {
    id: number;
    key: number;
    name: string;
    department: string;
    hiredate: string;
    level: string;
}

export type EmployeeResponse = EmployeeInfo[] | undefined
```

```ts
import { EmployeeRequest, EmployeeResponse } from '../../interface/employee';

class QueryForm extends Component<Props, EmployeeRequest> {
    state: EmployeeRequest = {
        name: '',
        departmentId: undefined
    }
    handleSubmit = () => {
        this.queryEmployee(this.state);
    }
    componentDidMount() {
        this.queryEmployee(this.state);
    }
    queryEmployee(param: EmployeeRequest) {
        get(GET_EMPLOYEE_URL, param).then(res => {
            this.props.onDataChange(res.data);
        });
    }
    render() {
        return (
            <Form layout="inline">
                //  ...
            </Form>
        )
    }
}
```

## 事件

```ts
handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
        name: e.currentTarget.value
    });
}
```

## http-server mack及配置

```js
// setupProxy.js

const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api/**/*.action', {
        target: 'http://localhost:4000',
        pathRewrite(path) {
            return path.replace('/api', '/').replace('.action', '.json');
        }
    }));
};
```

## redux 与类型

安装依赖

```bash
npm i -S redux react-redux redux-thunk
```

index.tsx
```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Root from './routers';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.querySelectorAll('.app')[0]
);
```

redux/store.ts

```ts
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk)
    )
);

export default store;
```

redux/rootReducer.ts

```ts
import { combineReducers } from 'redux';

import employee from './employee';

const reducers = {
    employee
};

export default combineReducers(reducers);
```

redux/employee/index.tsx
```ts
import { Dispatch } from 'redux';
import _ from 'lodash';

import { get, post } from '../../utils/request';
import { department, level } from '../../constants/options';

import {
    GET_EMPLOYEE_URL,
    CREATE_EMPLOYEE_URL,
    DELETE_EMPLOYEE_URL,
    UPDATE_EMPLOYEE_URL
} from '../../constants/urls';

import {
    GET_EMPLOYEE,
    CREATE_EMPLOYEE,
    DELETE_EMPLOYEE,
    UPDATE_EMPLOYEE
} from '../../constants/actions';

import {
    EmployeeInfo,
    EmployeeRequest,
    EmployeeResponse,
    CreateRequest,
    DeleteRequest,
    UpdateRequest
} from '../../interface/employee';

type State = Readonly<{
    employeeList: EmployeeResponse
}>

type Action = {
    type: string;
    payload: any;
}

const initialState: State = {
    employeeList: undefined
}

export function getEmployee(param: EmployeeRequest, callback: () => void) {
    return (dispatch: Dispatch) => {
        get(GET_EMPLOYEE_URL, param).then(res => {
            dispatch({
                type: GET_EMPLOYEE,
                payload: res.data
            });
            callback();
        });
    }
}

export function createEmployee(param: CreateRequest, callback: () => void) {
    return (dispatch: Dispatch) => {
        post(CREATE_EMPLOYEE_URL, param).then(res => {
            dispatch({
                type: CREATE_EMPLOYEE,
                payload: {
                    name: param.name,
                    department: department[param.departmentId],
                    departmentId: param.departmentId,
                    hiredate: param.hiredate,
                    level: level[param.levelId],
                    levelId: param.levelId,
                    ...res.data
                }
            });
            callback();
        });
    }
}

export function deleteEmployee(param: DeleteRequest) {
    return (dispatch: Dispatch) => {
        post(DELETE_EMPLOYEE_URL, param).then(res => {
            dispatch({
                type: DELETE_EMPLOYEE,
                payload: param.id
            })
        });
    }
}

export function updateEmployee(param: UpdateRequest, callback: () => void) {
    return (dispatch: Dispatch) => {
        post(UPDATE_EMPLOYEE_URL, param).then(res => {
            dispatch({
                type: UPDATE_EMPLOYEE,
                payload: param
            });
            callback();
        });
    }
}

export default function(state = initialState, action: Action) {
    switch (action.type) {
        case GET_EMPLOYEE:
            return {
                ...state,
                employeeList: action.payload
            }
        case CREATE_EMPLOYEE:
            let newList = [action.payload, ...(state.employeeList as EmployeeInfo[])]
            return {
                ...state,
                employeeList: newList
            }
        case DELETE_EMPLOYEE:
            let reducedList = [...(state.employeeList as EmployeeInfo[])];
            _.remove(reducedList, (item: EmployeeInfo) => {
                return item.id === action.payload
            });
            return {
                ...state,
                employeeList: reducedList
            }
        case UPDATE_EMPLOYEE:
            let updatedList = [...(state.employeeList as EmployeeInfo[])];
            let item: UpdateRequest = action.payload;
            let index = _.findIndex(updatedList, {
                id: item.id
            });
            updatedList[index] = {
                id: item.id,
                key: item.id,
                name: item.name,
                department: department[item.departmentId],
                departmentId: item.departmentId,
                hiredate: item.hiredate,
                level: level[item.levelId],
                levelId: item.levelId
            }
            return {
                ...state,
                employeeList: updatedList
            }
        default:
            return state
    }
}
```

components/employee/index.tsx

```ts
// ...

const mapStateToProps = (state: any) => ({
    employeeList: state.employee.employeeList
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onGetEmployee: getEmployee,
    onCreateEmployee: createEmployee,
    onDeleteEmployee: deleteEmployee,
    onUpdateEmployee: updateEmployee
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Employee);
```

## node 下使用 ts

参考 ts-express 项目
