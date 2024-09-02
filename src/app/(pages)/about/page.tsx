import React from 'react';
import Section from '@/components/about/Section';
import MoveBackground from '@/components/MoveBackground';
import DivTransition from '@/components/DivTransition';
import Presentation from '@/components/about/Presentation';

function AboutPage() {
	return (
		<DivTransition>
			<MoveBackground createDiv className="md:grid-cols-2">
				<Presentation />
				<div className="justify-self-start md:px-16 max-md:pt-8 text-xs flex flex-col gap-2">
					<Section
						title="Activities"
						className="flex flex-col gap-2"
						widthSeparator={1}
					>
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
						<div>
							<h2 className="font-bold text-sm">Board Member</h2>
							<h3 className="font-medium text-sm">
								ACM Uninorte
							</h3>
							<ul>
								<li>
									Involved in the coordination and decision
									making process for the development of
									events.
								</li>
								<li>
									Work with the management team to establish
									clear goals and objectives.
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
								Barranquilla, Colombia | Jan 2021 - present (8th
								semester).
							</p>
						</div>
						<div>
							<h2 className="font-bold text-sm">High School</h2>
							<p>
								<span className="font-bold">
									Institución Educativa San Marcos.{' '}
								</span>{' '}
								San Marcos | Jan 2015 - Nov 2020
							</p>
							<ul>
								<li>
									Outstanding student with excellent grades.
								</li>
								<li>
									Winner of academic competitions within the
									institution.
								</li>
							</ul>
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
