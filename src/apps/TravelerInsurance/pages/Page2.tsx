import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import AppBarLayout from "../components/AppBarLayout";
import { Transitions } from "../components/transitions";
import { backAtom } from "../recoil";

const Page2 = () => {
  const navigate = useNavigate();
  const [isBack, setIsBack] = useAtom(backAtom);
  return (
    <AppBarLayout
      onClickPrev={() => {
        setIsBack(true);
        navigate(-1);
      }}
    >
      <div>adfljlasdjfldsajfljasdlfjkl</div>
    </AppBarLayout>
  );
};

export default () => {
  return (
    <Transitions>
      <Page2 />
    </Transitions>
  );
};
