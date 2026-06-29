import { mdiCarBack } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarBack(props: IconComponentProps) {
  return <Icon path={mdiCarBack} {...props} />;
}

export { mdiCarBack as path };
