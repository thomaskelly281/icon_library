import { mdiRadiator } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Radiator(props: IconComponentProps) {
  return <Icon path={mdiRadiator} {...props} />;
}

export { mdiRadiator as path };
