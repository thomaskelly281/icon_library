import { mdiVanish } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Vanish(props: IconComponentProps) {
  return <Icon path={mdiVanish} {...props} />;
}

export { mdiVanish as path };
