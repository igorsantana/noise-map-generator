import { Button } from "@/components/ui/button";
import { ColorPicker } from "@/components/ui/color-picker";
import { Input } from "@/components/ui/input";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ColorSelector() {
  const [color, setColor] = useState("#0f0f0f");

  return (
    <div className="flex items-center justify-between">
      <Input type="number" className="w-24" placeholder="0.x" />
      <Button variant="outline" size="icon">
        <FontAwesomeIcon icon={faLessThanEqual} />
      </Button>
      <ColorPicker value={color} onChange={(e) => setColor(e)} />
      <Button variant="outline" size="icon">
        <FontAwesomeIcon icon={faLessThanEqual} />
      </Button>
      <Input type="number" className="w-24" placeholder="0.x" />
    </div>
  );
}
