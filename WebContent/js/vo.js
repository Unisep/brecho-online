function UserVO() {
	this.id = null;
	this.name = "";
	this.password = "";
	this.email = "";
	this.gender = "";
};

function CategoryVO() {
	this.id = null;
	this.name = "";
};

function ProductVO() {
	this.id = null;
	this.description = "";
	this.price = null;
	this.category = CategoryVO();
	this.user = UserVO();
};

function ProductBasketVO() {
	this.product = ProductVO();
	this.basket = BasketVO();
};

function AttachmentVO() {
	this.id = null;
	this.filename= "";
	this.product = ProductVO();
};
