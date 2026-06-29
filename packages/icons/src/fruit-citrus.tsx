import { mdiFruitCitrus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FruitCitrus(props: IconComponentProps) {
  return <Icon path={mdiFruitCitrus} {...props} />;
}

export { mdiFruitCitrus as path };
