import { mdiWater } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Water(props: IconComponentProps) {
  return <Icon path={mdiWater} {...props} />;
}

export { mdiWater as path };
