package brecho.com.vo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "products_has_baskets")
public class ProductsBasketsVO {

	@Column(name = "products_id")
	public ProductsVO product;

	@Column(name = "baskets_id")
	public BasketsVO basket;

	public ProductsVO getProduct() {
		return product;
	}

	public void setProduct(ProductsVO product) {
		this.product = product;
	}

	public BasketsVO getBasket() {
		return basket;
	}

	public void setBasket(BasketsVO basket) {
		this.basket = basket;
	}

}
