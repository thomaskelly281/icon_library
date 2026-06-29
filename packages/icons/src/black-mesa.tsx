import { mdiBlackMesa } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BlackMesa(props: IconComponentProps) {
  return <Icon path={mdiBlackMesa} {...props} />;
}

export { mdiBlackMesa as path };
