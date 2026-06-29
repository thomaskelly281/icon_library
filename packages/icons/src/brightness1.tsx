import { mdiBrightness1 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Brightness1(props: IconComponentProps) {
  return <Icon path={mdiBrightness1} {...props} />;
}

export { mdiBrightness1 as path };
