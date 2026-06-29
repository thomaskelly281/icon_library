import { mdiDramaMasks } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DramaMasks(props: IconComponentProps) {
  return <Icon path={mdiDramaMasks} {...props} />;
}

export { mdiDramaMasks as path };
