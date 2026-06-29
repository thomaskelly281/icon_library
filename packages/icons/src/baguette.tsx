import { mdiBaguette } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Baguette(props: IconComponentProps) {
  return <Icon path={mdiBaguette} {...props} />;
}

export { mdiBaguette as path };
