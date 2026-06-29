import { mdiFruitGrapes } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FruitGrapes(props: IconComponentProps) {
  return <Icon path={mdiFruitGrapes} {...props} />;
}

export { mdiFruitGrapes as path };
