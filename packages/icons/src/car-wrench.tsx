import { mdiCarWrench } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarWrench(props: IconComponentProps) {
  return <Icon path={mdiCarWrench} {...props} />;
}

export { mdiCarWrench as path };
