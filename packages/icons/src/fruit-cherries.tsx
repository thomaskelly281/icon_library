import { mdiFruitCherries } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FruitCherries(props: IconComponentProps) {
  return <Icon path={mdiFruitCherries} {...props} />;
}

export { mdiFruitCherries as path };
