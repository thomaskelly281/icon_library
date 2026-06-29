import { mdiFridge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Fridge(props: IconComponentProps) {
  return <Icon path={mdiFridge} {...props} />;
}

export { mdiFridge as path };
