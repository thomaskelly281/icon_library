import { mdiBomb } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bomb(props: IconComponentProps) {
  return <Icon path={mdiBomb} {...props} />;
}

export { mdiBomb as path };
