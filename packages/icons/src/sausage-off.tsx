import { mdiSausageOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SausageOff(props: IconComponentProps) {
  return <Icon path={mdiSausageOff} {...props} />;
}

export { mdiSausageOff as path };
