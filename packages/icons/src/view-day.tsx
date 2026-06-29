import { mdiViewDay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewDay(props: IconComponentProps) {
  return <Icon path={mdiViewDay} {...props} />;
}

export { mdiViewDay as path };
