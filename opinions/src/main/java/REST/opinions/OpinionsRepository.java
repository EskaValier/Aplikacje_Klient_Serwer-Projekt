package REST.opinions;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OpinionsRepository extends JpaRepository<OpinionEntity, Integer> {

    @Query(value="select oe from OpinionEntity oe where oe.CardID = ?1")
    List<OpinionEntity> findByCardID(String id);
}
