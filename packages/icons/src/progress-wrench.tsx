import { mdiProgressWrench } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProgressWrench(props: IconComponentProps) {
  return <Icon path={mdiProgressWrench} {...props} />;
}

export { mdiProgressWrench as path };
