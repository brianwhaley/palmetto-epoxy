export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import type { MetadataRoute } from 'next';
import { generateSitemap, type SitemapConfig, getOriginFromNextHeaders } from "@pixelated-tech/components/server";
import { getFullPixelatedConfig } from "@pixelated-tech/components/server";
import myRoutes from "@/app/data/routes.json";

const config = getFullPixelatedConfig();
const contentfulApiProps = {
	base_url: config.contentful?.base_url ?? "",
	space_id: config.contentful?.space_id ?? "",
	environment: config.contentful?.environment ?? "",
	delivery_access_token: config.contentful?.delivery_access_token ?? "",
};
const wordpressProps = {
	site: config.wordpress?.site ?? "blog.palmetto-epoxy.com",
};

export default async function SiteMapXML(): Promise<MetadataRoute.Sitemap> {
	const origin = await getOriginFromNextHeaders();
	
	const config: SitemapConfig = {
		routes: myRoutes.routes,
		createPageURLs: true,
		createImageURLsFromJSON: true,

		contentful: contentfulApiProps,
		createContentfulURLs: true,

		wordpress: wordpressProps,
		createWordPressURLs: true,
		createWordPressImageURLs: true,
	};
	const sitemap = await generateSitemap(config, origin);
	return sitemap;
}