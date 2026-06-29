import { mdiInformationSlabCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InformationSlabCircle(props: IconComponentProps) {
  return <Icon path={mdiInformationSlabCircle} {...props} />;
}

export { mdiInformationSlabCircle as path };
