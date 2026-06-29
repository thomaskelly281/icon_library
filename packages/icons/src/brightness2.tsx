import { mdiBrightness2 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Brightness2(props: IconComponentProps) {
  return <Icon path={mdiBrightness2} {...props} />;
}

export { mdiBrightness2 as path };
