import React from 'react';

import AppHeader from '../components/common/home/header';
import AppFooter from '../components/common/home/footer';
import AppSource from '../components/home/source';
import Hero from '../components/home/hero';
import AppWhoWeAre from '../components/home/whoweare';
import AppOurGoal from '../components/home/ourgoal';
import AppNutshell from '../components/home/nutshell';
import AppTakeOwner from '../components/home/takeowner';
import AppOurTeam from '../components/home/ourteam';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const App = () => {
	return (
		<Layout className='mainLayout'>
			<Header className='homeHeader'>
				<AppHeader />
			</Header>
			<Content>
				<Hero />
			</Content>
			<Content>
				<AppWhoWeAre />
			</Content>
			<Content>
				<AppOurGoal />
			</Content>
			<Content>
				<AppNutshell />
			</Content>
			<Content>
				<AppTakeOwner />
			</Content>
			<Content>
				<AppOurTeam />
			</Content>
			<Content>
				<AppSource />
			</Content>
			<Footer>
				<AppFooter />
			</Footer>
		</Layout>
	);
};
export default App;
