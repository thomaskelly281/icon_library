import { mdiBagChecked } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BagChecked(props: IconComponentProps) {
  return <Icon path={mdiBagChecked} {...props} />;
}

export { mdiBagChecked as path };
