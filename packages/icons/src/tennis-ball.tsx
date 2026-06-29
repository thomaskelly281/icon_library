import { mdiTennisBall } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TennisBall(props: IconComponentProps) {
  return <Icon path={mdiTennisBall} {...props} />;
}

export { mdiTennisBall as path };
