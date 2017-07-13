/**
 * Created by fuhuixiang on 2016-11-29.
 */
"use strict";
import React from 'react';
import {WhiteSpace} from 'antd-mobile';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <WhiteSpace size="lg" />
                hello, world!
            </div>
        )
    }
}
