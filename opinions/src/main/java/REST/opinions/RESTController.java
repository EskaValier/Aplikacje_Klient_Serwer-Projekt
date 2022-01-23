package REST.opinions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RESTController {
    @Autowired
    private OpinionsRepository opinionsRepository;

    @GetMapping("/")
    @ResponseBody
    public String helloREST(){
        return "hello from rest";
    }

    @GetMapping("/{cardID}")
    @ResponseBody
    public Iterable<OpinionEntity> endpoint(@PathVariable String cardID){
        return opinionsRepository.findByCardID(cardID);
    }
}
