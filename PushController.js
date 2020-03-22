import React, { Component } from 'react';
var PushNotification = require('react-native-push-notification');

class PushController extends Component {
    componentDidMount() {
        PushNotification.configure({
            onRegister: function (token) {
                // Token: dbQMAfhLaUU:APA91bEWxq3za3wzeSXW_831W6m943bkN8vLsHbw-9eiKFOrQcURKIA6O8l-RCadkr8IeQmxdQmDtmQ6bQAOhdpSFUv4645aj454_15KjX2UWeh37K1l33hYKr4QKEGrf5QYrxK1MHFk
                console.log(token);
            },
            onNotification: function (notification) {
                console.log(notification);
                // IOS
                // notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            senderID: '351538076507',
            // IOS
            // permissions: {
            //     alert: true,
            //     badge: true,
            //     sound: true
            // },
            popInitialNotification: true,
            requestPermissions: true
        });
    }

    render() {
        return null;
    }
}

export default PushController;