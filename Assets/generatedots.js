#pragma strict

function Start () {

	var dot = GameObject.CreatePrimitive(PrimitiveType.Sphere);
	dot.transform.collider.isTrigger = true;
	
	for (var i = -14; i < 12; ++i) {
		for (var j = 0; j < 29; ++j)
		Instantiate(dot, Vector3(39 + (3.8 * i), 2, 103.5 - (3.9 * j)), Quaternion.identity);
	}
}

function Update () {

}