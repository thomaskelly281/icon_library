import { mdiEgg } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Egg(props: IconComponentProps) {
  return <Icon path={mdiEgg} {...props} />;
}

export { mdiEgg as path };
