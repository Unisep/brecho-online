package brecho.com.vo;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "products_has_baskets")
public class ProductBasketVO {

	@OneToOne
	@JoinColumn(name = "products_id")
	public ProductVO product;

	@ManyToOne
	@JoinColumn(name = "baskets_id")
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
