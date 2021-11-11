import React from "react";
import "../../styles/coolcard.scss";
import cool_img from "../../img/coolcard-img.png";

export const CoolCard = () => {
	return (
		<div className="rows">
			<div className="cols">
				<div className="coolcard coolcard1">
					<img src={cool_img} className="coolcard-img" />
					<div className="coolcard-body">
						<div className="coolcard-title">COOL CARD</div>
						<div className="coolcard-text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magnam dolorum iste.
							consectetur adipisicing elit mag nam dolorum is te.
						</div>
					</div>
				</div>
			</div>
			<div className="cols">
				<div className="coolcard coolcard2">
					<img src={cool_img} className="coolcard-img" />
					<div className="coolcard-body">
						<div className="coolcard-title">COOL CARD</div>
						<div className="coolcard-text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magnam dolorum iste.
							consectetur adipisicing elit mag nam dolorum is te.
						</div>
					</div>
				</div>
			</div>
			<div className="cols">
				<div className="coolcard coolcard3">
					<img src={cool_img} className="coolcard-img" />
					<div className="coolcard-body">
						<div className="coolcard-title">COOL CARD</div>
						<div className="coolcard-text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magnam dolorum iste.
							consectetur adipisicing elit mag nam dolorum is te.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
