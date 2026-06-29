import { mdiMessageDraw } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageDraw(props: IconComponentProps) {
  return <Icon path={mdiMessageDraw} {...props} />;
}

export { mdiMessageDraw as path };
