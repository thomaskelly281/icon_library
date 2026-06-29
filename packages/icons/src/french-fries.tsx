import { mdiFrenchFries } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FrenchFries(props: IconComponentProps) {
  return <Icon path={mdiFrenchFries} {...props} />;
}

export { mdiFrenchFries as path };
