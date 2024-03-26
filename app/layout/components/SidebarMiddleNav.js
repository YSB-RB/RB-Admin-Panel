import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Survey"
        >
            <SidebarMenu.Item title="Create Survey" to='/survey' exact />
            <SidebarMenu.Item title="All Survey" to='/survey/all-survey' exact />
        </SidebarMenu.Item>


        { /* -------- Contest ---------*/}
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-columns"></i>}
            title="Contest"
            to="/all-contest" exact
        >
            {/* <SidebarMenu.Item title="New Contest" to='/contest' exact />
            <SidebarMenu.Item title="My Contest" to='/contest/my-contest' exact />
            <SidebarMenu.Item title="All Contest" to='/all-contest' exact /> */}
        </SidebarMenu.Item>




        { /* -------- Test ---------*/}
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-columns"></i>}
            title="Test"
            to='/test'
        >

            {/* <SidebarMenu.Item title="Create Question" to='/test/create-question' exact />
            <SidebarMenu.Item title="Add Question" to='/test/add-question' exact /> */}
            {/* 
            <SidebarMenu.Item title="New Test" to='/test' exact />
            <SidebarMenu.Item title="My Test" to='/test/my-test' exact />
            <SidebarMenu.Item title="All Tests" to='/test/all-test' exact /> */}
        </SidebarMenu.Item>


        { /* -------- Question Bank ---------*/}
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-columns"></i>}
            title="Question Bank"
            to="/question-bank" exact
        >
            {/* <SidebarMenu.Item title="Questions" to='/survey' exact /> */}
        </SidebarMenu.Item>


        { /* -------- Feedback ---------*/}
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-columns"></i>}
            title="Feedback"
        >
            {/* <SidebarMenu.Item title="Feedback" to='/survey' exact />
            <SidebarMenu.Item title="My Contest" to='/survey/my-survey' exact />
            <SidebarMenu.Item title="All Contest" to='/survey/all-survey' exact /> */}
        </SidebarMenu.Item>




        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-copy"></i>}
            title="Pages"
        >
            <SidebarMenu.Item title="Register" to="/pages/register" />
            <SidebarMenu.Item title="Login" to="/pages/login" />
            <SidebarMenu.Item title="Forgot Password" to="/pages/forgot-password" />
            <SidebarMenu.Item title="Lock Screen" to="/pages/lock-screen" />
            <SidebarMenu.Item title="Error 404" to="/pages/error-404" />
            <SidebarMenu.Item title="Confirmation" to="/pages/confirmation" />
            <SidebarMenu.Item title="Success" to="/pages/success" />
            <SidebarMenu.Item title="Danger" to="/pages/danger" />
            <SidebarMenu.Item title="Coming Soon" to="/pages/coming-soon" />
            <SidebarMenu.Item title="Timeline" to="/pages/timeline" />
        </SidebarMenu.Item>

    </SidebarMenu >
);
