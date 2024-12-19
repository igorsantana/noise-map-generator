import { Button } from "@/components/ui/button";
import { ColorPicker } from "@/components/ui/color-picker";
import { Input } from "@/components/ui/input";
import { faLessThanEqual, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type IconValue = "less" | "lesseq";

export default function ColorSelector() {
  const [color, setColor] = useState<string>("#0f0f0f");
  const [firstIcon, setFirstIcon] = useState<IconValue>("lesseq");
  const [secondIcon, setSecondIcon] = useState<IconValue>("lesseq");

  const icon = (comp: boolean) => {
    return comp ? faLessThanEqual : faLessThan;
  };

  return (
    <div className="flex items-center justify-between leading-4	mt-2">
      <Input type="number" className="w-24 h-8" placeholder="0.x" />
      <Button
        variant="outline"
        size="icon"
        onClick={() => setFirstIcon(firstIcon === "less" ? "lesseq" : "less")}
        className="h-8 w-8"
      >
        <FontAwesomeIcon icon={icon(firstIcon === "lesseq")} />
      </Button>
      <ColorPicker
        value={color}
        onChange={(e) => setColor(e)}
        className="h-8 w-8"
      />
      <Button
        variant="outline"
        size="icon"
        onClick={() => setSecondIcon(secondIcon === "less" ? "lesseq" : "less")}
        className="h-8 w-8"
      >
        <FontAwesomeIcon icon={icon(secondIcon === "lesseq")} />
      </Button>
      <Input type="number" className="w-24 h-8" placeholder="0.x" />
    </div>
  );
}
