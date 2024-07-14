import React from 'react';
import Image from 'next/image';
import Section from '@/components/about/Section';
import MoveBackground from '@/components/MoveBackground';
import DivTransition from '@/components/DivTransition';

function AboutPage() {
	return (
		<DivTransition>
			<MoveBackground createDiv width="50%">
				<div className="justify-self-end flex flex-col items-center text-white">
					<div className="p-1 border-2 border-[white_transparent_white_white] rounded-full transition-all duration-500 group hover:-rotate-180">
						<div className="p-1 border-2 border-[white_white_white_transparent] rounded-full overflow-hidden transition-all duration-500 group-hover:rotate-[360deg]">
							<div className="relative h-36 w-36">
								<Image
									src={'/VoidPhoto.jpeg'}
									alt="Profile image"
									fill={true}
									className="rounded-full filter grayscale transition-all duration-500 group-hover:-rotate-180 group-hover:grayscale-0"
								/>
							</div>
						</div>
					</div>
					<p className="my-8 px-20 text-justify">
						Edinson Noriega, I am 20 years old and I am a{' '}
						<span className="font-bold">self-taught</span>,
						<span className="font-bold"> active</span> and{' '}
						<span className="font-bold">creative</span> person. I
						enjoy learning and exploring new skills constantly.
						<br />
						<br />
						Currently, I am a{' '}
						<span className="font-bold">
							Systems Engineering
						</span>{' '}
						student and{' '}
						<span className="font-bold">Frontend developer</span>,
						in the process of becoming a Fullstack developer. I have
						solid knowledge in both{' '}
						<span className="font-bold">Frontend</span> and{' '}
						<span className="font-bold">Backend</span>, although I&apos;m
						more inclined towards frontend.
					</p>
				</div>
				<div className="justify-self-start px-12 text-xs">
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
								process for the development of events
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
