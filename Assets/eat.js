function OnCollisionEnter(hit : Collision) {
	
	if (hit.gameObject.name == "dot") {
		Destroy(hit.gameObject);
	}
	
}

function OnTriggerEnter (other : Collider) {
		if (other.gameObject.name == "Sphere(Clone)"){
			Destroy(other.gameObject);
		}
}