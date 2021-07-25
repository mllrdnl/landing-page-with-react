import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="fs-1">A Warm Welcome!</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
				consequat urna condimentum enim facilisis, id imperdiet quam
				volutpat. Nullam vitae elit suscipit, vehicula nibh quis,
				ullamcorper lacus. Interdum et malesuada fames ac ante ipsum
				primis in faucibus. Nunc dui enim, porta nec tempor quis,
				malesuada et augue.{" "}
			</p>
			<button className="btn btn-primary btn-lg" type="button">
				Call to Action!
			</button>
		</div>
	);
}
