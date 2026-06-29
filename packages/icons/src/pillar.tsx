import { mdiPillar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pillar(props: IconComponentProps) {
  return <Icon path={mdiPillar} {...props} />;
}

export { mdiPillar as path };
