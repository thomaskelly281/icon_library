import { mdiInformationBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InformationBox(props: IconComponentProps) {
  return <Icon path={mdiInformationBox} {...props} />;
}

export { mdiInformationBox as path };
