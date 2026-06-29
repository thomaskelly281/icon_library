import { mdiBellCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellCog(props: IconComponentProps) {
  return <Icon path={mdiBellCog} {...props} />;
}

export { mdiBellCog as path };
