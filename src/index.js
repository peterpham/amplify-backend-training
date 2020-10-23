import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Amplify from "aws-amplify";

Amplify.configure({
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:rfrrrrrr-2b99-45cc-b392-295193674820",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_B3RGgMjoM",
    "aws_user_pools_web_client_id": "ddddddddfddfdf",
    "oauth": {},
    "aws_appsync_graphqlEndpoint": "https://rrrrrr.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS"
};);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
