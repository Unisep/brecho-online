package brecho.com.ws;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.edu.unisep.hibernate.GenericDAO;
import brecho.com.vo.ProductsVO;

@Path("/listProducts")
public class ListProductsWS {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<ProductsVO> listing() {

		GenericDAO<ProductsVO> dao = new GenericDAO<ProductsVO>();

		List<ProductsVO> list = dao.listar(ProductsVO.class);

		return list;
	}
}
