//set this in inspector
var paintGunRadius:int;

//squared variables for the painting
var rayLocYSqu:int;
var paintGunRadiusSqu:int;
var addedRadSqu:int;
var finalPaintLoc:int;



function Start () {
	var texture = new Texture2D(128, 128);
	renderer.material.mainTexture = texture;
	
    texture.Apply();
}

//Function that actually paints the object
function Paint (rayLocX, rayLocY) {
	var texture = new Texture2D(128, 128);	
	
	
	for(var y : int = rayLocY + paintGunRadius ; y < paintGunRadius; y++){
		for (var x : int = rayLocX + paintGunRadius ; x < paintGunRadius; x++){
			texture.SetPixel (x, y, Color.black);
		}
	}
	texture.Apply();
}

//point finding function for x
function PaintPointFinder(rayLocY){

	rayLocYSqu = rayLocY * rayLocY;
	paintGunRadiusSqu = paintGunRadius * paintGunRadius;
	addedRadSqu = rayLocYSqu + paintGunRadiusSqu;
	finalPaintLoc = Mathf.Sqrt(addedRadSqu);
	
}

function OnGUI(){
	if (GUI.Button(Rect(10,10,50,50),"click"))
		Paint(10,10);
}