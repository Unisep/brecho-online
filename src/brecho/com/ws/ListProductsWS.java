package brecho.com.ws;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.edu.unisep.hibernate.GenericDAO;
import brecho.com.vo.ProductVO;

@Path("/listProducts")
public class ListProductsWS {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<ProductVO> listProducts() {

		GenericDAO<ProductVO> dao = new GenericDAO<ProductVO>();

		List<ProductVO> list = dao.listar(ProductVO.class);

		return list;
	}
}
