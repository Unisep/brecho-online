package brecho.com.vo;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "baskets")
public class BasketsVO {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "total")
	private Double total;

	@Column(name = "ship_date")
	private Date ship_date;

	@Column(name = "lessee_id")
	private Integer lessee_id;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

	public Date getShip_date() {
		return ship_date;
	}

	public void setShip_date(Date ship_date) {
		this.ship_date = ship_date;
	}

	public Integer getLessee_id() {
		return lessee_id;
	}

	public void setLessee_id(Integer lessee_id) {
		this.lessee_id = lessee_id;
	}

}
