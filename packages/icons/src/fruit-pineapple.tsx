import { mdiFruitPineapple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FruitPineapple(props: IconComponentProps) {
  return <Icon path={mdiFruitPineapple} {...props} />;
}

export { mdiFruitPineapple as path };
