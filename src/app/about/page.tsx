import React from 'react';
import Image from 'next/image';
import Title from '@/components/about/Title';
import Separator from '@/components/about/Separator';
import MoveBackground from '@/components/MoveBackground';

function AboutPage() {
	return (
		<MoveBackground createDiv width="50%" className="gap-16">
			<div className="justify-self-end w-1/2 flex flex-col items-center text-white">
				<div className="p-1 border-2 border-[white_transparent_white_white] rounded-full transition-all duration-500 group hover:-rotate-180">
					<div className="p-1 border-2 border-[white_white_white_transparent] rounded-full overflow-hidden transition-all duration-500 group-hover:rotate-[360deg]">
						<div className="relative h-28 w-28">
							<Image
								src={'/VoidPhoto.jpeg'}
								alt="Profile image"
								fill={true}
								className="rounded-full filter grayscale transition-all duration-500 group-hover:-rotate-180 group-hover:grayscale-0"
							/>
						</div>
					</div>
				</div>
				<p className="my-8">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Eius repudiandae esse, maiores unde voluptas cum id et nihil
					laudantium exercitationem aliquam ipsa facere quibusdam
					corporis voluptatem labore accusamus qui quasi?
				</p>
			</div>
			<div className="justify-self-start w-9/12">
				<Title>Activities</Title>
				<Separator size={1} />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Illo, consectetur consequuntur praesentium nulla asperiores
					nihil. Dolores quam quidem debitis aspernatur asperiores
					facilis aliquam mollitia temporibus alias maxime, quae enim
					nobis?
				</p>
				<Title>Education</Title>
				<Separator size={2} />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Totam, necessitatibus? Maiores repellat non deleniti eius
					facere. Perspiciatis quibusdam eaque officia. Nisi soluta
					cum expedita veniam perspiciatis numquam, dolores dolore
					blanditiis!
				</p>
				<Title>Achievements</Title>
				<Separator size={3} />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Quis obcaecati expedita esse inventore sed magni natus,
					earum dolores vitae provident repudiandae quod
					exercitationem, repellendus minus neque velit quo, sunt
					explicabo!
				</p>
			</div>
		</MoveBackground>
	);
}

export default AboutPage;
