"use client";

import React from "react";
import { CalloutSmall } from "@brianwhaley/pixelated-components";

export default function Social() {
	return (
		<div className="section-container">
			<div className="rowfix-8col">
				<div className="grid-s1-e4">
					<div className="rowfix-4col">
						<div className="gridItem"><CalloutSmall shape="squircle" url="https://www.facebook.com/palmettoepoxy/" img="/images/logos/facebook-logo.png" alt="Facebook" title={""} content={""} /></div>
						<div className="gridItem"><CalloutSmall shape="squircle" url="https://www.instagram.com/palmetto_epoxy/" img="/images/logos/instagram-logo.jpg" alt="Instagram" title={""} content={""} /></div>
						<div className="gridItem"><CalloutSmall shape="squircle" url="https://nextdoor.com/pages/palmetto-epoxy-bluffton-sc/" img="/images/logos/nextdoor-logo.png" alt="Nextdoor" title={""} content={""} /></div>
						<div className="gridItem"><CalloutSmall shape="squircle" url="https://bni-sclowcountry.com/en-US/memberdetails?encryptedMemberId=nF5nozAX3%2BzPl0hTaNt4zQ%3D%3D" img="/images/logos/bni-logo.png" alt="BNI" title={""} content={""} /></div>
					</div>
				</div>
				<div className="grid-s1-e4">
				</div>
			</div>
		</div>
	);
}
