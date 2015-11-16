package brecho.com.vo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "products_has_baskets")
public class ProductBasketVO {

	@Column(name = "products_id")
	public ProductVO product;

	@Column(name = "baskets_id")
	public BasketVO basket;

	public ProductVO getProduct() {
		return product;
	}

	public void setProduct(ProductVO product) {
		this.product = product;
	}

	public BasketVO getBasket() {
		return basket;
	}

	public void setBasket(BasketVO basket) {
		this.basket = basket;
	}

}
