package REST.opinions;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class OpinionEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer OpinionID;
    private String CardID;
    private String Opinion;

    public Integer getOpinionID() {
        return OpinionID;
    }

    public void setOpinionID(Integer opinionID) {
        OpinionID = opinionID;
    }

    public String getCardID() {
        return CardID;
    }

    public void setCardID(String cardID) {
        CardID = cardID;
    }

    public String getOpinion() {
        return Opinion;
    }

    public void setOpinion(String opinion) {
        Opinion = opinion;
    }
}
