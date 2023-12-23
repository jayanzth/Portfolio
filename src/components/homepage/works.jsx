import React from "react";
import { faBriefcase, faSchool } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faSchool}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./mepco-logo.jpg"
								alt="mepco logo"
								className="work-image"
							/>
							<div className="work-title">Mepco Schlenk Engineering College, Sivakasi</div>
							<div className="work-subtitle">
								B.Tech Information Technology
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>

						<div className="work">
							<img
								src="./vikaasa-logo.jpg"
								alt="vikaasa logo"
								className="work-image"
							/>
							<div className="work-title">Vikaasa School - Heritage Campus, Madurai</div>
							<div className="work-subtitle">
								High School
							</div>
							<div className="work-duration">2009 - 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
