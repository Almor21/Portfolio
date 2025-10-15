import React from 'react';
import Section from '@/components/about/Section';
import MoveBackground from '@/components/transitions/MoveBackground';
import DivTransition from '@/components/transitions/DivTransition';
import Presentation from '@/components/about/Presentation';
import Link from 'next/link';

function AboutPage() {
	return (
		<DivTransition>
			<MoveBackground createDiv className="md:grid-cols-2">
				<Presentation />
				<div className="justify-self-start md:px-16 max-md:pt-8 text-xs flex flex-col gap-2">
					<Section
						title="Experience"
						className="flex flex-col gap-2"
						widthSeparator={1}
					>
						<div>
							<h2 className="font-bold text-sm">
								Fullstack Web Developer
							</h2>
							<h2 className="font-bold text-xs">
								Feb 2025 - Agu 2025
							</h2>
							<h3 className="font-medium text-sm">
								<Link
									href="https://ombia.co/"
									target="_blank"
									className="underline"
								>
									Ombia S.A.S.
								</Link>
							</h3>
							<ul>
								<li>
									Developed modern web applications using
									TypeScript, Next.js, NestJS, React, and
									Express.js, with responsive UIs built in MUI
									and Tailwind CSS, focused on performance and
									accessibility.
								</li>
								<li>
									Designed and implemented secure, scalable
									RESTful APIs with NestJS, JWT and Passport,
									and managed PostgreSQL databases using
									TypeORM and Sequelize.
								</li>
								<li>
									Deployed Docker containers to set up and
									manage databases in local and testing
									environments, optimizing configuration and
									project deployment.
								</li>
								<li>
									Delivered projects both independently and in
									teams, leading development efforts, managing
									teams, and directly engaging with clients to
									analyze requirements and plan projects.
								</li>
							</ul>
						</div>
						<div>
							<h2 className="font-bold text-sm">
								Frontend & Backend Developer - CRM Project
							</h2>
							<h2 className="font-bold text-xs">
								May 2024 - Sep 2024
							</h2>
							<h3 className="font-medium text-sm">Freelance</h3>
							<ul>
								<li>
									Worked directly with the client to gather
									requirements, propose solutions, and define
									the project scope and planning.
								</li>
								<li>
									Developed responsive and accessible frontend
									interfaces with React and Next.js,
									transforming prototypes into functional
									views and integrating backend APIs.
								</li>
								<li>
									Built REST API routes with Express.js and
									optimized database interactions with SQL
									through data cleaning, analysis, and
									efficient queries.
								</li>
							</ul>
						</div>
						<div>
							<h2 className="font-bold text-sm">
								Private lessons
							</h2>
							<h3 className="font-medium text-sm">Freelance</h3>
							<ul>
								<li>
									Freelance tutor of engineering, mathematics,
									and programming for university students.
								</li>
								<li>
									Private tutoring in math, physics, and
									programming for high school students.
								</li>
							</ul>
						</div>
					</Section>
					<Section
						title="Education"
						className="flex flex-col gap-2"
						widthSeparator={2}
					>
						<div>
							<h2 className="font-bold text-sm">
								Systems and Computer Engineering
							</h2>
							<p>
								<span className="font-bold">
									Universidad del Norte.{' '}
								</span>{' '}
								Barranquilla, Colombia | 2021 - 2025
							</p>
						</div>
					</Section>
					<Section title="Achievements" widthSeparator={3}>
						<p className="font-bold text-sm">
							Generation E Excellence Scholarship - ICFES 2020
							Tests
						</p>
					</Section>
				</div>
			</MoveBackground>
		</DivTransition>
	);
}

export default AboutPage;
