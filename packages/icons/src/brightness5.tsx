import { mdiBrightness5 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Brightness5(props: IconComponentProps) {
  return <Icon path={mdiBrightness5} {...props} />;
}

export { mdiBrightness5 as path };
