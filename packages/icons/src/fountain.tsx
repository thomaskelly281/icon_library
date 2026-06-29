import { mdiFountain } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Fountain(props: IconComponentProps) {
  return <Icon path={mdiFountain} {...props} />;
}

export { mdiFountain as path };
