inlets = 1;
outlets = 1; // 0 = id and messages to live.object, 1 = info to fades, 2 = info to delays, 3 = info

// LOGGING

function log() {
	var out = "";
	for(var i=0,len=arguments.length; i<len; i++) {
		var message = arguments[i];
		if(message && message.toString) {
			var s = message.toString();
			if(s.indexOf("[object ") >= 0) {
				s = JSON.stringify(message);
				}
			out = s;
		}
		else if(message === null) {
			out = "<null>";
		}
		else {
			out = message;
		}
		post(out);
	}
	post("\n");
}

// INITIALIZATION


function init() {
	log("___________________________________________________");
	log("Loaded stripname.js:", new Date);
}


function anything()
{
	var a = arrayfromargs(messagename, arguments);
	var name = "";
	for (var i=0; i<a.length; i++) {
		var word = a[i].toString().replace(/\W/g, "_").replace(/\s/g, "_");
		name += word;
	};
	if (name[0]=="_") return;
	outlet(0, name);
	return;
}










