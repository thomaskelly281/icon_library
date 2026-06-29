import { mdiSprinklerFire } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SprinklerFire(props: IconComponentProps) {
  return <Icon path={mdiSprinklerFire} {...props} />;
}

export { mdiSprinklerFire as path };
