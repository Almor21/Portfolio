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
								Fullstack Web Developer (Present)
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
									Express.js.
								</li>
								<li>
									Built dynamic, accessible, and responsive
									user interfaces with MUI and Tailwind CSS,
									focusing on performance and user experience.
								</li>
								<li>
									Designed and implemented robust RESTful APIs
									using JWT and Passport for secure
									authentication and scalability.
								</li>
								<li>
									Managed PostgreSQL databases with TypeORM
									and Sequelize, and performed direct data
									analysis using raw SQL for insights and
									troubleshooting.
								</li>
							</ul>
						</div>
						<div>
							<h2 className="font-bold text-sm">
								Frontend & Backend Developer - CRM Project
							</h2>
							<h3 className="font-medium text-sm">Freelance</h3>
							<ul>
								<li>
									Designed and developed frontend interfaces
									using React and Next.js, implementing
									accessible and responsive layouts from a
									prototype and consuming API routes to
									retrieve backend information.
								</li>
								<li>
									Built REST API routes with Express.js on the
									backend to access, process, and filter data
									from a database.
								</li>
								<li>
									Analyzed and cleaned data directly in the
									database using SQL, optimizing data access
									and management from the backend.
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
								Barranquilla, Colombia | Jan 2021 - present (10th
								semester).
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
