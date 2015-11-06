package brecho.com.vo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "products_has_baskets")
public class productsBasketsVO {

	@Column(name = "products_id")
	public productsVO product;

	@Column(name = "baskets_id")
	public basketsVO basket;

	public productsVO getProduct() {
		return product;
	}

	public void setProduct(productsVO product) {
		this.product = product;
	}

	public basketsVO getBasket() {
		return basket;
	}

	public void setBasket(basketsVO basket) {
		this.basket = basket;
	}

}
