import { mdiInformationSlabBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InformationSlabBox(props: IconComponentProps) {
  return <Icon path={mdiInformationSlabBox} {...props} />;
}

export { mdiInformationSlabBox as path };
