# Late Night Deals Notification

This project consists of React components designed to handle late night deals notifications.
# Components

# Latenight

The Latenight component displays a button to notify the user about late night deals. When clicked, it triggers the display of the LateN component.

# LateN

The LateN component allows the user to input their email and select a date for receiving late night deal notifications. It includes an input field for email, a date picker for selecting the notification date, and a button to confirm the notification request. Additionally, there's a close button to dismiss the notification window. 


# Notify

The Notify component confirms to the user that a reminder will be sent to them on the selected date.


# Usage

To use these components in your React application, follow these steps:

1. Import the necessary components into your application:

javascript

import Latenight from './Latenight';
import LateN from './LateN';
import Notify from './Notify';

2. Place the components in your JSX where needed:

javascript

<Latenight />
<Notify />

# Features

    -Allows users to request notifications for late night deals.
    -Provides a user-friendly interface for inputting email and selecting notification dates.
    -Confirms notification requests with a reminder message.
    -Includes a close button to dismiss the notification window.

# Installation

To install the project dependencies, run:

bash

npm install

# Running the Project

To run the project locally, execute:

bash

npm start

# Author

This project was developed by sudosantos. You can find more of my work on GitHub.