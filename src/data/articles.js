import React from "react";

function article_1() {
	return {
		date: "27 May 2023",
		title: "Create a WordPress blog in just 7 easy steps with Azure App Service",
		description:
			"Blogging is one among the latest trends today. There are approximately 600 million blogs spanning across various subjects such as Technology, Lifestyle, Spirituality, Governance and much more today. Another fun fact is that around 43% of the websites in the world run on WordPress, which makes it the go-to option for beginners to have an easy-to-use administration of their blog.",
		keywords: [
			"WordPress",
			"Azure App Service",
			"Jayanth MLSA",
			"Jayanth Kumar",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Hi there, to read the complete article, <a href="https://jayanzth.medium.com/create-a-wordpress-blog-in-just-7-easy-steps-with-azure-app-service-617caecfbec5">click here</a> to redirect to my blog at Medium :)</div>
					<br></br>
					<br></br>
					<img
						src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*YwAjq1ca3mxtFvAELCkpkA.png"
						alt="seo-image"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}


const myArticles = [article_1];

export default myArticles;
