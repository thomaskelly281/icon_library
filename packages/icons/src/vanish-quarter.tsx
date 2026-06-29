import { mdiVanishQuarter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VanishQuarter(props: IconComponentProps) {
  return <Icon path={mdiVanishQuarter} {...props} />;
}

export { mdiVanishQuarter as path };
