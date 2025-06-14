"use client";

import React, { useState, useEffect } from "react";
import ContactCTA from "@/app/elements/contact";
import PageTitle from "@/app/elements/pageTitle";
import { Carousel } from "@brianwhaley/pixelated-components";
import type { CarouselCardType } from "@brianwhaley/pixelated-components";
import { getContentfulEntriesByType, getContentfulImagesFromEntries } from "@brianwhaley/pixelated-components";
import "@/app/css/globals.css";

// const imageOrigin = "https://images.palmetto-epoxy.com";

/* Carousel bug conflict with drag and click */

export default function Projects() {

	const [ carouselCards , setCarouselCards ] = useState<CarouselCardType[]>([]);
	
	useEffect(() => {
		async function getCarouselCards() {
			const contentType = "carouselCard"; 
			const typeCards = await getContentfulEntriesByType(contentType); 
			const reviewCards : CarouselCardType[] = [];
			for (const card of typeCards.items) {
				if ( card.sys.contentType.sys.id == contentType ) {
					const images = await getContentfulImagesFromEntries( [card.fields.image], typeCards.includes.Asset);
					reviewCards.push({
						index: card.sys.contentType.sys.id.indexOf("card"),
						cardIndex: reviewCards.length,
						cardLength: typeCards.items.length,
						image: images[0].image,
						imageAlt: images[0].imageAlt,
						headerText: card.fields.title,
						bodyText: card.fields.description,
						link: card.fields.link,
						linkTarget: "_self"
					});
				}
			}
			/* for (const img of reviewCards) {
				img.image = img.image.replace("//images.ctfassets.net", imageOrigin);
			} */
			setCarouselCards(reviewCards);
		}
		getCarouselCards();
	}, []);

	return (
		<>
			<PageTitle title="Projects" />
			
			<section className="" id="projects-section">
				<div className="section-container">
					<Carousel 
						cards={carouselCards} 
						draggable={false} 
						imgFit='contain' />
				</div>
			</section>
            
			<section className="section-bluechip" id="contact-section">
				<ContactCTA />
			</section>
		</>
	);
}
