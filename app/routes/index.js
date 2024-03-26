import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';


// ----------- Layout Imports ---------------
import { DefaultNavbar } from './../layout/components/DefaultNavbar';
import { DefaultSidebar } from './../layout/components/DefaultSidebar';

import { SidebarASidebar } from './../layout/components/SidebarASidebar';

import Wizard from './Forms/Wizard';
import { ContestWizard } from './Contest/ContestWizard/ContestWizard';
import { TestWizard } from './Test/TestWizard/TestWizard';
import {QuestionBankWizard} from "./Question Bank/QuestionBankWizard/QuestionBankWizard"
import AllContest from './Contest/BasicContest/Components/ListingPage/AllContest';

import ComingSoon from './Pages/ComingSoon';
import Confirmation from './Pages/Confirmation';
import Danger from './Pages/Danger';
import Error404 from './Pages/Error404';
import ForgotPassword from './Pages/ForgotPassword';
import LockScreen from './Pages/LockScreen';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Success from './Pages/Success';
import Timeline from './Pages/Timeline';
import QuestionBank from './Question Bank/QuestionBank';



//------ Route Definitions --------

export const RoutedContent = () => {
    return (
        <Switch>
            <Redirect from="/" to="/survey" exact />

            <Route component={Wizard} path="/survey" />

            <Route component={AllContest} path="/all-contest" />
            <Route component={ContestWizard} path="/create-contest" />

            <Route component={TestWizard} path="/test" />

            {/* <Route component={QuestionBankWizard} path="/question-bank"/> */}

            {/* Question Bank */}
            <Route component={QuestionBankWizard} path="/create-test" />
            <Route component={QuestionBank} path="/question-bank" />

            

            {/* Pages Routes */}

            <Route component={ ComingSoon } path="/pages/coming-soon" />
            <Route component={ Confirmation } path="/pages/confirmation" />
            <Route component={ Danger } path="/pages/danger" />
            <Route component={ Error404 } path="/pages/error-404" />
            <Route component={ ForgotPassword } path="/pages/forgot-password" />
            <Route component={ LockScreen } path="/pages/lock-screen" />
            <Route component={ Login } path="/pages/login" />
            <Route component={ Register } path="/pages/register" />
            <Route component={ Success } path="/pages/success" />
            <Route component={ Timeline } path="/pages/timeline" />


            { /*    404    */}
            <Redirect to="/pages/error-404" />
        </Switch>
    );
};

//------ Custom Layout Parts --------
export const RoutedNavbars = () => (
    <Switch>
        <Route
            component={DefaultNavbar}
        />
    </Switch>
);

export const RoutedSidebars = () => (
    <Switch>
        { /* Other Sidebars: */}
        <Route
            component={SidebarASidebar}
            path="/layouts/sidebar-a"
        />
        { /* Default Sidebar: */}
        <Route
            component={DefaultSidebar}
        />
    </Switch>
);
