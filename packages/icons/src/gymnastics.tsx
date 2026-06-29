import { mdiGymnastics } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Gymnastics(props: IconComponentProps) {
  return <Icon path={mdiGymnastics} {...props} />;
}

export { mdiGymnastics as path };
