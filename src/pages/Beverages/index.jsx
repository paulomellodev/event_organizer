import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import { useContext } from "react";
import Card from "../../components/Card";
import { BeveragesContext } from "../../providers/Beverages";
import { ButtonContainer, Container, Content } from "./styles";
import { IconButton } from "@material-ui/core";
import { useEffect } from "react";

const Beverages = () => {
  const {
    beverages,
    getBeverages,
    page,
    setPage,
    next,
    previous,
    loading,
    setLoading,
    isAllowedPrevious,
    isAllowedNext,
  } = useContext(BeveragesContext);

  const handleNavigation = (direction) => {
    setLoading(true);
    if (direction === "next") {
      let newPage = page + 1;
      setPage(newPage);
      isAllowedNext(newPage);
      isAllowedPrevious(newPage);
    } else {
      let newPage = page - 1;
      setPage(newPage);
      isAllowedPrevious(newPage);
      isAllowedNext(newPage);
    }
  };

  useEffect(() => {
    getBeverages(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Container>
      <h1>Bebidas</h1>
      <Content>
        {beverages.map((beverage) => (
          <Card key={beverage.id} beverage={beverage} />
        ))}
      </Content>

      <ButtonContainer>
        <IconButton
          color="inherit"
          disabled={!previous || loading ? true : false}
          onClick={() => {
            handleNavigation("previous");
          }}
        >
          <BiLeftArrow />
        </IconButton>
        <span>- | {page} | -</span>
        <IconButton
          color="inherit"
          disabled={!next || loading ? true : false}
          onClick={() => {
            handleNavigation("next");
          }}
        >
          <BiRightArrow />
        </IconButton>
      </ButtonContainer>
    </Container>
  );
};

export default Beverages;
