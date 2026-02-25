import HeaderContainer from "@/components/Card/HeaderContainer";
import CardContainer from "@/components/Card/CardContainer";
import BodyContainer from "@/components/Card/BodyContainer";

export default function CollectionCard({collection}) {
    return (
        <CardContainer
            color={color}
        >
            <HeaderContainer
                color={collection.color}
                headline={collection.name}
            />
            <BodyContainer>

            </BodyContainer>
        </CardContainer>
    );
}