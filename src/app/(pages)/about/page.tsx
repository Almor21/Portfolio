import React from 'react';
import Section from '@/components/about/Section';
import MoveBackground from '@/components/MoveBackground';
import DivTransition from '@/components/DivTransition';
import Presentation from '@/components/about/Presentation';

function AboutPage() {
	return (
		<DivTransition>
			<MoveBackground createDiv className='md:grid-cols-2'>
				<Presentation />
				<div className="justify-self-start md:px-16 max-md:pt-8 text-xs flex flex-col gap-5">
					<Section title="Activities" widthSeparator={1}>
						<span className="font-bold text-sm">
							Private lessons
						</span>
						<br />
						<span className="font-medium text-sm">Freelance</span>
						<br />
						<ul>
							<li>
								Freelance tutor of engineering, mathematics, and
								programming for university students.
							</li>
							<li>
								Private tutoring in math, physics, and
								programming for high school students.
							</li>
						</ul>
						<span className="font-bold text-sm">Board Member</span>
						<br />
						<span className="font-medium text-sm">
							ACM Uninorte
						</span>
						<br />
						<ul>
							<li>
								Involved in the coordination and decision making
								process for the development of events.
							</li>
							<li>
								Work with the management team to establish clear
								goals and objectives.
							</li>
						</ul>
					</Section>
					<Section title="Education" widthSeparator={2}>
						<span className="font-bold text-sm">
							Systems and Computer Engineering
						</span>
						<br />
						<span className="font-bold">
							Universidad del Norte.{' '}
						</span>{' '}
						Barranquilla, Colombia | Jan 2021 - present (8th
						semester).
						<br />
						<br />
						<span className="font-bold text-sm">High School</span>
						<br />
						<span className="font-bold">
							Institución Educativa San Marcos.{' '}
						</span>{' '}
						San Marcos | Jan 2015 - Nov 2020
						<ul>
							<li>Outstanding student with excellent grades.</li>
							<li>
								Winner of academic competitions within the
								institution.
							</li>
						</ul>
					</Section>
					<Section title="Achievements" widthSeparator={3}>
						<span className="font-bold text-sm">
							Generation E Excellence Scholarship - ICFES 2020
							Tests
						</span>
					</Section>
				</div>
			</MoveBackground>
		</DivTransition>
	);
}

export default AboutPage;
