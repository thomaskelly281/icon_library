import { mdiTooth } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tooth(props: IconComponentProps) {
  return <Icon path={mdiTooth} {...props} />;
}

export { mdiTooth as path };
