package REST.opinions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RESTController {
    @Autowired
    private OpinionsRepository opinionsRepository;

    @CrossOrigin(origins = "*")
    @GetMapping("/")
    @ResponseBody
    public String helloREST(){
        return "hello from rest";
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/{cardID}")
    @ResponseBody
    public String endpoint(@PathVariable String cardID){
        return opinionsRepository.findByCardID(cardID).toString();
    }
}
