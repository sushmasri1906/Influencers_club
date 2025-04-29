export type InfluencerType = {
	_id: string;
	_createdAt: string;
	_rev: string;
	_updatedAt: string;
	_type: "influncer"; // Matches the schema name
	name: string;
	image: {
		_type: "image";
		asset: {
			_ref: string;
			_type: "reference";
		};
	};
};
