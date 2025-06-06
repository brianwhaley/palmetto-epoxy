"use client";

import React from "react";
import ContactCTA from "@/app/elements/contact";
import PageTitle from "@/app/elements/pageTitle";
import { Callout } from "@brianwhaley/pixelated-components";

export default function About() {
	return (
		<>
			<PageTitle title="About Us" />
		
			<section className="" id="aboutus-section">
				<div className="section-container">
					<div className="row-1col ">
						<div className="gridItem ">
							<Callout
								title="About Palmetto Epoxy"
								img='/images/dennis-and-martha-aberle.jpg'
								alt="Dennis and Martha Aberle of Palmetto Epoxy" 
								subtitle='Our team is made up of the dynamic duo of Dennis and Martha Aberle, 
									and together, we&#39;re committed to making sure our customers are always satisfied. 
									We believe that the key to great flooring is all about the details, 
									and we don&#39;t cut corners when it comes to our installations. 
									We&#39;re all about quality products, meticulous workmanship, 
									and unmatched customer service.'
								content=''
								layout='horizontal' 
								shape='square' />
						</div>
					</div>

				</div>
			</section>

			<section className="section-bluechip" id="contact-section">
				<ContactCTA />
			</section>
		</>
	);
}
