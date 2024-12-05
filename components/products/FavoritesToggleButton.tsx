import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";

function FavoritesToggleButton({ productId }: { productId: string }) {
  return (
    <Button size={"icon"} variant={"outline"} className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
}
export default FavoritesToggleButton;
