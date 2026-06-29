import { mdiDraw } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Draw(props: IconComponentProps) {
  return <Icon path={mdiDraw} {...props} />;
}

export { mdiDraw as path };
