function userVO() {
	this.id = null;
	this.name = "";
	this.password = "";
	this.email = "";
	this.gender = "";
};

function categoriesVO() {
	this.id = null;
	this.name = "";
};

function productsVO() {
	this.id = null;
	this.description = "";
	this.price = null;
	this.categories = categoriesVO();
};

function productsBasketsVO() {
	this.product = productsVO();
	this.basket = basketsVO();
};

function attachmentsVO() {
	this.id = null;
	this.filename= "";
	this.products = productsVO();
};
