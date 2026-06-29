import { mdiSkiWater } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkiWater(props: IconComponentProps) {
  return <Icon path={mdiSkiWater} {...props} />;
}

export { mdiSkiWater as path };
