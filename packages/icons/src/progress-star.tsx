import { mdiProgressStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProgressStar(props: IconComponentProps) {
  return <Icon path={mdiProgressStar} {...props} />;
}

export { mdiProgressStar as path };
