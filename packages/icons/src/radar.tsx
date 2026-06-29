import { mdiRadar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Radar(props: IconComponentProps) {
  return <Icon path={mdiRadar} {...props} />;
}

export { mdiRadar as path };
