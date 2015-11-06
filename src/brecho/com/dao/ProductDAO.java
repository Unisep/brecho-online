package brecho.com.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

import br.edu.unisep.hibernate.GenericDAO;
import br.edu.unisep.hibernate.HibernateSessionFactory;
import brecho.com.vo.ProductsVO;

public class ProductDAO extends GenericDAO<ProductsVO> {

	public List<ProductsVO> list(Integer idProduct) {
		
		Session session = HibernateSessionFactory.getSession();
		Criteria crit = session.createCriteria(ProductsVO.class);
		crit.add(Restrictions.eq("product.id", idProduct));

		List<ProductsVO> lista = crit.list();

		return lista;
	}
}
