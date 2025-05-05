"use client";

import React from "react";
import { CalloutHeader } from "@brianwhaley/pixelated-components";
import { BuzzwordBingo } from "@brianwhaley/pixelated-components";

export default function BuzzWordBingo () {
	return (
		<section id="customs-section">
			<div className="section-container">
				<CalloutHeader title="Buzzword Bingo" />
				<BuzzwordBingo />
				<br /><br />
				<CalloutHeader title="Instructions : " />
				<div>
				According to <a href="https://en.wikipedia.org/wiki/Buzzword_bingo" target="_blank">Wikipedia</a> : 
					<blockquote cite="https://en.wikipedia.org/wiki/Buzzword_bingo">
						<p>
							Buzzword bingo, also known as bullshit bingo, is a bingo-style game 
							where participants prepare bingo cards with buzzwords and tick them 
							off when they are uttered during an event, such as a meeting or speech. 
							The goal of the game is to tick off a predetermined number of words 
							in a row and then signal bingo to other players.
						</p>
					</blockquote>
				</div>
			</div>
		</section>
	);
}