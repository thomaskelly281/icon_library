import { mdiRadiologyBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RadiologyBox(props: IconComponentProps) {
  return <Icon path={mdiRadiologyBox} {...props} />;
}

export { mdiRadiologyBox as path };
