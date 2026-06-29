import { mdiCupWater } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CupWater(props: IconComponentProps) {
  return <Icon path={mdiCupWater} {...props} />;
}

export { mdiCupWater as path };
