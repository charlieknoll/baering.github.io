function Earthquake(data) {
	this.occuredAt = new Date(data.t).getTime(); // used as a key
	this.latitude = parseFloat(data.lat);
	this.longitude = parseFloat(data.lon);
	this.depth = parseFloat(data.dep);
	this.size = parseFloat(data.s);
	this.verified = true; //data.q === 99;

	var humanReadable = "";
	humanReadable += data.dL + " ";
	humanReadable += data.dD + " ";
	humanReadable += data.dR + " ";
	this.humanReadableLocation = humanReadable;

	this.quality = parseInt(data.q);
}

// Checking if gps coordinates are near Bardarbunga
Earthquake.prototype.isFromBardarbunga = function () {
	if (this.latitude >= 64.35 && this.latitude <= 65.2) {
		if (this.longitude >= -18 && this.longitude <= -16) {
			return true;
		}
	}
	return false;
};

Earthquake.prototype.color = function (now) {
	var diff = now - this.occuredAt;
	var hours = diff / (60 * 60 * 1000);
	var opacity = 0.75;

	if (hours <= 4) {
		return "rgba(255,0,0," + opacity + ")";
	}
	else if (hours <= 12) {
		return "rgba(255, 102, 0," + opacity + ")";
	}
	else if (hours <= 24) {
		return "rgba(255, 255, 0," + opacity + ")";
	}
	else if (hours <= 36) {
		return "rgba(51, 102, 204," + opacity + ")";
	}
	else {
		return "rgba(0, 0, 102," + opacity + ")";
	}
};

Earthquake.prototype.colorHex = function (now) {
	var diff = now - this.occuredAt;
	var hours = diff / (60 * 60 * 1000);

	if (hours <= 4) {
		return 0xff0000;
	}
	else if (hours <= 12) {
		return 0xff6600;
	}
	else if (hours <= 24) {
		return 0xffff00;
	}
	else if (hours <= 36) {
		return 0x3366cc;
	}
	else {
		return 0x0000ff;
	}
}