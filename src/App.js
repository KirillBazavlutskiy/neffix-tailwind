import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';

import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Installation from './components/Installation/Installation';
import Main from './components/Main/Main';
import MoviesPage from './components/MoviesPage/MoviesPage';
import Registration from './components/Registration/Registration';

const App = props => {
	return (
		<BrowserRouter>
			<div className={styles.wrapper}>
				<Header />
				<Routes>
					<Route path='/registration' element={<Registration />} />
					<Route
						path='/main'
						element={<Main state={props.state.aboutUs.mainPage} />}
					/>
					<Route
						path='/about'
						element={<AboutUs info={props.state.aboutUs.infoPage} />}
					/>
					<Route
						path='/movies'
						element={<MoviesPage movies={props.state.moviesPage.movies} />}
					/>
					<Route path='/installation' element={<Installation />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
