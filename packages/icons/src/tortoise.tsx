import { mdiTortoise } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tortoise(props: IconComponentProps) {
  return <Icon path={mdiTortoise} {...props} />;
}

export { mdiTortoise as path };
