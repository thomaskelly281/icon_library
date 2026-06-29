import { mdiWrench } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Wrench(props: IconComponentProps) {
  return <Icon path={mdiWrench} {...props} />;
}

export { mdiWrench as path };
