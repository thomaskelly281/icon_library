import { mdiCandy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Candy(props: IconComponentProps) {
  return <Icon path={mdiCandy} {...props} />;
}

export { mdiCandy as path };
