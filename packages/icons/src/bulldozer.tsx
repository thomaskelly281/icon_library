import { mdiBulldozer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bulldozer(props: IconComponentProps) {
  return <Icon path={mdiBulldozer} {...props} />;
}

export { mdiBulldozer as path };
