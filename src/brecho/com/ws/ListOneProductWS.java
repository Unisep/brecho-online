package brecho.com.ws;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import brecho.com.dao.ProductDAO;
import brecho.com.vo.ProductsVO;

@Path("/listOneProduct/{idProduct}")
public class ListOneProductWS {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<ProductsVO> listProducts(@PathParam("idProduct") Integer idProduct) {

		ProductDAO dao = new ProductDAO();

		List<ProductsVO> list = dao.list(idProduct);

		return list;
	}
}
