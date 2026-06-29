import { mdiProgressPencil } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProgressPencil(props: IconComponentProps) {
  return <Icon path={mdiProgressPencil} {...props} />;
}

export { mdiProgressPencil as path };
