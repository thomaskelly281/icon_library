import { mdiBrightness3 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Brightness3(props: IconComponentProps) {
  return <Icon path={mdiBrightness3} {...props} />;
}

export { mdiBrightness3 as path };
