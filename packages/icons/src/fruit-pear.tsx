import { mdiFruitPear } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FruitPear(props: IconComponentProps) {
  return <Icon path={mdiFruitPear} {...props} />;
}

export { mdiFruitPear as path };
