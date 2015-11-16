package brecho.com.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

import br.edu.unisep.hibernate.GenericDAO;
import br.edu.unisep.hibernate.HibernateSessionFactory;
import brecho.com.vo.ProductVO;

public class ProductDAO extends GenericDAO<ProductVO> {

	public List<ProductVO> list  (Integer idProduct) {
		
		Session session = HibernateSessionFactory.getSession();
		Criteria crit = session.createCriteria(ProductVO.class);
		crit.add(Restrictions.eq("product.id", idProduct));

		List<ProductVO> lista = crit.list();

		return lista;
	}
}
